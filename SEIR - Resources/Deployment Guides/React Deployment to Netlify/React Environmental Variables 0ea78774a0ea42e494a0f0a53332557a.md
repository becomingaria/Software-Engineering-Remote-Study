# React Environmental Variables

### Environmental Variables

We do not want to keep configuration in our codebase (e.g. the code we see when
we push to Github) for several reasons:

- We do not want to expose private information such as passwords and API keys.
- When we push the same code to different environments, we need a way to
dynamically tell which environment we're in.

**Node,** which runs our React app locally, manages application environments using `environmental variables`.

Environmental variables store data and configuration information that is defined
outside of your codebase and pertain to the phase of the application's
development.

Storing this information separately protects sensitive information like API keys
and passwords because it is not visible from your project directory.

This is accomplished using `process`, a global object that comes with all node
projects. `process` has a property `env` where we store environmental variables.

### Working with Environmental Variables

In our local node / react app, we will store our `environmental variables` in a hidden text file, these variables will be written as key/values pairs. 

```
.env.local
```

When our react app starts, the contents of the `.env.local` file are stored globally by the **node** process. 

### Writing environmental variables in React

```
REACT_APP_YOURKEY=YOURVALUESTRING
```

Your key/variable name can be anything you want, but should begin with a prefix.

```
REACT_APP_*
```

### Using “environmental variables” **in your React app**

```
const yourAPIKey = process.env.REACT_APP_YOURKEY

// no quotes are required for your string values
// this code can go anywhere in your react's js files.
```

**Other considerations:**

- Without the `REACT_APP_ prefix`, react will not load the content correctly; when react loads your App, react will access nodes `process.env` object for a key called `REACT_APP_YOURKEY`. Without the prefix your environmental variables will return `undefined` which can crash your app.
- Typically variable keys are all written `IN_ALL_CAPS` to indicate they are constants, they shouldn't change

### **Environmental files and version control**

*All* of your environmental data / secrets should be kept in a `.env` file. *ALWAYS.* As we’ve learned in this cohort, git can be configured to ignore certain specified files/file types. 

By default our React app will ‘ignore’ the file types listed below. When you are staging and committing changes in git, your `.gitignore` file will not track any changes your in app with the file following names: 

```
 .env.local
 .env.development
 .env.production
```

If you store your app’s environmental files in one of these files you won’t be at risk of pushing your API keys to a public repo. The contents of those files will only be stored on your local machine. Without taking these precautions, one accidental commit can expose your API key or app security credentials. This can be, *at best*, be inconvenient for your team, at worst a very expensive mistake.