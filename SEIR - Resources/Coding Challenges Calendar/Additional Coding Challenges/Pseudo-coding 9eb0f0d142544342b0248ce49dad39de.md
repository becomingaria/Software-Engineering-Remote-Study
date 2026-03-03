# Pseudo-coding

### Prerequisites

- Critical thinking
- Exposure to Javascript

## Overview

Pseudocoding is a helpful process to begin with before you start writing actual code. It makes it easier for you to conceptualize and understand what you're actually aiming to do. 

The goal of pseudocoding is: 

- to break down a complex process
- examine assumptions about your approach
- organize one’s thoughts before writing any code

Pseudocoding uses ‘natural’ language to describe something that will eventually be created in a language your computer can understand (in our case, Javascript, but can be applied with any language). 

---

## Making Waffles - Pseudocode Activity

### Goal / Steps

1. Pseudo code the process for making waffles (the frozen kind) with syrup.
2. Start simply with broad instructions (ex: “put syrup on the waffles”)
3. As time permits, make each broad command more specific (pull syrup from refrigerator, warm the syrup before you use it, open the lid on the syrup, pour the syrup on top of waffle).
4. Our goal is to better understand the process of the waffle preparation, working from beginning to end. 

## Phase 1 - Big Picture

1. Remove waffles from freezer
2. Remove individual waffles from packaging
3. Insert waffles into toaster
4. Wait until toaster has finished warming waffles
5. Place heated waffles on plate and apply butter / syrup
6. Consume

## Phase 2 - Refinement

1. Check if waffles are in freezer
    1. If so remove waffles from freezer
    2. place on counter near toaster
    3. check and retrieve: dish-ware from cabinets, butter from fridge, and silverware from drawers
2. Prepare waffles
    1. Remove from packaging
    2. Rest cold waffles on dish-ware
3. Heat Waffles
    1. Verify toaster is plugged in
    2. Adjust timer dial of toaster
    3. Remove cold waffles from plate and insert into toaster
4. Wait for cooktime
    1. Observe heating waffles in toaster
    2. Monitor for evidence of burning - if smoke detected cancel heating
    3. If waffles are undercooked - repeat step 4
    4. If waffles adequately browned, remove waffles from toaster
5. Prepare heated waffles
    1. With tongs, or bare hands remove waffles from toaster
    2. Place cooked waffles onto dishware
    3. Apply condiments:
        1. Spread butter with knife
        2. Pour syrup over optimal surface
        3. Wait 1 minute for waffle to finish cooling and syrup to saturate waffle
6. Consume

## Phase 3 - Making Waffles - JS Refactor of Phase Two

1. Once you've elaborated a basic plan into a more detailed plan take the time to think this over as if you were writing it as an application. Comment each step and determine what it would be in your code from the following:
    - Assertions
        - This is a statement that is expected to be true (Boolean-valued function, i.e. a true–false expression), or in this instance, what we want to get to a true point ("Take the waffles from the freezer" would be an assertion after we confirmed that we had waffles in the freezer that we could remove).
    - Conditionals
        - A question is asked. This tells us a conditional is coming
        - Looks for words like "if, unless, otherwise"
        - Think of all the possible outcomes of the situation
            - Each outcome represents an `if`, `else if`, or `else` statement
    - Loops
        - Something is done multiple times
        - Look for words like "while, as long as, until"
    - Functions
        - We've oversimplified a step which could be broken out into multiple steps.
2. **Identify data types**
    - whenever you have a conditional, loop, or something you're keeping track of, identify its type
        - text (strings)
        - numbers (ints/floats)
        - true/false values (booleans)
        - collections of stuff (arrays)
3. (Optional) Try to convert each line into something that resembles code

## Hungry for More?

## Making Waffles - Actual Code

1. In an `index.html`, connect a `pseudocode.js` file and test to make sure it's connected with a console log
2. Now, in your `pseudocode.js`, try and write a program that implements your pseudocoded waffles with syrup process.
3. Write another interactive application in your browser for making coffee or running a lemonade stand.

---