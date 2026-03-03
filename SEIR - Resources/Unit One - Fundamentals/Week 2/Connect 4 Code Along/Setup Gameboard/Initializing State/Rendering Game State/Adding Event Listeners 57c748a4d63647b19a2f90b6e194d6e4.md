# Adding Event Listeners

[Rendering Game State](../Rendering%20Game%20State%20be8886342e9c4c1cb67450dcd178c593.md)

### Code the `handleDrop()` event listener function

> "In response to user interaction, update all impacted state, then call render()"
> 

Time to handle when the user clicks a column marker!

We'll be sure to use event delegation. Add a clickHandler to the `markers` parent container. The event should handle when a player ‘drop’s a disc by clicking on a marker. 

The `handleDrop` callback should have the following functionality:

- Steps
    - Find the `indexOf` the column marker clicked in the `markerEls` array; If the element is not found, immediately `return` breaking the function call.
    - Store the found `board`column array’s position in a variable
    - Store the position of the first `0` (an unplayed position) in a variable
    - Assign the column array at the `row` position with the current `turn`
    - Modify player turn by multiplying `turn` by `-1`
    - Define a function stub `getWinner()` in the functions section that returns `null`
    - Assign `winner` to the output of a function call - `getWinner()`
    - Call `render()`

Let's add an event listener for when the `[PLAY AGAIN]` button is clicked - this is a one-liner because all we have to do is call the `init()` function.

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
    const markerEls = [...document.querySelectorAll('#markers > div')];
    
    /*----- event listeners -----*/
    document.getElementById('markers').addEventListener('click', handleDrop);
    
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
    
    // In response to use interaction, update all impacted
    // state, then call render();
    function handleDrop(evt) {
      const colIdx = markerEls.indexOf(evt.target);
      // Guards...
      if (colIdx === -1) return;
      // Shortcut to the column array
      const colArr = board[colIdx];
      // Find the index of the first 0 in colArr (the first unoccupied space)
      const rowIdx = colArr.indexOf(0);
      // Update the board state with the cur player value (turn)
      colArr[rowIdx] = turn;
      // Switch player turn
      turn *= -1;
      // Check for winner
      winner = getWinner();
      render();
    }
    
    function getWinner() {
    
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
    

> 🚀 Please navigate to the next page where we will code the win logic...
> 

[Building Game Logic ](Adding%20Event%20Listeners/Building%20Game%20Logic%200f9c854ea28c4bf29923cc3d9c8a6cff.md)