# Building Game Logic

[Adding Event Listeners](../Adding%20Event%20Listeners%2057c748a4d63647b19a2f90b6e194d6e4.md)

### Code the `getWinner()` function

We will need to code the win logic to check for a win in the following four directions:

Each function will use a conditional to return the either the player at the last played position or null, depending on the provided inputs

- Vertically - `checkVerticalWin`
    - Checks a complete row; provided an offset for column by 0 and row by -1
- Horizontally - `checkHorizontalWin`
    - checks in two directions; a left offset (row: -1) and right offset (row: +1) and checks if their combined counts is greater than 3
- Diagonally (NE-SW) - `checkDiagNESWWin`
    - checks in two directions; a NE offset (row: 1, col:1) and SW offset (row: 1, col: 1) and checks if their combined counts is greater than 3
- Diagonally (NW-SE) - `checkDiagNWSEWin`
    - checks in two directions; a NW offset (row: 1, col: -1) and SW offset (row: -1, col: 1) and checks if their combined counts is greater than 3

To stay DRY, each of the above functions will call the `countAdjacent()` function.

- `coundAdjascent` should do the following:
    - Given a column position and row position and an offset for column and row movements
    - Store the piece stored at the current position (`colIdx`, `rowIdx`) as a variable `player`
    - Initialize a local variable `count` with a value of 0
    - Increment the offset by the provided values; Increment the `colIdx` by the `colOffset` value; do the same for `rowIdx`
    - create a `while` loop that checks the current row AND column position position is not undefined AND holds the value of the current player `-1` or `1`. This will check that the new offset position matches the current player and the checks can continue
    - if a match is found (in the while loop code block):
        - increment `count`
        - modify `codIdx` and `rowIdx` by their associated offsets
    - return `count`

### Congrats on coding a cool game of Connect-Four!

Hopefully, you're inspired to apply the process we followed today to code another game!

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
    playAgainBtn.addEventListener('click', init);
    
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
      // Find the index of the first 0 in colArr
      const rowIdx = colArr.indexOf(0);
      // Update the board state with the cur player value (turn)
      colArr[rowIdx] = turn;
      // Switch player turn
      turn *= -1;
      // Check for winner
      winner = getWinner(colIdx, rowIdx);
      render();
    }
    
    // Check for winner in board state and
    // return null if no winner, 1/-1 if a player has won, 'T' if tie
    function getWinner(colIdx, rowIdx) {
      return checkVerticalWin(colIdx, rowIdx) ||
        checkHorizontalWin(colIdx, rowIdx) ||
        checkDiagonalWinNESW(colIdx, rowIdx) ||
        checkDiagonalWinNWSE(colIdx, rowIdx);
    }
    
    function checkDiagonalWinNWSE(colIdx, rowIdx) {
      const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1);
      const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1);
      return (adjCountNW + adjCountSE) >= 3 ? board[colIdx][rowIdx] : null;
    }
    
    function checkDiagonalWinNESW(colIdx, rowIdx) {
      const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1);
      const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1);
      return (adjCountNE + adjCountSW) >= 3 ? board[colIdx][rowIdx] : null;
    }
    
    function checkHorizontalWin(colIdx, rowIdx) {
      const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0);
      const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0);
      return (adjCountLeft + adjCountRight) >= 3 ? board[colIdx][rowIdx] : null;
    }
    
    function checkVerticalWin(colIdx, rowIdx) {
      return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null;
    }
    
    function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
      // Shortcut variable to the player value
      const player = board[colIdx][rowIdx];
      // Track count of adjancent cells with the same player value
      let count = 0;
      // Initialize new coordinates
      colIdx += colOffset;
      rowIdx += rowOffset;
      while (
        // Ensure colIdx is within bounds of the board array
        board[colIdx] !== undefined &&
        board[colIdx][rowIdx] !== undefined &&
        board[colIdx][rowIdx] === player
      ) {
        count++;
        colIdx += colOffset;
        rowIdx += rowOffset;
      }
      return count;
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
    

### Back to the start

[Connect 4 Code Along](../../../../../Connect%204%20Code%20Along%20db367ae9c0224e00a349852469b497db.md)