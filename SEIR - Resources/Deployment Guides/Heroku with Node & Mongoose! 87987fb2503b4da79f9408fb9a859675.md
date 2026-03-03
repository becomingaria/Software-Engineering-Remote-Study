# Heroku with Node & Mongoose!

### What is **Heroku and what does it do?**

We'll be using Heroku to deploy our Express apps because it simplifies and expedites the process for deployment. Heroku automatically does the following...

- Starts up a new server when we run `heroku create`, and installs all the necessary services
- Adds a new remote to our Git repo, so we can just run `git push heroku main` to copy our code over to their servers
- Detects our database
- Detects the language our program is written in and chooses a buildpack
- Automatically installs our app's dependencies, and starts our app
- Easily change configuration information using `heroku config`

### Getting Started

- Stop and commit. Make sure your app is under version control with `git`.
Run `git status` to check if your project directory is a repo and `git init` to make it into one if necessary. **Stop and commit your changes.**
- Sign up for an account with heroku: [https://www.heroku.com/](https://www.heroku.com/)
- Install the heroku CLI

**OSX users:**

```bash
brew tap heroku/brew && brew install heroku
```

**Ubuntu users:** Run this command from your terminal:

```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

Once installed, you can use the `heroku` command from your command shell.

## **Deployment Steps**

Deployment is essentially an exercise in following directions. Follow the step-by-step instructions below to deploy your App. Pay attention to the notes following each prompt! Fully read each prompt (including the notes) before executing each step.

# **Step A. Set up Heroku**

Log in from the Terminal with `heroku login`, using the email address and password you used when creating your Heroku account:

```bash
heroku login
# Enter your Heroku credentials.
# Email: zeke@example.com
# Password:
# ...

```

Authenticating is required to allow both the heroku and git commands to operate.

***(NOTE YOUR PROJECT MUST BE A GIT REPO TO CONTINUE.)**.*

### From your project directory, create an app on Heroku

Add a new remote to your project that points to Heroku's servers:

```bash
heroku create
```

# **Step B. Heroku & Node Setup**

In your `server.js` file, modify `app.listen` to use `process.env.PORT` (this will be set, dynamically, by Heroku):

```jsx
app.listen(process.env.PORT || 4000);
```

When Heroku starts your app it will automatically assign a port to `process.env.PORT` (an environmental variable!) to be used in production.

Next, update your database connection to point to Heroku's database. Open `models/index.js` and add the following to the `mongoose.connect` method:

```jsx
mongoose.connect( process.env.MONGODB_URI );

```

If we had a different database for production vs development, we might share a different environmental variable for DATABASE_URI with our deployment environment.

### MongoDB setup for Heroku

You will need to follow the steps outlined in the Atlas Documentation you can find [HERE](../../guides/atlas-mongodb-setup.md)

### Setup `.gitignore` (Recommended)

From inside your project directroy, run:

```bash
touch .gitignore
```

Next, open `.gitignore` in your text editor, and add the following line:

```bash
node_modules
```

Finally, run the following command to untrack your `node_modules` folder (it's not *your* code, so we don't want to track it!):

```bash
git rm -r --cached node_module
```

Stop and commit.

### Add a start script

Add a `start` script for your application in your `package.json`:

```json
  "scripts": {
    "start": "node index.js"
 
}
```

This is assuming your main application file is called `index.js`. If your main file is called something else, adjust the script to use your file name.

Add and commit those changes.

# **Step C. Heroku & Atlas Configuration**

Set any ENV Variables that you're app is expecting. (Check your `.env`, e.g., MONGODB_URI).

**View current config var values**

```bash
heroku config
#MONGODB_URI: <my_connection_string>
#OTHER_VAR:    production

```

**Set a config var**

```bash
heroku config:set MONGODB_URI="<my_connection_string>"
#CONFIRM

```

**Remove a config var**

```bash
heroku config:unset MONGODB_URI
#Unsetting MONGODB_URI and restarting myapp... done, v13
```

Note: You can also set environmental variables for your Heroku app from within Heroku. Log into your Heroku account, go to your app's dashboard, click on settings, and click "Reveal Config Vars". Use the pencil icon to edit existing ones or add new key-value pairs manually.

# Step D. Deploy

Now we can deploy:

```bash
    git push heroku main
```

If you missed a step just ask for help. Otherwise you should be able to visit your application by saying the following:

```
    heroku open

```

If you have a seed task, you can run it now (assuming everything else is working):

```bash
heroku run node db/seed.js
```

**NOTE:**

- `heroku run` allows you to run js files on the heroku server. We can seed our database on heroku using the same seed file we used locally.

# Congratulations!

You just successfully deployed your app! You should be proud, so pat yourself on the back, give your neighbor a high five, call your parents, and share this milestone with someone you love!

## Debugging Tips

Here are some helpful commands for debugging your application on Heroku:

### `heroku logs`

This command lists your most recent application server logs. Helpful for figuring out why your application may be crashing and burning.

### `heroku run bash`

This command allows you to run terminal *on Heroku's servers*. This is a handy way for us to poke around and run commands on our application (like seeding the database, and checking that everything was installed correctly).

### Heroku CLI Docs

[The Heroku CLI | Heroku Dev Center](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

### Heroku H10 Error

[Causes of Heroku H10-App Crashed Error And How To Solve Them](https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl)