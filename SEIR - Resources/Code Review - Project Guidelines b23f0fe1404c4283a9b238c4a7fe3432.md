# Code Review - Project Guidelines

## Overview

Rather than prepare a demonstration of your app for the entire class, like you did for project 1, you will prepare your materials for review / evaluation. We will provide direct feedback on your App through a two phase “code review” process.

## What is a code review?

A code review typically begins with a `pull request` opened by a developer/team and assigned to another member of the team for feedback and review before the code is merged into an existing codebase. A code review is for development teams to recognize and remedy bugs before code hits production.

Code reviews are about more than just finding bugs though, they can improve code quality through alignment of product goals, coding styles and established development patterns; with regular code reviews teams can improve engineering efficiencies and knowledge sharing.

*This code review for project 2 differs from the typical review process in the following ways:*

- Your code is already in production
- The instructional team will not need to ‘approve’ changes - instead providing feedback / suggestions for future development
- We will focus less on bugs / broken features and more on current successes and features with potential.

## How will it work?

This ‘code review’ will be completed in two phases, each phase will provide you and the instructional team time to assess your work and evaluate your code according to the requirements of the project.

## Phase 1 - Prepare your code for review

Duration: 90 *minutes after presentations/demos*

1. Share the following links in the provided class Slack thread:
    1. A deployed application - (Heroku / Railway / etc.)
    2. A link to your project’s Github repository
2. Each dev team will open 3 Github `issues` on the completed project. 
Each issue will include code snippets or self-evaluation for consideration by the instructor(s):
    - A “Glow” Code Snippet
    - A “Grow” Code Snippet
    - Reflection / Future features summary

### What is a Github issue?

