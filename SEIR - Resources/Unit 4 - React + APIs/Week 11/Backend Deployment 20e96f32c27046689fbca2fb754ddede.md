# Backend Deployment

[MERN Infrastructure Setup](MERN%20Infrastructure%20Setup%20128271c309f7443a97f3cc1d274cf358.md)

# Heroku Backend Server Deployment

## **Deploying your backend / API**

### Git Setup

- If you have not already created a local repo, create a git repo in the `backend` folder - `git init`
- Next, a `.gitignore` and add `node_modules` and `.env` to the new file
- Stage all changes to your backend app - `git add .`
- Commit your staged changes `git commit -m "full crud backend api"`
- Create a new repo on [github.com](http://github.com/) (make sure it's empty and public)
- Add the remote to your local repo `git remote add origin URL`replace URL with your repo’s URL
- Push up your code `git push origin branchName`replace `branchName` with your active branch, find that with `git branch` . This will use your systems default branch (either `main` or `master`)

### Heroku Configuration + Deployment (CLI)

- From your command line - make sure you are in your backend repo - run these heroku commands:
    - Login - `heroku login`
    - create a new project - `heroku create your_app_name`
    - deploy your app from the CLI: `git push heroku main`
    - Note: An alternative approach involves created a new application from the heroku dashboard:
        - Configure the application in the `deploy` tab to connect your repo
        - Enable auto deploys and trigger a manual deploy to initialize your project.
- After the build is successful, configure your heroku app under `settings` tab: set your `MONGODB_URI` config var to store your MongoAtlas connection string
- Use Postman test all your API endpoints

### Heroku Configuration + Deployment (GUI)

- An alternative approach involves created a new application from the heroku dashboard:
    - From the Heroku dashboard click the `new` button to create a new app
    - Configure the application in the `deploy` tab to connect your repo to your newly created GH repo
    - Enable auto deploys and trigger a manual deploy to initialize your project

## Configuring & testing your new `People`API deployment

- As an alternative to using the GUI - After the build is successful, you can configure your heroku app’s environmental variables using this command

```
heroku config:set MONGODB_URI='your MongoAtlas connection string here'

```

- Use Postman or CURL to test all your *Heroku’s A*PI endpoints.

### 🚀 Monorepo Heroku Deployment (CLI)

If you have created a “monorepo” at the root of your project by mistake, or you are curious about the pattern of tracking changes across your whole application, you can still deploy to Heroku.

After you have updated your project and staged your changes you can run the following command to deploy/update your deployed heroku application:

`git subtree push --prefix backend/ heroku main`

Learn more about `git subtree` command [here](https://gist.github.com/SKempin/b7857a6ff6bddb05717cc17a44091202).

## Next Step - [Setup the React FE](MERN%20-%20React%20Setup%20+%20Index%208e3e0f46c17548eca2bedc1c742618a4.md)