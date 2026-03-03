// ============================================
// SORT ACTIVITY - Starter Code
// ============================================

// ---- Part 1: Fix Number Sort (ascending) ----
const numbers = [10, 9, 2, 1, 100, 45, 23, 8]

// BUG: This sorts as strings, not numbers!
// const sorted = numbers.sort()

// TODO: Fix the sort so numbers sort correctly (ascending)
const sortedAsc = numbers.sort(/* your comparator here */)
console.log("Part 1 - Ascending:", sortedAsc)
// Expected: [1, 2, 8, 9, 10, 23, 45, 100]

// ---- Part 2: Descending Order ----
const numbers2 = [10, 9, 2, 1, 100, 45, 23, 8]

// TODO: Sort descending
const sortedDesc = numbers2.sort(/* your comparator here */)
console.log("Part 2 - Descending:", sortedDesc)
// Expected: [100, 45, 23, 10, 9, 8, 2, 1]

// ---- Part 3: Sort Strings (case-insensitive) ----
const names = ["frank", "Alice", "bob", "Charlie", "eve"]

// TODO: Sort alphabetically, case-insensitive
const sortedNames = names.sort(/* your comparator here */)
console.log("Part 3 - Names:", sortedNames)
// Expected: ['Alice', 'bob', 'Charlie', 'eve', 'frank']

// ---- Part 4: Sort Objects by Property ----
const students = [
    { name: "Alice", grade: 88 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 95 },
    { name: "Diana", grade: 60 },
]

// TODO: Sort students by grade, ascending
const sortedStudents = students.sort(/* your comparator here */)
console.log("Part 4 - Students by grade:", sortedStudents)
// Expected: Diana(60), Bob(72), Alice(88), Charlie(95)
