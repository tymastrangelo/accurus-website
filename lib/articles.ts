import type { ComponentType } from "react";
import InformationGap from "@/content/articles/what-exactly-is-an-information-gap";
import PlentyOfData from "@/content/articles/plenty-of-data-but-does-it-have-evidence";
import FirstSurveyQuestion from "@/content/articles/before-you-write-the-first-survey-question";
import SurveyMistakes from "@/content/articles/10-survey-mistakes-that-produce-bad-data";
import RandomDigitDialing from "@/content/articles/random-digit-dialing-and-telephone-sampling";
import OnlineSurveys from "@/content/articles/online-surveys-better-technology-better-data";
import MostDangerousSurvey from "@/content/articles/the-most-dangerous-survey";
import AverageWrongStory from "@/content/articles/when-an-average-tells-the-wrong-story";
import ProblemsToDecisions from "@/content/articles/from-business-problems-to-better-decisions";
import FindingsToAction from "@/content/articles/from-research-findings-to-business-action";

/**
 * The Insights collection: Doug's four categories and the articles filed under
 * each. The first article in a category is its featured article. Titles and
 * summaries are Doug's own wording; each body is the text of his online-version
 * PDF, and his downloadable PDF lives at /articles/<slug>.pdf.
 */

export type Article = {
  slug: string;
  title: string;
  summary: string;
  Body: ComponentType;
};

export type Category = {
  /** Anchor on /insights, so article pages can link back to their group. */
  id: string;
  title: string;
  description: string;
  articles: Article[];
};

export const categories: Category[] = [
  {
    id: "business-problem",
    title: "Understanding the Business Problem",
    description:
      "How to recognize information gaps, challenge assumptions, and identify what you really need to know before making important business decisions.",
    articles: [
      {
        slug: "what-exactly-is-an-information-gap",
        title: "What Exactly Is an Information Gap?",
        summary:
          "Some of the costliest business decisions begin with questions no one realizes need to be asked. Learn how to recognize the information gaps that can lead organizations in the wrong direction.",
        Body: InformationGap,
      },
      {
        slug: "plenty-of-data-but-does-it-have-evidence",
        title: "Your Organization Has Plenty of Data. But Does It Have Evidence?",
        summary:
          "Organizations collect enormous amounts of data, but having information isn’t the same as having reliable evidence. Learn why the distinction matters and how to recognize when the information available may not be sufficient to support an important decision.",
        Body: PlentyOfData,
      },
    ],
  },
  {
    id: "designing-better-surveys",
    title: "Designing Better Surveys",
    description:
      "Practical guidance for planning and conducting surveys that ask the right questions, reach the right people, and produce information you can rely on.",
    articles: [
      {
        slug: "before-you-write-the-first-survey-question",
        title: "Before You Write the First Survey Question, Answer This One",
        summary:
          "One of the most important decisions in survey research happens before a single question is written. Discover why clearly defining what you need to learn is the foundation for a survey that produces useful, actionable information.",
        Body: FirstSurveyQuestion,
      },
      {
        slug: "10-survey-mistakes-that-produce-bad-data",
        title: "10 Survey Mistakes That Produce Bad Data",
        summary:
          "Even well-intentioned surveys can produce unreliable results when common mistakes go unnoticed. Explore ten problems that can undermine survey quality and learn why avoiding them is essential to making sound business decisions.",
        Body: SurveyMistakes,
      },
      {
        slug: "random-digit-dialing-and-telephone-sampling",
        title: "Random Digit Dialing and the Challenges of Sampling the General Public by Telephone",
        summary:
          "Telephone surveys once offered researchers a practical way to reach a broad cross-section of the public. Learn how changing telephone habits have complicated random digit dialing and what those changes mean for obtaining representative survey results.",
        Body: RandomDigitDialing,
      },
      {
        slug: "online-surveys-better-technology-better-data",
        title: "Online Surveys: Better Technology Doesn’t Always Mean Better Data",
        summary:
          "Online surveys have made collecting responses faster, easier, and less expensive than ever. But convenience doesn’t guarantee quality. Explore why the way respondents are selected can matter more than the technology used to collect their answers.",
        Body: OnlineSurveys,
      },
    ],
  },
  {
    id: "bad-data",
    title: "Recognizing Bad Data and Misleading Results",
    description:
      "How to spot survey problems, avoid misleading conclusions, and recognize when the information you trust may be telling the wrong story.",
    articles: [
      {
        slug: "the-most-dangerous-survey",
        title: "The Most Dangerous Survey Can Be the One You Trust",
        summary:
          "A survey doesn’t have to look flawed to lead an organization in the wrong direction. Discover how seemingly credible results can create false confidence and why understanding how the research was conducted is essential before trusting its conclusions.",
        Body: MostDangerousSurvey,
      },
      {
        slug: "when-an-average-tells-the-wrong-story",
        title: "When an Average Tells the Wrong Story",
        summary:
          "Averages can make complex survey results easier to understand, but they can also conceal important differences among respondents. Learn how looking beyond the overall average can reveal findings that change both your understanding of a problem and the decisions you make.",
        Body: AverageWrongStory,
      },
    ],
  },
  {
    id: "better-decisions",
    title: "Turning Reliable Evidence into Better Decisions",
    description:
      "How to move beyond research findings to understand what the evidence means, identify practical next steps, and make better-informed business decisions.",
    articles: [
      {
        slug: "from-business-problems-to-better-decisions",
        title: "From Business Problems to Better Decisions",
        summary:
          "Good business decisions begin with a clear understanding of the problem, not simply more information. Follow the path from identifying an information gap to gathering reliable evidence and using what you’ve learned to make a better-informed decision.",
        Body: ProblemsToDecisions,
      },
      {
        slug: "from-research-findings-to-business-action",
        title: "From Research Findings to Business Action",
        summary:
          "Completing a survey and presenting the findings doesn’t mean the work is finished. Explore how organizations can move from understanding what the research reveals to determining what it means, what should be done, and how to put those decisions into action.",
        Body: FindingsToAction,
      },
    ],
  },
];

export const allArticles = categories.flatMap((c) => c.articles);

export function findArticle(slug: string) {
  const category = categories.find((c) => c.articles.some((a) => a.slug === slug));
  const article = category?.articles.find((a) => a.slug === slug);
  return category && article ? { category, article } : undefined;
}

/** Doug's authorship and AI-use statement, at the foot of /insights (#ai-disclosure); each article links to it. */
export const aiDisclosure =
  "Douglas Cox writes articles for Accurus Research Insights based on his professional experience, knowledge, and personal perspectives gained during more than 40 years in survey research. He uses AI as a supplementary tool for organizational and editorial assistance; all core ideas, insights, judgments, and conclusions are his own.";
