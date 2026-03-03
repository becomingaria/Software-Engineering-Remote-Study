# Book-e JSON — Deployment Codealong

A simple Express + MongoDB REST API for managing a book collection. Used for the Heroku deployment lesson.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Atlas — see [Atlas Setup Guide](../../guides/atlas-mongodb-setup.md))

### Installation

```bash
npm install
```

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Fill in your `DATABASE_URL` in `.env`.

### Running Locally

```bash
nodemon index.js
# or
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## API Routes

| Method | Route        | Description   |
| ------ | ------------ | ------------- |
| GET    | `/books`     | Get all books |
| GET    | `/books/:id` | Get one book  |
| POST   | `/books`     | Create a book |
| PUT    | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## Deployment

Refer to the [Deployment Guide](../../SEIR%20-%20Resources/Deployment%20Guides/Heroku%20with%20Node%20%26%20Mongoose!%2087987fb2503b4da79f9408fb9a859675.md) in the course notes.
