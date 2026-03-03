# React Skills Lab - Part 1

![](https://i.imgur.com/pg98OTd.png)

## Intro

Now that you've learned a bit about components in React, let's practice defining and rendering a few more.

### This lab, combined with Parts 2, 3 & 4 is a Deliverable

## Exercises

The goal of the lab is to put in a rep doing everything that you did during the *React Intro & Components* lesson.

## Setup

Fork and clone this repo: ([link](https://github.com/SEIR-221-Resources/react-skills-lab))

Install your dependencies - `npm i`

Start your development server - `npm start`

## Build your static HTML/JSX

Code the app so that it renders the following UI:

![](https://i.imgur.com/a1YSt4R.png)

Using the following component hierarchy:

![](https://i.imgur.com/Z7yRF8b.png)

## Hints

- React Elements are outlined in blue.
- The components are as follows:
    
    
    | Component | Renders |
    | --- | --- |
    | `<App>` | `<h1>
    <SkillList>
    <hr>
    <NewSkillForm>` |
    | `<SkillList>` | `<ul>
    <SkillListItem>` x 3
     |
    | `<SkillListItem>` | `<li>` with "SkillListItem" as its content</li></ul> |
    | `<NewSkillForm>` | `<form>` |
    | `<form>` in `<NewSkillForm>` | `<label>` with "Skill" and `<input>` as its content
    `<label>` with "Level" and `<select>` as its content
    `<button>` with "ADD SKILL" as its content |
    | `<select>` in<br>`<form>` above | `<option>` x 5 with content of "1" thru "5"` |

## This lab combined with Parts 2, 3 & 4 is a deliverable