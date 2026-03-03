# Deploying Your App to GitHub-Pages

## Intro

This quick walk-thru will show you how easy it is to deploy your static web application so that it can be accessed by anyone with Internet access, anywhere in world!

Any GitHub repository containing an *index.html* and other static assets can become a website published straight from a repository on GitHub and be publicly available on the internet.

## **What is a *static* application?**

A *static* application is an application that consists solely of **static assets**.

Static assets are files that are not "processed" by the web server in any way, they are simply delivered by the web server as they are requested by the browser.

Typical **static assets** include:

- **html** files
- **css** stylesheets
- **javascript** files
- **image** files

## Steps to deploy your repository to GitHub Pages.

1. Create or use an existing repository and navigate to your site's repository.
2. Make sure your repository visibility is set to **Public**.

![Untitled](Deploying%20Your%20App%20to%20GitHub-Pages/Untitled.png)

- 👈 If it is set to **Private**…
    1. Click ⚙️ **Settings** from your repository.
    2. Scroll down to the Danger Zone section.
    3. Click the **Change Visibility** button then select Change to Public.
    4. Confirm that you are updating the repository to Public from the prompt.
1. Create the entry file for your site. GitHub Pages will look for an `index.html`, `index.md`, or `README.md`file as the entry file for your site.
2. Under your repository name, click ⚙️ **Settings**.

![Untitled](Deploying%20Your%20App%20to%20GitHub-Pages/Untitled%201.png)

1. In the "Code and automation" section of the sidebar, click **Pages**.

![Untitled](Deploying%20Your%20App%20to%20GitHub-Pages/Untitled%202.png)

1. Update the **Branch** section by clicking on the drop-down menu and select a folder (typically **/root** if your `index.html` file is in your root directory) for your publishing source and click **Save**.

![Untitled](Deploying%20Your%20App%20to%20GitHub-Pages/Untitled%203.png)

1. Wait a few minutes then check your site! The source files for a project site are stored in the same repository as their project. Unless you're using a custom domain, project sites are available at  `https://<username>.github.io/<repo-name>/`.

## 📚 Resources

- [GitHub Pages](https://pages.github.com/)
- [About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)