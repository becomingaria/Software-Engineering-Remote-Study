# Developer Environments & Environment Variables

### **Environments**

Application environments are an important part of the context in which an application runs. Each environment is configured to support a certain usage of the application.

Typical application environments include:

- **Development** - environment where an app or new feature(s) are created and run locally
- **Test** - environment where code and UI is tested for functionality and performance
- **Production** - environment for complete and tested code to be hosted online for clients to use

So far, we've been using the `development` environment by default when working on our backend applications. Today we'll look at deploying to the `production` environment, a.k.a. the public, published version of our site.

Each environment has a different set of configurations -- things that vary depending on how we're running or using our app. We could be developing, testing, or deploying our apps. Configuration settings often include...

- The name of the database
- The username/password to connect to the database
- API authentication keys (e.g. to connect to Twitter API)
- Whether or not to reload code on each request (for debugging vs performance)
- Where to save log information (error logs, etc)

### **Environment Variables**

We do not want to keep configuration in our codebase (e.g. the code we see when we push to Github) for several reasons:

- We do not want to expose private information such as passwords and API Keys.
- When we push the same code to different environments, we need a way to dynamically tell which environment we're in.

Node manages application environments using "environment variables".

Environment variables store data and configuration information that is defined outside of your codebase and pertain to the phase of the application's development.

Storing this information separately protects sensitive information like API keys and passwords because it is not visible from your project directory.

This is accomplished using `process`, a global object that comes with all Node projects. `process` has a property `env` where we store environment variables.

We can view a project's environment variables using the Node REPL in our terminal.

```jsx
$ cd <your-node-project>
$ node
> process.env
```

- *Question:* What are some of the listed variables? Why would they be stored here?

You can create a new environmental variable in the terminal too! (terminal, not node!)

`$ export <YOUR_ENVIRONMENTAL_VARIABLE_NAME>=<variableValue>`

> NOTE:
> 
> - Make sure there are no spaces next to the equals sign!
> - Environment variables tend to be SCREAMING_SNAKE_CASE by convention.

To test, try logging the following code from the node repl.

`> process.env.<YOUR_ENVIRONMENTAL_VARIABLE_NAME> = // whatever`

If you'd like, you can also remove the environmental variable by exiting out of the Node CLI and entering this command in the normal terminal:

`$ unset <YOUR_ENVIRONMENTAL_VARIABLE_NAME>`

### **Essential Questions**

**❓ What are examples of environmental variables we've used?**

**❓ Why do we typically tell Git not to track our environmental variables?**

**❓ When do environmental variables get loaded?**