/** Article text: Random Digit Dialing and the Challenges of Sampling the General Public by Telephone */
export default function Article() {
  return (
    <>
      <p>
        There was a time when conducting a telephone survey of the general public was relatively
        straightforward. If you wanted to survey residents of a particular state, county, or
        metropolitan area, you could obtain a sample of randomly generated telephone numbers
        associated with that geographic area and begin calling. It wasn’t a perfect system, but it
        generally worked reasonably well.
      </p>
      <p>
        Then cell phones came along, and something important changed. The relationship between a
        telephone number and the geographic location of the person using that number became much
        less reliable.
      </p>
      <p>
        That might not sound like a particularly serious problem. But if you’re conducting a survey
        and want the results to represent people living in a specific geographic area, it can be a
        very serious problem indeed.
      </p>
      <h2>How Random Digit Dialing Used to Work</h2>
      <p>
        For many years, random digit dialing, commonly called RDD, was a standard approach to
        selecting respondents for telephone surveys of the general public.
      </p>
      <p>
        Suppose I wanted to conduct a survey of residents in an area covered by four telephone area
        codes. I could contact a telephone sample vendor and request, say, 5,000 randomly generated
        telephone numbers.
      </p>
      <p>
        The vendor would prepare the sample, distributing the numbers across the appropriate area
        codes and three-digit telephone exchanges. The distribution could be proportioned to reflect
        the relative size of the four-digit telephone-number blocks associated with the geographic
        area.
      </p>
      <p>The actual randomization took place within those four-digit telephone-number blocks.</p>
      <p>
        There were limitations, of course. Some numbers belonged to businesses rather than
        households. Others were disconnected or otherwise unusable. And not everyone had a landline
        telephone.
      </p>
      <p>
        Nevertheless, the relationship between telephone numbers and geography made it possible to
        construct a sampling frame that reasonably approximated the population we wanted to reach.
      </p>
      <p>Cell phones changed that relationship.</p>
      <h2>Your Telephone Number No Longer Tells Us Where You Live</h2>
      <p>
        With traditional landline telephones, an area code and three-digit exchange could tell a
        researcher quite a bit about where a household was located.
      </p>
      <p>
        If I lived in North Carolina and moved to Montana, my landline telephone number would
        ordinarily change.
      </p>
      <p>But with cell phones, that’s no longer necessarily the case.</p>
      <p>
        I can live in North Carolina with a 336 area code, move to Montana, then to California, and
        finally to Florida, and keep that same telephone number for the rest of my life.
      </p>
      <p>
        At the same time, someone who originally lived in the Bronx with a 718 area code might move
        to North Carolina and keep that New York number.
      </p>
      <p>
        Both individuals have perfectly legitimate telephone numbers. The problem is that those
        numbers no longer reliably identify where they live.
      </p>
      <p>
        Now imagine that I’m conducting a survey of North Carolina residents and order a random
        digit sample using only telephone numbers associated with North Carolina area codes and
        exchanges.
      </p>
      <p>Two problems immediately arise.</p>
      <p>
        <strong>The first is under-coverage.</strong> Some North Carolina residents will be missing
        from my sampling frame because they moved to the state from somewhere else and retained
        their previous cell phone numbers.
      </p>
      <p>
        <strong>The second is over-coverage.</strong> My sample may include people who have North
        Carolina telephone numbers but no longer live in the state.
      </p>
      <p>
        In other words, the sample includes people who shouldn’t be there while excluding some of
        the people who should.
      </p>
      <p>And that creates a problem for the reliability of the survey results.</p>
      <h2>Can’t We Just Screen Out the People Who Don’t Belong?</h2>
      <p>
        That’s a reasonable question, and there is a relatively simple way to address part of the
        problem.
      </p>
      <p>
        Early in the interview, we could ask respondents, “Do you currently live in North Carolina?”
      </p>
      <p>If someone says no, we terminate the interview.</p>
      <p>
        That takes care of the over-coverage problem among the people we contact. We’re no longer
        including respondents who live outside our geographic area of interest.
      </p>
      <p>But what about under-coverage?</p>
      <p>
        Remember our resident who moved from the Bronx to North Carolina and kept the 718 area code?
      </p>
      <p>
        That person was never included in our original North Carolina telephone sample. We can’t
        screen someone into a survey if we never had an opportunity to contact them in the first
        place.
      </p>
      <p>This is an important distinction.</p>
      <p>
        <strong>Screening can remove people who don’t belong in the survey, but it cannot recover
        people who were missing from the sampling frame to begin with.</strong>
      </p>
      <p>
        And if those missing individuals differ in meaningful ways from the people we do reach, our
        survey findings may be biased.
      </p>
      <h2>What About Using Address Information to Identify Cell Phone Users?</h2>
      <p>
        Telephone sample vendors have developed ways to improve the geographic identification of
        cell phone numbers.
      </p>
      <p>
        Rather than relying exclusively on area codes and exchanges, vendors may attempt to
        associate telephone numbers with additional information, such as billing ZIP codes or other
        address-related records.
      </p>
      <p>This can certainly help.</p>
      <p>
        Instead of assuming someone lives in North Carolina because they have a North Carolina area
        code, the vendor is attempting to determine where that person actually resides.
      </p>
      <p>But there is still a problem.</p>
      <p>
        That additional information isn’t always available, and when it is available, it isn’t
        automatically accurate or current.
      </p>
      <p>
        People move. Records become outdated. Some telephone numbers cannot be reliably matched to
        residential addresses.
      </p>
      <p>
        So while this approach can improve geographic coverage, it doesn’t guarantee the elimination
        of coverage error.
      </p>
      <p>
        We’re still faced with the question of whether our sampling frame adequately represents the
        people we want to study.
      </p>
      <h2>An Alternative: Address-Based Sampling</h2>
      <p>
        One way to approach the geographic coverage problem is to stop using telephone numbers as
        the starting point.
      </p>
      <p>Instead, we can use physical addresses.</p>
      <p>This approach is known as address-based sampling, or ABS.</p>
      <p>
        Rather than building the sampling frame from telephone numbers associated with a geographic
        area, we draw a sample from residential addresses within that area.
      </p>
      <p>Suppose, once again, that we want to survey residents of North Carolina.</p>
      <p>
        Using address-based sampling, we could select residential addresses throughout the state and
        send an invitation to each sampled address.
      </p>
      <p>
        The invitation might be a letter or postcard explaining the purpose of the research,
        requesting participation, and providing a website address or QR code along with a unique
        access code to complete the survey online.
      </p>
      <p>Notice what’s different.</p>
      <p>
        We’re no longer concerned about whether a resident has a 336, 718, or some other telephone
        area code. We’re selecting households based on where they are located, not on the telephone
        numbers they happen to use.
      </p>
      <p>
        That can offer a substantial advantage when geographic coverage is especially important.
      </p>
      <p>
        Of course, address-based sampling brings its own challenges. Not everyone responds to mailed
        invitations. Some addresses may be vacant or difficult to classify. And if the survey is
        completed online, we still need to consider whether sampled residents have adequate access
        to the internet and are willing to participate.
      </p>
      <p>
        There are also decisions to make about selecting individuals within households and following
        up with nonrespondents.
      </p>
      <p>
        So ABS isn’t a magic solution that eliminates every potential source of survey error. It
        does, however, provide a sampling frame that can be much better suited to surveys where the
        geographic location of the population is especially important.
      </p>
      <h2>The Lesson: Begin With the Population, Not the Method</h2>
      <p>There’s a broader lesson here that extends well beyond telephone surveys.</p>
      <p>Too often, discussions about survey research begin with the method of data collection.</p>
      <p>
        Should we conduct the survey by telephone? Should we send invitations by email? Should we
        put a questionnaire on our website?
      </p>
      <p>Those may be important questions, but they shouldn’t be the first ones we ask.</p>
      <p>We should begin by defining exactly whom we need to hear from.</p>
      <p>
        Once we’ve identified that population, we can determine what sampling frame gives us the
        best opportunity to reach its members. Only then should we decide how we’re going to collect
        the information.
      </p>
      <p>The order matters.</p>
      <p>
        A well-written questionnaire and a carefully administered survey won’t necessarily produce
        reliable findings if important segments of the population were never given an opportunity to
        participate.
      </p>
      <p>
        And that is especially troubling when leaders are relying on those findings to make
        important decisions.
      </p>
      <p>
        <strong>The goal isn’t simply to collect responses. It’s to collect responses from the right
        people so that the evidence we produce can be trusted.</strong>
      </p>
      <p>That’s where good survey research begins.</p>
    </>
  );
}
