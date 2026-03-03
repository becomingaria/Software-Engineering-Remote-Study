# OOP Donut Adventure

# **Classes and Donut Adventure**

### **Learning Objectives**

- Practice creating objects
- Object methods, classes
- Inheriting from a parent class

### **Prerequisites**

- JavaScript (objects and classes)

---

## **Warm Up - Review Creating Classes**

1. Create a file called `objects.js` and do the first few sections up until the Daring Adventure in this file.

## **Creating Classes**

### **Hamster**

- attributes:
    - owner: string, initially set as an empty string
    - name: string, set the name from parameter in `constructor` method
    - price: integer, set as 15
- methods:
    - wheelRun(): log "squeak squeak"
    - eatFood(): log "nibble nibble"
    - getPrice(): return the price

🔴 **Commit your work!**Your commit message should read something like:"created hamster class"

### **Person**

- attributes:
    - name: set name from parameter in `constructor` method
    - age: initially 0
    - height: initially 0
    - weight: initially 0
    - mood: integer starting at 0 initially
    - hamsters: empty array initially
    - bankAccount: initially set to 0
- methods:
    - getName(): returns name
    - getAge(): returns age
    - getWeight(): returns weight
    - greet(): logs a message with person's name
    - eat(): increment weight, increment mood
    - exercise(): decrement weight
    - ageUp(): increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
    - buyHamster(hamster): push the hamster object onto the hamsters array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

🔴 **Commit your work!**Your commit message should read something like:"created person class"

### **Create a Story with your Person class**

Feel free to update or add methods to automate some of these tasks.

1. Instantiate a new `Person` named timmy.
2. Age `timmy` five years.
3. At this point `timmy`'s a little bummed. As a precocious child, he feels he's seen it all already. Have him eat five times.
4. Now `timmy`'s feeling slower than he'd like to be. Kindergarten's coming up and he wants to feel good. Have him exercise five times.
5. Age `timmy` 9 years.
6. Create a `Hamster` named `gus`.
7. Set `gus`'s owner to the string "Timmy".
8. Have `timmy` buy `gus`.
9. Age `timmy` 15 years.
10. Have `timmy` eat twice.
11. Have `timmy` exercise twice.

🔴 **Commit your work!**Your commit message should read something like:"created timmys story"

## **Create a Daring Adventure!**

1. Create a folder called `donut_adventure` inside lab directory
2. Navigate inside the `donut_adventure` folder and create an `index.html` and `adventure.js` file.
3. Connect the files and, for the rest of this homework, work in the `adventure.js` file. Confirm that you've successfully connected your files by console logging something and checking your browser developer tools console!

## **Daring Adventure! Let's Go!**

![](https://media.giphy.com/media/ToMjGpPgn8mV9iUOOw8/giphy.gif)

> The Adventure of Dougie the Donut on the Streets of NYC.
> 

> Dougie is a funky fresh donut who has decided to walk his way from the Flat Iron District to Times Square where he wants to show off his sweet moves. Along the way, Dougie is approached by his arch nemesis Pizza Rat. Sometimes they fight, sometimes they just talk smack at each other. No matter what happens, let's try to get Dougie safely to Times Square!
> 

For this section of the homework, you'll be making two objects that will interact. First we will create a `Hero` class, then an `Enemy` class, and instantiate our two objects from those classes.

### **Our Hero**

Let's create our `Hero` class!

### **Attributes:**

- name: set name from parameter in `constructor` method
- health: initially 100
- weapons: use the following object
    
    ```
    {
        sprinkleSpray: 5,
        sugarShock: 10
    }
    
    ```
    
- catchPhrases: use the following array
    
    ```
    ['I\\'m fresher than day old pizza',
     'You can\\'t count my calories']
    
    ```
    

### **Methods:**

- talkSass: logs one of his catchphrases randomly
- announceHealth: logs his current health
- fight: for now, this method logs `'I\\'m ready to rumble'`

Now, using this `Hero` class, create an instance of our hero Dougie the Donut.

🔴 **Commit your work!**Your commit message should read something like:"created our hero dougie"

### **Our Enemy**

Now let's create our `Enemy` class!

### **Attributes:**

- name: set name from parameter in `constructor` method
- health: initially 100
- weapons: use the following object
    
    ```
    {
        pepperoniStars: 5,
        cheeseGrease: 10
    }
    
    ```
    
- catchPhrases:
    
    ```
    ['I\\'m youtube famous',
    'I\\'m more dangerous than an uncovered sewer']
    
    ```
    

### **Methods:**

- talkSmack: logs one of his catchphrases randomly
- announceHealth: logs his current health
- fight: for now, logs `I\\'m gonna flatten you like a slice of pepperoni!`

Now, using this `Enemy` class, create an instance of the enemy Pizza Rat.

![](https://i.imgur.com/PCI8ZWP.png)

🔴 **Commit your work!**Your commit message should read something like:"created our enemy pizza rat"

### **Walking Down the Street**

Now, let's write their story! Dougie is walking down Flat Iron, but oh no, he runs into Pizza Rat!

1. Have Dougie `talkSass`
2. Have Pizza Rat `talkSmack`
3. Have Dougie `announceHealth`
4. Have Pizza Rat `announceHealth`

### **Fight!**

Things have escalated between Dougie and Pizza Rat!

1. Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
2. Keep upgrading this fight method to accept an argument called `enemy` so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter (i.e., `dougie.fight(pizzaRat)`).
3. Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health.
    - Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health. For example, if Dougie fights Pizza Rat using `sprinkleSpray`, subtract `sprinkleSpray`'s hitpoint value (5) from Pizza Rat's `health`.
    - Console log the enemy `name` and their new `health` value. For example, 'Dougie got hit by pepperoniStars! His health is now at 95!'

Now, they can fight!

1. Have Pizza Rat `fight` Dougie.
2. Have Dougie `fight` Pizza Rat.
3. Have Pizza Rat and Dougie both `announceHealth` to make sure their `health` has decreased!

🔴 **Commit your work!**Your commit message should read something like:"dougie and pizza rat have fought"

---

## **Hungry for More?**

1. Make it into a game with an ending, until someone has 0 health left.
2. Randomize the weapon choice in the fight method.
3. Change to alert and prompts instead of using the console.
4. Expand this to your heart's content! The sky is the limit!

---