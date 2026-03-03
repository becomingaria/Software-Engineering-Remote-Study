# Deployment Guides

## What is Deployment?

Deployment is the act of putting an app up on one or more internet-connected
servers that allow users to access and use the app.

### Requirements for Deployment

There are generally a few things we need for an app to be properly deployed:

- **Executable Code** - we must get our code onto the server and be able to run
it
- **Dependencies** - the server(s) where our app will run must have the proper dependencies installed
- **Services** - the server(s) must be running the correct services (web,
database, email, etc.)
- **Configuration** - we must configure our running app with respect to its
deployment environment

### Deployment Approaches

There are lots of ways to do each of these steps. For example, we can get our
code onto a server by...

- Using FTP (File Transfer Protocol) to transfer the files onto the server.
- Adding a git remote and using `git push` to transmit files a hosting platform - ex: GH Pages.
- Linking a GH / Gitlab to a 3rd party storage platform (some popular free / low-cost options include Railway, Fly.io, Netlify, and Heroku).

# 3rd Party Deployment Platforms

### Unit 1

[Deploying Your App to GitHub-Pages](Deployment%20Guides/Deploying%20Your%20App%20to%20GitHub-Pages%20dbd9e3b7e8754e24a14b920c35b7610f.md)

### Unit 2

🥬 [MongoDB Atlas Guide](Unit%202%20-%20Full%20Stack%20Development/Week%204/Mongo%20Account%20Creation%20a0999ae38f2b4192bb6c7097306d8999.md)

[Heroku with Node & Mongoose!](Deployment%20Guides/Heroku%20with%20Node%20&%20Mongoose!%2087987fb2503b4da79f9408fb9a859675.md)

[Developer **Environments & Environment Variables**](Deployment%20Guides/Developer%20Environments%20&%20Environment%20Variables%20dd1ff1893c1e42e6a332c4fdd1b545ab.md)

### Unit 3

[Django Deployment](Deployment%20Guides/Django%20Deployment%2034ca1f30c7474f9380c647ee0f194e9a.md)

### Unit 4

[React Deployment to Netlify](Deployment%20Guides/React%20Deployment%20to%20Netlify%209c7b2d5da79740af9b7a457e61b434f7.md)