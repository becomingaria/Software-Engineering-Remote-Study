# P4 Intro

![](https://i.imgur.com/NQXEQci.png)

# Project #4: Your Capstone Project

## Overview

**You’ve come a long way, and it's time to show it.** This will be your most advanced project to date.

**Before you start working** on the planning for your project, be sure to review your idea with an instructor to ensure that it both:

- **Meets the minimum requirements**
- is relevant to your interests/goals
- **Is reasonably scoped**

## Project Requirements

### Planning Requirements - Due End of Day May 9th

As you've discovered, a project consists of more than just code.

This project requires **planning** organized within a **Trello board** with the following **lists**:

- **Icebox**: Holds user stories that have yet to be moved to the *Current/MVP* list. All user stories are originally put into the *Icebox*, including both MVP and wish list stories.
- **Current/MVP**: Holds user stories that must be completed to meet the minimum project requirements (MVP). Once the MVP has been met, additional user stories may be moved to this list from the *Icebox*.
- **Completed**: Holds completed user stories.
    
    > Important: User stories need to be formed properly using this template:
    As a `<role>`, I want `<feature>` so that `<reason>`.
    The reason is optional if it's patently obvious.
    > 
- **Wireframes**: Sketches of each screens's user interface for the major functionality of the application.
- **Entity-Relationship-Diagram (ERD)**: A diagram of the app's models (one per data entity) and the relationships between them.
    
    > Please reach out to your instructional team if you have questions regarding user stories, the data model, etc.
    > 

### Presentation Requirements - 10 AM EST - May 15th

You will have 10 minutes to present and demonstrate the following:

1. Introduce your project by paraphrasing its README.
2. Click the link in the README to open the deployed app on Heroku.
3. Demonstrate the application's authentication features by signing up a new user, logging out that user, then logging in with your preferred user.
4. Demonstrate your app's main features.
5. Share/discuss the following code:
    - The "main"  model
    - Your "favorite" controller functionality
    - Your "favorite" view / component page
    - Implementation of 3rd Party API / integrations
6. Share the experience by answering the following:
    - What was your biggest challenge?
    - What are your key learnings/takeaways?

Following your presentation, there may be a brief Q & A period and optional instructor feedback.

### Version Control Requirements

- The project's source code must be hosted on a personal **GitHub repository**.
- The repo is to contain **frequent commits** dated from the beginning of the project through its completion. **Do not** "start over" by replacing the repository with a different one.

### README Requirements

Don't underestimate the value of a well crafted `README.md`.

The `README.md` introduces your project to prospective employers and forms their first impression of your work!

> Note: Do not include project planning (user stories, wireframes or ERDs) in the README.md.
> 

Include the following sections within the **`README.md`**:

- **App Title:** Contains a description of what the app does and optional background info.
- **Screenshot(s):** A screenshot of your app's landing page and any other screenshots of interest.
- **Technologies Used**: List of the technologies used.
- **Getting Started**:
    - A link to the **deployed app** (Heroku)
    - A link to the **Trello board** used for the project's planning that includes user stories, wireframes & an ERD.
- **Next Steps**: Planned future enhancements (icebox items).

### Technical Requirements - Option 1

- A **working** (full-stack) single-page application hosted on Netlify (or Vercel)
- **Have a well-styled interactive front-end that utilizes a 3rd party component library**
- Consumes data from 1-2 third-party APIs or from a lightweight data solution like AirTable
- Choose 1 (or more) stretch features:
    - Implementation of a highly dynamic UI (animations) or data visualization
    - Includes a robust 3rd party data-storage solution (firebase, convex, supabase)
    - Implement 3rd party OAuth2 solution

### Technical Requirements - Option 2

- A **working** full-stack, single-page application hosted on Netlify (or Vercel) + Heroku
- Incorporate the technologies of the **MERN-stack**:
    - MongoDB/Mongoose
    - Express
    - React
    - Node
- **Have a well-styled interactive front-end**
- Communicates with the **Express** backend via AJAX
- Consumes data from a third-party API
- Optional:
    - Implementation of a highly dynamic UI or data visualization
    - Implement token-based **authentication**.  Including the ability of a user to sign-up, log in & log out
    - Implement additional functionality if the user is an admin

### Technical Requirements - Option 3

- A **working** full-stack, Django Application deployed to Heroku
- Includes 3+ models with 1:M, M:N associations
- Integrates AJAX calls to 3rd party APIs
- Integrates Django Authentication and Authorization
- Uses a 3rd party css library
- (Optional) Includes custom Django integrations (calendar, messaging widgets, custom admin, custom UI / forms)

### Technical Requirements - Option 4

- A **working** full-stack, single-page application hosted on Netlify (or Vercel) + Heroku
- Explore a React Framework (NextJS, Remix, Gatsby) - [link](https://react.dev/learn/start-a-new-react-project)
- Includes an Express / Mongoose backend
    - and/or
- Consumes data from a third-party API
- **Have a well-styled interactive front-end**
- (Optional) Implement token-based **authentication or OAuth2 provider**

### Technical Requirements - Option 5

- A **working** full-stack, React + Django REST Application deployed to Netlify / Heroku
- Includes 2+ models with  1:M data associations
- Implements a 3rd party React Component library
- (Optional)  Django Authentication and Authorization
- (Optional) Includes custom Django integrations (calendar, messaging widgets, custom admin, custom UI / forms)

## Self-sufficiency / Project Assistance

- At this stage of SEI, being able to (independently) find the the answers to development issues is of paramount importance.
- Use all resources available to solve the issue on your own before seeking assistance.
- If you do seek assistance in Slack, use the support channel and explain the issue as clearly and detailed as you can, include screenshots when possible, and be prepared to explain what you've done to solve the issue on your own.

## Suggestions to Get Started

- Don’t get too caught up in too many awesome features – simple is better. Favor fewer features that look/feel impressive over numerous clunky/sloppy features.
- Because it takes longer to code user interfaces using React than with EJS & DTL, be sure to prioritize user stories to meet the MVP and ice box the others.
- Update the project name in the package.json file and make other name changes, e.g., update the `<title>` in index.html, etc.
- Implement the "As a visitor, when I browse to the app, I want..." user story first.
- Follow the steps we've done in class to implement features, beginning with the user's interaction and code the flow from client -> server -> client.
- Read the docs for whatever technologies / frameworks / API’s you use.

## Best Practices

- Make AJAX calls from "API" modules, not components. Export application/business logic from "service" modules.
- **Be consistent** with your code style.
- **Clearly name variables and functions** - remember, variables are usually named as **nouns** and functions as **verbs**.
- **Write well-formatted JS & CSS.** Properly formatting your code makes it more readable. Improperly formatted code infers sloppiness.
- **Comment your code where it makes sense to do so**. Most code is self-documenting (don't comment the obvious), however, use comments to explain complicated code.

## Project Feedback + Evaluation

- Your instructors will be providing feedback during the project presentations - 1 : 1 code reviews can be requested