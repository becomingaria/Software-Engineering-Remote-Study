# MERN Infrastructure Intro

# Intro to MERN Stack

A technology stack, also called a solutions stack, is a group of development tools/services used to build an application.

For example, the LAMP-Stack is a mature technology stack that uses:

- Linux
- Apache (web server)
- MySQL and
- PHP (web development programming language)

In the last unit, our stack consisted of:

- Python
- Django and
- PostgreSQL

There are a few tech stacks that use MongoDB, Express & Node as their backend solutions.

Then, one of the following front-end technologies is added to go full-stack:

- [React](https://reactjs.org/) which results in the MERN-Stack
- [Angular](https://angular.io/) which results in the MEAN-Stack
- [Vue.js](https://vuejs.org/) which results in the MEVN-Stack

The MERN-Stack is by far the most popular tech stack currently and will remain so into the foreseeable future.

### Architecture of the MERN-Stack

The following depicts the overall architecture of a MERN-Stack app:

![](https://i.imgur.com/m87p4kN.png)

The flow is as follows:

1. When the user browses to the app's URL, our client view is separate from the Express server, which will serve `json` data. 
    
    > 👀 There will be no EJS templates on the server - the express app will not return `html` documents - the server API will only provide context data to the client.  In fact, as we setup our backend, there's no reason to install the EJS template engine!
    > 
2. The browser loads the React app (outlined in blue) .
3. The code in the React app's **index.js** module runs, which causes the React app to render for the first time. During this initial rendering, the client-side routing library renders components based upon the URL in the address bar.
4. After the React app has been loaded, all subsequent HTTP communications between the client and server will be via AJAX in order to avoid the page from being reloaded.
5. Certain components may want to CRUD data on the server. However, we won't litter components with the code responsible for CRUD. Instead, as a best practice, that code will be organized into **service/API** modules.
6. All routes on the server will be defined to respond to AJAX requests with JSON. By convention, the endpoints of these routes with be prefaced with `/api`, e.g., `/api/cats`, `/api/login`, etc.

## 3. What we are building: People App

As you know, it's important to practice the individual skills we learn for a given technology by bringing them together to build a real-world working application.

A user will be able to:

- Create a person
- Review a person’s details
- Update a person’s profile information
- Delete a person’s profile information
- Additionally, we will provide a*uthentication* + a*uthorization* functionality
    - implementing JWT authentication - token based authentication
    - implementing PassportJWT middleware for authorization.

## 4. Building a MERN-Stack's Infrastructure

We'll begin by building out the infrastructure (boilerplate) that most real-world MERN-Stack apps starts with, including client-side routing and authentication.

### How to Structure a MERN-Stack Project

Up until this point, we've taken for granted that full-stack apps, like your Express and Django projects, were single, integrated projects.

However, developing a MERN-stack project involves complexities such as tooling such as [webpack](https://webpack.js.org/), React's development server, etc.

Additionally, there are concerns during both **development and production** that have to be addressed...

### During Development

A React project uses a development server that compiles and serves the React app to the browser at `localhost:3000`.

- ❓ There's a conflict between React's development server and the Express applications we've built previously - what is it?
    
    **They both run on port `3000` by default** and only a single process can run on a given port.
    

### Production Environment Concerns

As we develop our React app locally, we're writing source code that React's dev server builds and runs automatically.

### Possible MERN-Stack Project Structures

There are two general architectures we could pursue:

1. Maintain **two** separate projects, one for the React app, the other for the Express backend.
2. Integrate the codebase for both the React frontend and the Express backend into a single application.

While option two is **cleaner** in terms of architecture and dependency management it can prove complex for app deployment/version control, so we will be build out two separate applications. 

## Step 1 - Project Setup

[MERN Setup](MERN%20Infrastructure%20Setup%20128271c309f7443a97f3cc1d274cf358.md)