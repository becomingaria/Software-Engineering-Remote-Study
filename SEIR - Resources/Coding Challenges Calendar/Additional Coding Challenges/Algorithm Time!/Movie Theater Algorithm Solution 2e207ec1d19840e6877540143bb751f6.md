# Movie Theater Algorithm Solution

```jsx
function seatIsAvailable(row, column, seats) {
    if(seats[row][column] === 1) return false;
    let twoRight = seats[row][column + 2];
    let oneRight = seats[row][column + 1];
    let twoLeft = seats[row][column - 2];
    let oneLeft = seats[row][column - 1];
    if(column === 0) {
        if(twoRight === 1 && !oneRight) return false;
        return true;
    } else if(column === 1) {
        if(!oneLeft) return false;
        if(twoRight === 1 && !oneRight) return false;
        return true;
    } else if(column === seats[row].length - 2) {
        if(!oneRight) return false;
        if(twoLeft === 1 && !oneLeft) return false;
        return true;
    } else if(column === seats[row].length - 1) {
        if(twoLeft === 1 && !oneLeft) return false;
        return true;
    }
    else {
        if(twoLeft === 1 && !oneLeft) return false;
        if(twoRight === 1 && !oneRight) return false;
        return true;
    }
}
```