# React Reusable Form Components

Practice **Atomic Design** principles by building a library of reusable form components in React.

## Overview

In this lab you will refactor a monolithic form into small, reusable **atomic components** (inputs, labels, buttons) and compose them into larger form molecules.

## Getting Started

```bash
npx create-react-app react-reusable-form-components
cd react-reusable-form-components
npm start
```

## Atomic Design Hierarchy

| Level    | What it is         | Example                                |
| -------- | ------------------ | -------------------------------------- |
| Atom     | Smallest UI unit   | `<Input />`, `<Label />`, `<Button />` |
| Molecule | Group of atoms     | `<FormField />` (label + input)        |
| Organism | Group of molecules | `<LoginForm />`, `<RegisterForm />`    |
| Template | Page layout        | `<AuthPage />`                         |

## Requirements

### Part 1 — Build Atoms

Create the following atomic components in `src/components/atoms/`:

- `Input.jsx` — a labeled text input with `type`, `name`, `value`, `onChange`, and `placeholder` props.
- `Button.jsx` — a styled submit button with `label` and `onClick` props.
- `Label.jsx` — a styled form label with `htmlFor` and `text` props.

### Part 2 — Build a Molecule

Create `src/components/molecules/FormField.jsx` that composes `<Label />` and `<Input />` together.

### Part 3 — Build an Organism

Create `src/components/organisms/LoginForm.jsx` that:

- Uses `<FormField />` for email and password.
- Uses `<Button />` for submit.
- Manages form state with `useState`.
- Logs the form data to the console on submit.

### Part 4 — Hungry for More?

- Build a `RegisterForm` organism (adds a confirm password field).
- Add client-side validation (email format, password length).
- Display inline error messages using atom-level `<ErrorMessage />` components.

## Starter Structure

```
src/
├── App.js
└── components/
    ├── atoms/
    │   ├── Button.jsx
    │   ├── Input.jsx
    │   └── Label.jsx
    ├── molecules/
    │   └── FormField.jsx
    └── organisms/
        └── LoginForm.jsx
```