“GitHub Issues are a bug tracking system built into the GitHub service. They provide a way for people to submit problems, get feedback, and collaborate together on code projects.” - [Learn More](https://www.notion.so/54c83cc78a784f22bfd0dd2685551539?pvs=21).

If your project does not have an ‘issues’ tab at the top of the repository’s navigation menu, you do not have issues **enabled** for your project. To enable issues:

1. Navigate to your GH project and select the settings tab
2. Scroll to the `Features` section
3. Select the checkbox labeled “issues” to allow issues to be created on your project.

### Issue Formatting

Complete each form including:

- a title for your issue (glow, grow, reflection)
- A code snippet or paragraph providing content for review
- Any supplemental notes or resource links

### Github Issues

**Glow**
Highlight a feature of your application that reflects your “best” work, or had the most impact on your project’s functionality.  What 50-100 lines of code are you most proud of? **Include a code snippet.**

---

**Grow**

What is one feature/aspect of your application that feels incomplete, buggy, or needs a future refactor? Highlight a feature / component that you believe requires feedback to improve. I**nclude a code snippet.**

---

**Reflection**

In 150-300 words answer the following questions:

- What was the most difficult part of your project’s development?
- What did you learn about developing in Mongoose + Express + Node ?
- Highlight 1-2 future features / approaches you will be investigating in future development work.

---

## Phase 2 - Instructor Review

Duration: 120 minutes

Each member of the instructional team will review a selection of projects. During this phase, each instructor will assess your team’s work and determine if it meets the project’s requirements .

### Summary of Requirements

Each project will includes its own unique requirements which can be found in the project repos

**Each instructor will note one or more areas for review/discussion.**

### Example P2 Rubric

| **Summary of Requirements** | **1 - Does not meet expectations** | **2 - Satisfactory** | **3 - Exceeds expectations** |
| --- | --- | --- | --- |
| **API Integrations**  | 1 API but inconsistent use of data across your pages / views | Includes 1 API with each view / page making fetches to different endpoints  | Includes multiple API data sources or features complex custom fetch queries |
| **Sufficient complexity**  | Application is not full CRUD across your models  | Application is full CRUD across 2+ models.  | Application features user Auth and includes full CRUD across 3+ models (with several associations or integrates an API) |
| **Deployed to production**  | Application is not deployed | Application is deployed to Heroku | —- |
| **Basic styling & layout design**  | Application is not styled or uses inconsistent CSS styling conventions 
more than a few visual bugs /defects: 
- overflowing text 
- distorted images
- text colors that are too dark / low contrast to be legible. | App uses custom CSS, utilizing flex / grid for content layout; consistent theming found across all pages; none or a few visual bugs. | Consistently styled application uses custom CSS and is mobile responsive; a 3rd party css styling library includes no visual bugs. |
| **Functionality**  | The application repeatedly crashes between page refreshes; broken links or non functional elements may be found on the page.  | All features described in readme are present and functional. 
Very few errors / inconsistencies UI behaviors. 
No application crashes occur if a user performs intended actions. | The application handles errors gracefully and presents the user relevant information about the error (flash messages / 404 page)  |
| **Code quality**  | Variable names are inconsistently cased; indentation and line breaks are not consistent between components. Comments are not present / non descriptive. | Developer team uses basic code formatter / linter like Prettier to provide consistent line break, indentation, and formatting. Consistency is observed in function declaration style (declaration vs expression). Variables and imports are organized.  | Developer team has consistent well formatted code and uses doc strings /  formatted comments to organize and describe the code.  |
| **Documentation** | Readme is missing [required content](https://www.notion.so/54c83cc78a784f22bfd0dd2685551539?pvs=21) | Readme / Documentation is complete  | Readme includes additional very thorough description and documentation of the project planning, its user considerations, and future features |

### Example P3 Rubric

| **Summary of Requirements** | **1 - Does not meet expectations** | **2 - Satisfactory** | **3 - Exceeds expectations** |
| --- | --- | --- | --- |
| **API Integrations**  | n/a | n/a | Includes API data sources or features complex custom fetch queries API interactions |
| **Sufficient complexity**  | Application is not full CRUD across your required models  | (SOLO) - Application is full CRUD across 2 models with a 1:M association (excluding User).

(TEAMS) - Application is FULL CRUD across 3+ models with associations (excluding User). | Application includes authentication + roles and features full CRUD across most models.  |
| **Deployed to production**  | Application is not deployed | Application is deployed to Heroku |  |
| **Basic styling & layout design**  | Application is not styled or uses inconsistent CSS styling conventions 
more than a few visual bugs /defects: 
- overflowing text 
- distorted images
- text colors that are too dark / low contrast to be legible. | App uses custom CSS, utilizing flex / grid for content layout; consistent theming found across all pages; none or a few visual bugs.

(TEAMS) - includes a 3rd party CSS library not demoed in class.  | Consistently styled application uses custom CSS and is mobile responsive; (SOLO) a new 3rd party css styling library includes no visual bugs.

(TEAMS) Client-side data visualization or animations are included  |
| **Functionality**  | The application repeatedly crashes between page refreshes; broken links or non functional elements may be found on the page.  | All features described in readme are present and functional. 
Very few errors / inconsistencies UI behaviors. 
No application crashes occur if a user performs intended actions. | The application handles errors gracefully and presents the user relevant information about the error (flash messages / 404 page)  |
| **Code quality**  | Variable names are inconsistently cased; indentation and line breaks are not consistent between components. Comments are not present / non descriptive. | Developer team uses basic code formatter / linter like Prettier / Pylance to provide consistent spacing, indentation, and formatting. Consistency is observed in function naming and variables and imports are organized.  | Developer team has consistent well formatted code and uses doc strings /  formatted comments to organize and describe the code.  |
| **Documentation** | Readme is missing required content | Readme / Documentation is complete  | Readme includes additional very thorough description and documentation of the project planning, its user considerations, and future features |

## (Optional) Post Review Conversation

Duration:  ~5-10 minutes per group 

If requested, the instructional team will meet with each group to discuss their posted issues, any concerns, and ask additional questions based on the submitting code and your reflections.

### What can you expect?

The instructional team will discuss your provided code snippets together, providing constructive feedback as comments on your issues. These notes/comments may include:

- Suggestions for alternative approaches
- Suggestions to improve clarity
- Recommendations on additional learning paths
- Recommendations on libraries to enhance your project

### **Evaluating Code**

We may ask for your team to explain a particular implementation, especially where it differs from an approach outlined in class lessons. We are less concerned with ‘perfect’ solutions, more so your ability to demonstrate a deeper understanding of the implementation and explain the pros / cons of your design decisions.