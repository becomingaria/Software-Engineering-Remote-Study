const express = require("express")
const router = express.Router()
const Book = require("../models/Book")

// GET /books - index
router.get("/", async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// GET /books/:id - show
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({ error: "Book not found" })
        res.json(book)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// POST /books - create
router.post("/", async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(201).json(book)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

// PUT /books/:id - update
router.put("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        if (!book) return res.status(404).json({ error: "Book not found" })
        res.json(book)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// DELETE /books/:id - destroy
router.delete("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book) return res.status(404).json({ error: "Book not found" })
        res.json({ message: "Book deleted successfully" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router
