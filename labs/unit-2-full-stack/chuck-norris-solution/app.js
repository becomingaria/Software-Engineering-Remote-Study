const express = require("express")
const fetch = require("node-fetch")
const app = express()
const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

// Home page - show joke form and optionally a joke
app.get("/", async (req, res) => {
    try {
        // Fetch available categories for the bonus feature
        const catResponse = await fetch(
            "https://api.chucknorris.io/jokes/categories",
        )
        const categories = await catResponse.json()

        let joke = null

        // If a category was submitted as a query param, fetch a joke for that category
        if (req.query.category) {
            const jokeResponse = await fetch(
                `https://api.chucknorris.io/jokes/random?category=${req.query.category}`,
            )
            const jokeData = await jokeResponse.json()
            joke = jokeData.value
        }

        res.render("index", { joke, categories })
    } catch (err) {
        console.error(err)
        res.status(500).send(
            "Something went wrong — Chuck Norris is debugging it.",
        )
    }
})

// Handle the form submission (GET with query string)
app.get("/joke", async (req, res) => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await response.json()
        res.render("index", { joke: data.value, categories: [] })
    } catch (err) {
        console.error(err)
        res.status(500).send("Error fetching joke.")
    }
})

app.listen(PORT, () => {
    console.log(`Chuck Norris app running on http://localhost:${PORT}`)
})
