# Template Literals

![](https://i.imgur.com/ZVquCx6.png)

# ES2015 Template Literals Walk-Through

## Road Map

1. What are Template Literals?
2. Features of Template Literals

## 1. What are Template Literals?

**Template literals** are a third way to **define** and **use** strings in JavaScript.

Template literals were added to JS with the ES2015 specification.

Of course, you're already familiar with using single-quotes to delimit strings:

```jsx
let myString = 'This is my string';

```

...and double-quotes:

```jsx
let myString = "This is my string";

```

Now we can use the back-tick (below the `[esc]` key) too:

```jsx
let myString = `This is my string`;

```

Why a third option?  Read on...

## 2. Features of Template Literals

Let's look at the features template literals provide...

### String Interpolation

One of the most enjoyable things we do as developers is concatenating string after string after string... Not!

```jsx
const person = {
  firstName: 'Albert',
  lastName: 'Einstein',
  born: 1879,
  note: 'genius'
};

let result = person.firstName + ' ' + person.lastName + ' was born in ' +
	person.born + ' and was a ' + person.note + '.';

// Albert Einstein was born in 1879 and was a genius.
```

Using template literals, we can "embed" JS expressions within a string using interpolation:

```jsx
let result = `${person.firstName} ${person.lastName} was born in ${person.born} and was a ${person.note}.`;

// Albert Einstein was born in 1879 and was a genius.
```

Any JS expression, including function calls, can be inserted between the `${` and `}` characters.

### Multi-Line Strings

In non-template literals, we could create line breaks using the newline character - `\n`:

```jsx
let twoLines = 'This is line one.\nThis is line two.';
```

However, you will get a syntax error if you try this:

```jsx
let twoLines = 'This is line one.
This is line two.';
```

But not with template literals!

```jsx
let twoLines = `This is line one.
This is line two.`;
```

In fact, all white space (spaces, tabs & new lines) is honored within template literals. This can be convenient when the time comes to define HTML within a string:

```jsx
let htmlTemplate =
  `
  <div class="panel">
    <div class="title">${person.firstName} ${person.lastName}</div>
    <div class="content">
      <p>Born: ${person.born}</p>
      <p>Note: ${person.note}</p>
    </div>
  </div>
  `;

```

### Tagged Template Literals

Tagging template literals is an advanced use case of template literals.

A tagged template literal is a template literal prefaced with a function.

The string is "processed" by the function and whatever the function returns will be considered the actual value of the string:

```jsx
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```

This provides lots of flexibility when transforming the string.

## Resources

[MDN's docs for Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)