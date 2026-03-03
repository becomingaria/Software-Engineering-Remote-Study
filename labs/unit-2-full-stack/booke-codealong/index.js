require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bookRouter = require("./routes/books")

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(morgan("dev"))
app.use(express.json())

// Database connection
mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err))

// Routes
app.use("/books", bookRouter)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Book-e API", routes: "/books" })
})

app.listen(PORT, () => {
    console.log(`Book-e running on http://localhost:${PORT}`)
})
