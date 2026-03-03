# React Quadrants

Practice with React components, state, and API calls by building a four-quadrant dashboard.

## Overview

Build a React app with **four quadrants** on screen:

1. **Quadrant 1** — Fetches data from a public API and displays it.
2. **Quadrant 2** — Fetches data from a _different_ public API and displays it.
3. **Quadrant 3** — Contains a [Kawaii component](https://react-kawaii.vercel.app/) that is **sad** until both API calls succeed, then becomes **happy**.
4. **Quadrant 4** — Contains a button that **re-fetches** data for both API quadrants.

## Getting Started

```bash
npx create-react-app react-quadrants
cd react-quadrants
npm install react-kawaii
npm start
```

## Requirements

- Two quadrants must pull from **two different public APIs** and display the data.
    - [Browse public APIs here](https://github.com/public-apis/public-apis)
- One quadrant must contain a Kawaii component that reacts to both API calls completing.
- One quadrant must have a button to re-fetch both APIs.

## Example Public APIs

| API            | Endpoint                                    | Notes   |
| -------------- | ------------------------------------------- | ------- |
| Chuck Norris   | `https://api.chucknorris.io/jokes/random`   | No auth |
| Dog CEO        | `https://dog.ceo/api/breeds/image/random`   | No auth |
| PokeAPI        | `https://pokeapi.co/api/v2/pokemon/pikachu` | No auth |
| Open Trivia DB | `https://opentdb.com/api.php?amount=1`      | No auth |
| Advice Slip    | `https://api.adviceslip.com/advice`         | No auth |

## Kawaii Usage

```jsx
import { Planet } from "react-kawaii"

;<Planet size={100} mood='sad' color='#FDA7DC' />
// mood can be: "sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"
```

## Hints

- Use `useState` to track whether each API has loaded.
- Once both are loaded, change the Kawaii mood to `"happy"`.
- The re-fetch button should reset state and trigger the `useEffect` again — consider using a counter in the dependency array.
