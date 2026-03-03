# Build another game

# Tamagotchi Game

### Overview

Let's start out with something fun—**a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges**.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!

---

### Technical Requirements

Your app must:

- Create a new GH repo with your application starter files (`index.html`, `main.js`, and `style.css`)
- **Git 20+ commits** Commit early, commit often. Tell a story with your commits. Each message should give a clear idea what you changed.
- **Render a game in the browser**
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **JavaScript** for **DOM manipulation** (no Canvas)
- Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables

- A working MVP (minimum viable product) what is the absolute bare minimum functionality for you game, do not make it more complex until you've completed your MVP.
- A **working game, *built by you…***

---

### 🥉MVP Specifications

- Create a repo for your tamagotchi pet
- Instantiate your Tamagotchi (tamagotchi object)
- Display a character of your choice on the screen to represent your pet
- Display the following metrics for your pet:
    - Hunger (1-10 scale)
    - Sleepiness (1-10 scale)
    - Boredom (1-10 scale)
    - Age
- You pet should die if Hunger, Boredom, or Sleepiness hits 10.
- Increase your pet's Age every x minutes
- Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
- Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
- Add the ability to name your pet.
- Provide **basic** style for the page.

## 🚀 Stretch Goals

- Animate your pet across the screen while it's alive. Check out using [jQuery](https://jquery.com/) to animate your pet with jQuery's [animate method](https://api.jquery.com/animate/).
- Morph your pet at certain ages.
- Have your tamagotchi give birth to baby tamagotchi...
- ...with special powers (extend the class)!
- Add an `exercise()` method to your tamagotchi, that affects certain properties
- Add anything you can think of... use your imagination!

---

### Documentation Stretch Goals

- **A `README.md` file** with an explanation of what the project is, your user stories, explanations of the technologies used, the approach taken, installation instructions, unsolved problems, the other components previously indicated (if applicable). In this project, also include your wireframes in the readme.
    - App functionality
    - Triumphs
    - Challenges
    - Words of Wisdom
    - Code snippets
- Definitions:
- **Wireframe** (Optional) **:** - Basically draw out what your game will look like. You can use paper or any wireframe tool you find online.
- **User Stories** - Wording should center around how a user interacts with your game, for example:
    1. The user click starts and the level starts
    2. When the user hits the `f key` a fire ball is catuplulated at a target.

## Suggested Ways to Get Started

- **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
- **Use your Development Tools** (console.log, element inspector, alert statements, etc) to debug and solve problems
- During the day, work through problems in class & **ask questions when you need to!** We're here to help prevent you from burning through your time with wild goose chases.
- **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version. There should be *at least* a couple dozen commits.
- **Consult documentation resources** (MDN, etc.) at home to better understand what you’ll be getting into.
- **Plan to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

---

## Useful Resources

- [**MDN Javascript Docs**](https://developer.mozilla.org/en-US/docs/Web/JavaScript) *(a great reference for all things Javascript)*
- [**Github Pages**](https://pages.github.com/) *(for hosting your game)*
- [**Example Readme Files**](https://github.com/SEIR-7-06/example-readmes) *(a great reference for planning materials)*

## MVP

MVP stands for *Minimum Viable Product*, or in other words, the smallest, most stripped-down version of the thing you're trying to build that you could possibly make. We want to look at the game we're mimicing, and define an MVP game we can build.

## Core vs Stretch goals

Put all the goals into a list, and order them by essential-ness to this project. We want to draw a line between two goals in the list, separating the must-haves from the nice-to-haves. We call the must-haves the core goals, and the nice-to-haves stretch goals. You should choose the position of your core-stretch separator such that if all the core goals get done, you've got an MVP.

## User Stories

Goals are an essential stepping stone, but they can be improved into *user stories*. A user story is a very cut-and-dry, atomic part of the experience of using our product (ie playing our game). User stories are written in a cause-and-effect format like so: "When I load the page, I will see _____, and they will be in _______ state".

One key difference between goals and user stories is that user stories are written from the perspective of a user who knows nothing about programming, and is just playing our game without knowing anything that's going on under the hood. So for example, this user story is too technical: When I click on a button, we querySelector for it and set its innerText.

## Game state

Game state is the collection of all your variables that the game needs to run. State variables change over time as the user plays the game. It's a convenient practice to `let` all your game state variables at the beginning of your js file in the global scope. You can initialize them as any starting values you need, or as `null` if appropriate. Then all your game functions will be able to modify them.

It's important to remember that our game state is just js variables, and it's up to us to represent them in the DOM as needed! Always strive to keep your DOM in sync with your javascript state variables. One good tip for this is to change the DOM accordingly whenever you change a js variable.