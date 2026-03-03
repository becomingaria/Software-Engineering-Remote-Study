# Chuck Norris Joke Generator - Solution

A simple Express app that fetches and displays random Chuck Norris jokes using the [chucknorris.io](https://api.chucknorris.io/) API.

## Getting Started

```bash
npm install
npm start
```

Then visit [http://localhost:3000](http://localhost:3000).

## How It Works

- The home page shows a form with a "Get Chuck Norris Joke" button.
- Submitting the form sends a GET request to the Express server.
- The server fetches a random joke from `https://api.chucknorris.io/jokes/random`.
- The server re-renders `index.ejs` with the joke text.

## Bonus (implemented)

Category selection is supported. The server fetches available categories from `https://api.chucknorris.io/jokes/categories` and renders them as radio buttons.
