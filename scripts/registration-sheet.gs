/**
 * Accurus workshop registration backend. Lives in the Registrations Google
 * Sheet: Extensions > Apps Script > paste this file > Deploy > New deployment >
 * Web app, "Execute as: Me", "Who has access: Anyone". Put the /exec URL in
 * REGISTRATION_SHEET_URL and TOKEN in REGISTRATION_SHEET_TOKEN on Vercel.
 *
 * Sheet "Registrations" columns: A Timestamp, B Organization, C Name, D Email,
 * E Status (Confirmed | Waiting list), F Source (Web | Mail), G Notes.
 * One row per participant. Doug adds mailed-in registrations as rows with
 * Status "Confirmed" and deletes a row to cancel; the count below picks that up.
 *
 * Redeploy (Deploy > Manage deployments > edit > new version) after any change.
 */
var TOKEN = "change-me-to-a-long-random-string";
var SHEET = "Registrations";
var STATUS_COL = 5; // E

function doGet(e) {
  if (!e.parameter || e.parameter.token !== TOKEN) return json({ error: "forbidden" });
  return json({ seats: confirmedSeats() });
}

function doPost(e) {
  var body;
  try {
    body = JSON.parse(e.postData.contents || "{}");
  } catch (err) {
    return json({ error: "bad json" });
  }
  if (body.token !== TOKEN) return json({ error: "forbidden" });
  if (!body.organization || !Array.isArray(body.participants) || !body.participants.length) {
    return json({ error: "missing fields" });
  }
  // The lock makes count-then-append atomic, so two simultaneous submissions
  // can't both see the last seat.
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var seats = confirmedSeats();
    // Doug's rule: if any seat remains, accept the whole party (even two for one seat).
    var status = seats < Number(body.capacity) ? "Confirmed" : "Waiting list";
    var sheet = SpreadsheetApp.getActive().getSheetByName(SHEET);
    var now = new Date();
    body.participants.forEach(function (p) {
      sheet.appendRow([now, body.organization, p.name, p.email, status, "Web", ""]);
    });
    return json({ status: status, seats: confirmedSeats() });
  } finally {
    lock.releaseLock();
  }
}

function confirmedSeats() {
  var sheet = SpreadsheetApp.getActive().getSheetByName(SHEET);
  var last = sheet.getLastRow();
  if (last < 2) return 0;
  return sheet
    .getRange(2, STATUS_COL, last - 1, 1)
    .getValues()
    .filter(function (r) {
      return String(r[0]).trim().toLowerCase() === "confirmed";
    }).length;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
