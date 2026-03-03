# Korilla Receipts

# **Korilla React Receipts - BONUS HW**

- [Solution Repo & Video for Korilla Receipts Lab](https://github.com/SEIR-1031-Resources/kr-review)
- [Solution Repo & Video for iStocks Lab](https://github.com/SEIR-1031-Resources/istocks)

Korilla is a Korean barbecue taco truck that makes thousands of hungry customers happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.

## **Prerequisites**

- Creating/Updating State
- Lifting State
- Working with inputs and/or forms
- Working with controlled and uncontrolled inputs

## **Instructions**

Start your server by doing the following:

- open your terminal
- cd into the [./korilla-receipts](https://ringo.mycohort.download/react-fundamentals/week-13/day-3/lab/korilla-receipts) folder
- run **npm install** to install all dependencies
- run **npm start** to start the server

You can also choose to work on this codebase using this [CodeSandbox Starter](https://codesandbox.io/s/korilla-receipts-starter-donod?file=/src/App.js)

## **Requirements**

Complete parts 1, 2 and 3. If you have extra time begin working on the bonus sections in the sequence they are provided.

Here is a [working example](https://98mru.csb.app/) of the app (Parts 1,2,3 only).

### **The Component Tree**

- `App | |__ Form | |__ Receipts | |__ Receipt`

## **Part 1: Render Receipts**

You'll be rendering some receipts. This data should be copied/pasted into a file called receiptData.js and imported into App.js. Then use `useState`create [receipt, setReceipt] and assign receipt to the receiptData array.

`const App = () => {
  const [receipt, setReceipt] = useState(receiptsArr)
  //...
}`

### **Receipt Data**

Here is a copy of the data needed to render some initial receipts.

- **Receipt Data**

### **Receipts**

The receipts should display the following information:

- person
- order
    - main
    - protein
    - rice
    - sauce
    - drink
    - cost
- paid

![](https://i.imgur.com/pTgXZGO.png)

## **Part 2: Searching for receipts**

Implement a form that allows you to search the receipts based on person name. Once submitted the app should return only those matching names.

The inputs used to capture user data should all be `controlled`which requires using `onChange`and the use of `state`to update the inputs.

## **Part 3: Update the receipts**

Right now, all the receipts are not paid. Add a click event to the paid field that will toggle the values true or false.

## **Bonus #1: Add a New Receipt Form**

Add a new form that will allow the user to add a new receipt that captures all the data needed to display the receipt. It should also set the `paid` property to false by default.

The inputs used to capture user data should all be `controlled` which requires using `onChange` and the use of `state` to update the inputs.

## **Bonus #2: Add `Paid` and `Not Paid`buttons**

Add two buttons that will allow you to easily toggle between receipts that are paid and not paid. Only display those receipts based on the users selection of those buttons

Here are solutions with this bonus:

- [Justin](https://y9m9l.csb.app/)

## **Bonus #3: Add a button that will sort the receipts**

Add a button that will sort the receipts by name.

Here are solutions with this bonus:

- [Justin](https://y9m9l.csb.app/)

## **Bonus #4: Add some CSS**

Be creative and add some CSS. Here are previous student examples:

- [Haley](https://i56hg.csb.app/)