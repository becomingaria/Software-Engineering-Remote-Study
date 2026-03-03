# Setup Gameboard

[Connect 4 Code Along](../Connect%204%20Code%20Along%20db367ae9c0224e00a349852469b497db.md)

## Code away!

Again, programming is as much art as science.

I'm going to be developing from scratch while following the process described in Guide on How to Build a Browser Game!

![](https://i.imgur.com/suIQoiw.png)

### Start with some HTML & CSS

Our goal is to code the HTML & CSS that results in a UI that looks like our wireframe.

We will need to add elements in **index.html** for the following from top to bottom:

- The heading
- The message
- The column "markers"
- The board
- The `[PLAY AGAIN]` button

If an element's content is going to come from the `render()` function, you may want to temporarily include mocked content in the HTML to help with layout and styling. However, once the content is being provided by the `render()` function, you should remove the mocked content from **index.html**.

Along the way, we'll code CSS in **style.css** to layout and style the UI.

- 🆘 Click for help if you've tried but unable to get your project to look like mine.
    
    ```html
    <!-- index.html -->
    
    <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>replit</title>
      <link rel="preconnect" href="<https://fonts.googleapis.com>">
      <link rel="preconnect" href="<https://fonts.gstatic.com>" crossorigin>
      <link href="<https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap>" rel="stylesheet">
      <link href="style.css" rel="stylesheet" type="text/css" />
      <script defer src="script.js"></script>
    </head>
    
    <body>
      <header>CONNECT FOUR</header>
      <h1>PURPLE's Turn</h1>
      <section id="markers">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <section id="board">
    
        <div id="c0r5"></div>
        <div id="c1r5"></div>
        <div id="c2r5"></div>
        <div id="c3r5"></div>
        <div id="c4r5"></div>
        <div id="c5r5"></div>
        <div id="c6r5"></div>
    
        <div id="c0r4"></div>
        <div id="c1r4"></div>
        <div id="c2r4"></div>
        <div id="c3r4"></div>
        <div id="c4r4"></div>
        <div id="c5r4"></div>
        <div id="c6r4"></div>
    
        <div id="c0r3"></div>
        <div id="c1r3"></div>
        <div id="c2r3"></div>
        <div id="c3r3"></div>
        <div id="c4r3"></div>
        <div id="c5r3"></div>
        <div id="c6r3"></div>
    
        <div id="c0r2"></div>
        <div id="c1r2"></div>
        <div id="c2r2"></div>
        <div id="c3r2"></div>
        <div id="c4r2"></div>
        <div id="c5r2"></div>
        <div id="c6r2"></div>
    
        <div id="c0r1"></div>
        <div id="c1r1"></div>
        <div id="c2r1"></div>
        <div id="c3r1"></div>
        <div id="c4r1"></div>
        <div id="c5r1"></div>
        <div id="c6r1"></div>
    
        <div id="c0r0"></div>
        <div id="c1r0"></div>
        <div id="c2r0"></div>
        <div id="c3r0"></div>
        <div id="c4r0"></div>
        <div id="c5r0"></div>
        <div id="c6r0"></div>
    
      </section>
      <button>PLAY AGAIN</button>
    </body>
    
    </html>
    
    ```
    
    ```css
    /* style.css */
    
    * {
      box-sizing: border-box;
    }
    
    body {
      /* viewport units: vh (viewport height), vw, vmin (smallest between vh & vw) */
      height: 100vh;
      margin: 0;
      font-family: 'Open Sans', sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    header {
      font-size: 4vmin;
      color: darkgrey;
      letter-spacing: 1vmin;
    }
    
    h1 {
      color: grey;
      font-size: 3vmin;
    }
    
    #markers {
      display: grid;
      grid-template-columns: repeat(7, 10vmin);
      gap: 1vmin;
      margin-top: 1.5vmin;
    }
    
    #markers > div {
      height: 10vmin;
      border-width: 5vmin;
      border-style: solid;
      border-color: lightgrey transparent transparent;
      transform: scale(0.7);
    }
    
    #markers > div:hover {
      transform: scale(0.9);
      transition: transform 150ms ease-in;
      border-top-color: darkgrey;
    }
    
    #board {
      display: grid;
      grid-template-columns: repeat(7, 10vmin);
      grid-template-rows: repeat(6, 10vmin);
      gap: 1vmin;
      margin-top: -4vmin;
    }
    
    #board > div {
      border-radius: 50%;
      border: 0.1vmin solid grey;
    }
    
    button {
      margin-top: 4vmin;
      padding: 2vmin;
      font-size: 2vmin;
      border-radius: 4vmin;
      border: 0.1vmin solid grey;
      color: grey;
    }
    
    button:hover {
      color: white;
      background-color: darkgrey;
    }
    
    ```
    
    ```
    /*----- constants -----*/
    
    /*----- state variables -----*/
    
    /*----- cached elements  -----*/
    
    /*----- event listeners -----*/
    
    /*----- functions -----*/
    
    ```
    

> 🚀 Please navigate to the next page where we will declare and initialize the state variables in script.js...
> 

[Initializing State](Setup%20Gameboard/Initializing%20State%2056ab3a9c685440949b4de7113c92fdcb.md)