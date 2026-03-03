# React Deployment to Netlify

## Environments and Environmental Variables

Before we take steps to preparing our app for deployment, we will discuss the different contexts that make up the development lifecycle.

### Environments

Application environments are an important part of the context in which an
application runs. Each environment is configured to support a certain usage of
the application.

Typical application environments include:

- **Development** - environment where an app or new feature(s) are created and
run locally.
- **Test** - environment where code and UI is tested for functionality and
performance
- **Production** - environment for complete and tested code to be hosted online
for clients to use

So far, we've been using the `development` environment by default. Today we'll
look at deploying to the `production` environment, a.k.a. the public, published
version of our application.

Each environment has a different set of configurations, things that vary
depending on how we're running or using our app. We could be developing,
testing, or deploying our apps. 

**Configuration settings often include...**

- API keys
- Authentication credentials
- Server & Database configurations
- Application Build & deployment instructions

To review working with environmental variables [checkout this notion page](React%20Deployment%20to%20Netlify/React%20Environmental%20Variables%200ea78774a0ea42e494a0f0a53332557a.md). 

## We Do: Create and deploy a React application

Today, we will be deploying your a react application to a service called [Netlify](https://www.netlify.com/).

### Netlify Overview 🌐

There are many ways to deploy a React application. [Surge](https://daveceddia.com/deploy-create-react-app-surge/), [Heroku](https://github.com/Rancor38/project-2/project-setup-and-deployment-guide.md), and even [GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) can host our React apps in production. 

In this class and for project 4 in particular, we recommend using Netlify, a super fast and free cloud platform for hosting web applications. Netlify is powerful, developer-friendly, and used by organizations such as Nike, MailChimp, and Verizon. 

Netlify handles all the steps for deploying our React, simplifying and expediting the development and deployment processes. 

- Links to our code base (Github)
- Provisions storage space to host copies of our app code
- Handles the production “build” process
- Runs automated tests to check for runtime errors / warnings before & during deployment
- Provides a dashboard for managing and configuring our deployed project site

## Short break 🕒

Deploying to Netlify

Deployment is essentially an exercise in following directions. Follow the
step-by-step instructions below to deploy the sample starter app, or your own react code. Pay attention to the notes following each prompt! 

Fully read each prompt (including the notes) before executing each step.

## Preparation Steps

### Part 1: Creating a React app on GitHub ⚛️

For this demo you can 

1. Create a GitHub repo at [github.com](https://www.github.com/) called `netlify-react-test` 
2. Clone it down to your sandbox folder and `cd` into it.
3. **Create a React app in the repo** running `npx create-react-app .`
*Note the period at the end!!*
4. Replace the App.js startercode with this basic React App starter code:
    - Starter code
        
        ```jsx
        import { useState, useEffect } from 'react';
        import logo from './logo.svg';
        import './App.css';
        
        function App() {
        	const [gifs, setGifs] = useState([]);
        	function getGifData() {
        			const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=minions&limit=10&rating=G&lang=en`;
        			fetch(url)
        				.then((res) => res.json())
        				.then((res) => {
        					console.log('We have data!', res.data);
        					setGifs(res.data);
        				})
        				.catch(console.error);
        		}
        		
        	useEffect(() => {
        		getGifData();
        	}, []);
        
        const loaded = () => {
            return gifs.map((gif) => (
              <div>
                <h1>{gif.title}</h1>
                <img src={gif.images["original"]["url"]} alt={gif.embed_url} />
              </div>
            ));
          };
        
          return gifs ? loaded() : <h1>Loading...</h1>;
        }
        
        export default App;
        ```
        

### Part 2: Prepare your environment for deployment

1. Create a file called **_redirects** in your **public** folder.
2. Add `/* /index.html 200` to the **_redirects**. 
3. **Stage, commit, and push your code to GitHub.** Note: the _redirects file does not have an extension. *This file prevents your routes from breaking on refreshes in deployment.*
4. **Create a `.env.local` file in the root of your repo** and paste your React GIPHY API key. You can use this one below if needed. 
`REACT_APP_GIPHY_KEY=NmYBMpJ204PfuilSDN94bzlmFrg439ae`
5. Be sure the `.env.local` file is grayed out and not being read by Git.
6. Test your code locally (`npm start` ) and verify it runs without issue.
7. Sign up for a free **Netlify** account by linking your Netlify account to Github.

### Part 3: Deploying with Netlify

1. Once you have an account and have signed in, click on the green `New Site from Git` button.
    
    ![Untitled](React%20Deployment%20to%20Netlify/Untitled.png)
    
2. Choose `GitHub` as your Git provider. 
3. You may then need to provide *Netlify* with permission for accessing your GitHub account. *This may require additional GH authentication steps.*
4. Choose the repository (`netlify-react-test`) you want to deploy.
5. Add `CI= npm run build` as the build command. There MUST be no space BEFORE the equal sign and there MUST be a space AFTER the equal sign.
[Read more about what this command does.](https://answers.netlify.com/t/new-ci-true-build-configuration-treating-warnings-as-errors-because-process-env-ci-true/14434) 
6. Be sure to add "build" as the publish directory!
7. Click yes to everything else!

We are setting up continuous deployment, which means that every time you merge code onto your default `main` branch, it'll re-deploy the changes to Netlify!

***Your app is now deployed! 🎉***

### Part 4: Configuring your App’s Environmental Variables

After you have successfully deployed your react application on Netlify, you may need to configure environmental variables for use by your app. 

1. Select `Site Settings` button from the Site Overview card or in the site’s main navigation (all the way to the right).
    
    ![Untitled](React%20Deployment%20to%20Netlify/Untitled%201.png)
    
2. Select the `Environmental Variables` link in the left hand navigation section 
    
    ![Untitled](React%20Deployment%20to%20Netlify/Untitled%202.png)
    
3. Click the `Add Variables` button in the main panel and set your key and value in the provided fields. Add the variable `key` the REACT_APP_YOUR_VARIABLE from your `.env.local` in the Key field. 
4. Next add the value from your `.env` file in the `Values` field. Click `Create variable` button to save your environmental variable. 
    
    ![Untitled](React%20Deployment%20to%20Netlify/Untitled%203.png)
    
5. Test your production site and verify the application runs without error. 
6. If you feel comfortable with the work flow of deploying to Netlify, *work with your team to deploy your current project / lab.*

## Solving Deployment Issues

**Not working?** Don't worry! Debugging is a part of your life now. 

### Running into Errors?

More often that not, solving deployment issues requires a good deal of Googling.
Don't expect to find a silver bullet -- often we must go through many different
issues other users may have encountered to understand our own.

What should you Google?

- If you aren't able to deploy, consult the [deployment and build logs](https://docs.netlify.com/site-deploys/overview/#deploy-log) for key terms to google.
- If you are able to deploy but your app doesn't load/function properly refer to the browser console. Netlify does not have a `console` for our app, nor will you see errors on the site like we did with our `create-react-app` Netlify hosts a static version of our app that runs in the browser, so any runtime errors will be found with your Chrome dev tools.

### Note:

- A common error that students come across is file name case sensitivity. Check
out [this documentation](https://stackoverflow.com/questions/10523849/changing-capitalization-of-filenames-in-git) on changing the capitalization of filenames in Git.

### Help Each Other Out!

If you notice somebody running into the same problem as you, try working
together on debugging it!

## Additional Resources

[React Environmental Variables](React%20Deployment%20to%20Netlify/React%20Environmental%20Variables%200ea78774a0ea42e494a0f0a53332557a.md)

[🚀 Node Process REPL](React%20Deployment%20to%20Netlify/%F0%9F%9A%80%20Node%20Process%20REPL%20e482acea2ee344f6bed742718e2367de.md)

- [12-Factor Apps in Plain English](http://www.clearlytech.com/2014/01/04/12-factor-apps-plain-english/)
- [12-Factor Principles](https://12factor.net/)