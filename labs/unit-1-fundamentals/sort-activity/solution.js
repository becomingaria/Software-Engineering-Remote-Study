// ============================================
// SORT ACTIVITY - Solution
// ============================================

// ---- Part 1: Ascending ----
const numbers = [10, 9, 2, 1, 100, 45, 23, 8]
const sortedAsc = [...numbers].sort((a, b) => a - b)
console.log("Part 1 - Ascending:", sortedAsc)

// ---- Part 2: Descending ----
const sortedDesc = [...numbers].sort((a, b) => b - a)
console.log("Part 2 - Descending:", sortedDesc)

// ---- Part 3: Case-insensitive String Sort ----
const names = ["frank", "Alice", "bob", "Charlie", "eve"]
const sortedNames = [...names].sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
)
console.log("Part 3 - Names:", sortedNames)

// ---- Part 4: Sort Objects by Property ----
const students = [
    { name: "Alice", grade: 88 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 95 },
    { name: "Diana", grade: 60 },
]
const sortedStudents = [...students].sort((a, b) => a.grade - b.grade)
console.log("Part 4 - Students by grade:")
sortedStudents.forEach((s) => console.log(` ${s.name}: ${s.grade}`))
