# Initializing State

[Connect 4 Code Along](../../Connect%204%20Code%20Along%20db367ae9c0224e00a349852469b497db.md)

### Initialize the State Variables

Declare, but don't initialize, the application-wide state variables.

Examples may include `board`, `turn`, and `winner`

Cache the DOM elements for the `markerEls`, `messageEl`, and `playAgainEl` 

The initialization of the variables to their "initial" state should be done within an `initialize()`, or similarly named function, e.g., `init()`.

Write that `init()` function.

The init function should do the following:

- `board` state should store a two-dimensional array, *an array of arrays*, that correspond to the rows/columns in our dom. However, we will be “rotating” our matrix counter - clockwise
    - A 3x3 array example
        
        ```jsx
        const matrix = [ 
        	[0,0,0], // column 0
        	[0,0,0], // column 1
        	[0,0,0]  // column 2
        ]
        ```
        
- initialize the `winner` variable
- initialize `turn` with a numerical value of 1

Invoke `init()` to "kick off" the app.

Now that the `init()` function has initialized the state variables.

The last line in `init()` should call `render();` to render that state to the DOM for the first time. The render declaration can remain empty or log a message for testing purposes.

- 🆘 Click for help if you've tried but unable to get your code to run successfully.
    
    ```jsx
    // script.js
    
    /*----- constants -----*/
    
    /*----- state variables -----*/
    let board;  // array of 7 column arrays
    let turn;  // 1 or -1
    let winner;  // null = no winner; 1 or -1 = winner; 'T' = Tie
    
    /*----- cached elements  -----*/
    
    /*----- event listeners -----*/
    
    /*----- functions -----*/
    init();
    
    // Initialize all state, then call render()
    function init() {
      // To visualize the board's mapping to the DOM,
      // rotate the board array 90 degrees counter-clockwise
      board = [
        [0, 0, 0, 0, 0, 0],  // col 0
        [0, 0, 0, 0, 0, 0],  // col 1
        [0, 0, 0, 0, 0, 0],  // col 2
        [0, 0, 0, 0, 0, 0],  // col 3
        [0, 0, 0, 0, 0, 0],  // col 4
        [0, 0, 0, 0, 0, 0],  // col 5
        [0, 0, 0, 0, 0, 0],  // col 6
      ];
      turn = 1;
      winner = null;
      render();
    }
    
    function render() {
    
    }
    ```
    

> 🚀 Please navigate to the next page linked above where we will code the render() function...
> 

[Rendering Game State](Initializing%20State/Rendering%20Game%20State%20be8886342e9c4c1cb67450dcd178c593.md)