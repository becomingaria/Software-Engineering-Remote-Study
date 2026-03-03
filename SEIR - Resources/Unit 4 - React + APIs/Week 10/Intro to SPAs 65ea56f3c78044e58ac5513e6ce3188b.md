# Intro to SPAs

![](https://i.imgur.com/IKHxRMa.png)

# Intro to Single-Page Applications (SPAs)

## Learning Objectives

Students Will Be Able To:

---

Explain the difference between a SPA and a traditional multi-page web application

---

Identify the three development concepts that make SPAs possible

---

## Road Map

1. Intro to SPAs
2. Intro to the MERN-Stack
3. This Unit's Reference App: **SEI CAFE**
4. Building a MERN-Stack's Infrastructure
5. Setting Up the **mern-infrastructure** Project
6. Configure React for Full-stack Development
7. Essential Questions
8. Further Study

## 1. Intro to SPAs

### Review - What is a Single-Page App?

We've mentioned them previously - **what are they?**

![](https://i.imgur.com/m01TbLF.png)

In a traditional multi-page web app, if we click a link, submit data via a form, or type in the address bar and press [enter], **what happens?**

In a SPA, we still want to be able to access different functionality by clicking links, submitting data to the server, etc., however, we want the UI to update without triggering a full-page refresh.

There are three development concepts that make SPAs possible:

1. AJAX Communications between client and server
2. Client-Side Routing
3. Client-Side Rendering

### Concept 1: Client/Server Communication via AJAX

As you've seen, the `fetch` API, as well as utilities such as Axios & jQuery's AJAX methods can be used to send HTTP requests to a server using JavaScript instead of using forms and links in the page.

With AJAX, the server responds to an HTTP request with an HTTP response that usually contains a JSON payload in the response body.

Because the request was sent via code, and the response handled via code, the browser won't reload the page!

### Concept 2: Client-Side Routing

When the users have interacted by clicking links and submitting forms in the traditional multi-page web apps we've built thus far, the server has responded with a new HTML document that the browser proceeds to replace the current page with.

In a SPA, we still need a way to switch to different "pages" of functionality (see diagram above) - but without replacing the entire HTML document that's currently loaded in the browser...

**Client-side routing** is what enables users of a SPA to navigate to different "pages" without triggering a full-page refresh.

The users will still be clicking navigation "links" that cause the browser's address bar to change.

However, the client-side router intercepts the changes to the path by tapping into the browser's [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

By using the History API, the client-side router can manipulate the path in the address bar without triggering an HTTP request.

> 👀 We will continue to define server-side routes, however, the vast majority of those routes will be API-type routes that are accessed via AJAX calls, perform CRUD and return data as JSON to the browser.
> 

Feel free to checkout the Further Study section to learn more about the History API and Hash URIs.

### Concept 3: Client-Side Rendering

So, assume a user clicks an **Add Comment** button in a SPA and expects to see the new comment show up in the list of comments...

This is a SPA, so you don't want the button to cause a full-page refresh!

In SPAs, you would send an AJAX request containing the data for the new comment to the server.

The server would update the database respond with JSON data - probably containing the current comments in an array.

However, to make the comment show up in the UI, it needs to be updated using JavaScript - a process we call **client-side rendering**.

- Guess who the undisputed client-side rendering champion is...
    
    The **React** Library - of course!
    

### ❓ Review Questions - SPAs (1 min)

- (1) What's the most significant difference between a traditional multi-page web app and a single-page app?
    
    
    **A SPA avoids full-page reloads.**
    
    A SPA loads the `index.html` once and then has its DOM modified via client-side rendering.
    
- (2) What three development concepts enable the creation of comprehensive single-page applications?
    
    
    - AJAX Communications between client and server
    - Client-Side Routing
    - Client-Side Rendering