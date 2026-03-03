# Rendering Game State

[Initializing State](../Initializing%20State%2056ab3a9c685440949b4de7113c92fdcb.md)

### Coding the `render()` function

Stub up the main `render()` function. Render should call `renderBoard()`, `renderMessage()`, and `renderControls()`.

Call and code a `renderBoard()` function.

- Steps
    - renderBoard should include a nested for loop or `forEach` that will iterate over the board matrix.
    - The outer iterator will provide a `colArr` and `idx` parameters for the callback function
    - The inner Iterator will provide a `cellValue` and `idx` parameters for the callback
    - The inner iterators callback should create a new string to match the ids of each `cellId`.
    - Store the found div using a DOM selector and store the captured div in a variable `cellEl`.
    - Create a global `COLORS` constant, the object should have a property for the default `0` turn `1` or turn `-1` , storing a color for each player or the default color.
    - Use the style object on the element to update the `backgroundColor` with a color stored in a `COLORS` object

Call and code a `renderMessage()` function.

- Steps
    
    Create an `if / else if / else` statement block that will evaluate `winner`
    
    - “T” should set the `messageEl` content to a Tie message
    - Winner does not equal `T` or `null` → set the `messageEl` content to a Winner message
    - Hint: you can use the COLORS context to use the winner value (-1, 1) to conditionally identify the winner.
    - Otherwise → set the `messageEl` content to display the current color’s turn

Call and code a `renderControls()` function used to show/hide the column markers & [PLAY AGAIN] button.

- Steps
    
    Check if the `winner` is defined (not `null`) and set the visibility property of the `playAgainEl` button to be `visible` or `hidden` if `winner` is `null`.
    
    Iterate over the divs contained in the `markerEls`; if the corresponding column does not contain a `0` set the visibility of that element to `hidden` otherwise set it to `visible`.
    

- 🆘 Click for help if you've tried but unable to get your code to run successfully.
    
    ```jsx
    // script.js
    
    /*----- constants -----*/
    const COLORS = {
      '0': 'white',
      '1': 'purple',
      '-1': 'orange',
    };
    
    /*----- state variables -----*/
    let board;  // array of 7 column arrays
    let turn;  // 1 or -1
    let winner;  // null = no winner; 1 or -1 = winner; 'T' = Tie
    
    /*----- cached elements  -----*/
    const messageEl = document.querySelector('h1');
    const playAgainBtn = document.querySelector('button');
    const markerEls = document.querySelectorAll('#markers > div');
    
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
    
    // Visualize all state in the DOM
    function render() {
      renderBoard();
      renderMessage();
      // Hide/show UI elements (controls)
      renderControls();
    }
    
    function renderBoard() {
      board.forEach(function(colArr, colIdx) {
        // Iterate over the cells in the cur column (colArr)
        colArr.forEach(function(cellVal, rowIdx) {
          const cellId = `c${colIdx}r${rowIdx}`;
          const cellEl = document.getElementById(cellId);
          cellEl.style.backgroundColor = COLORS[cellVal];
        });
      });
    }
    
    function renderMessage() {
      if (winner === 'T') {
        messageEl.innerText = "It's a Tie!!!";
      } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
      } else {
        // Game is in play
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
      }
    }
    
    function renderControls() {
      // Ternary expression is the go to when you want 1 of 2 values returned
      // <conditional exp> ? <truthy exp> : <falsy exp>
      playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
      // Iterate over the marker elements to hide/show
      // according to the column being full (no 0's) or not
      markerEls.forEach(function(markerEl, colIdx) {
        const hideMarker = !board[colIdx].includes(0) || winner;
        markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
      });
    }
    
    ```
    

[Adding Event Listeners](Rendering%20Game%20State/Adding%20Event%20Listeners%2057c748a4d63647b19a2f90b6e194d6e4.md)

> 🚀 Please navigate to the next page where we will code the event listeners...
>