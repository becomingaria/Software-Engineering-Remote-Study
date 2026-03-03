# Regex Exercise

### 💪 Practice Exercise (5 mins)

- **Write a regex that would match a CSS color hexadecimal (3 or 6 characters), such as`#f355Ac` or `#D39`**
    - Solution
        
        `/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/`
        

### Grouping

- Parentheses are used inside regular expressions to create groups that can then have a quantifier applied to the group as a whole.
- Whereas, the square brackets character class, `[]`, represents a **single** character to match, the parentheses, `()`, represent a **group** of characters to match.
- Let's say we wanted to match a computer's IP Address. Ignoring the fact that we should limit the numbers to between 0 and 255, we could write something like this: `/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/`
- But using grouping we can shorten this to: `/(\d{1,3}\.){3}\d{1,3}/`

### 💪 Practice Exercise (2 mins)

- **Write a regular expression that would match this string:`hey!hey!hey!`**
    - Solution
        
        `/(hey!){3}/`
        

### Anchors and Boundaries

- Anchors and boundaries are unique in that they don't match a character, instead they match a *position*.
- They allow us to write patterns that match strings that contain only the characters we are interested in and only if they are isolated the way we want them to be.
- The `^` symbol is used to match the start of the line. This is very useful for processing a file containing multiple lines.
- The `$` symbol matches the end of the line.
- For example, without boundaries, the regex `/dog/` will return *true* when tested against any of these strings: "dog", "dogs" and "My dog is named Spot". However, the regex `/^dog$/` will match only the string "dog" and when there is no other text in the line.
- Let's test the pattern, `cat`, with anchors (`/^cat$/`), and without (`/cat/`), against the strings "cat" and "catsup".
- There is also `\b`, which matches a position called a<br>*word boundary*. The `\b` will match any of the following:
    - Before the first character in the string.
    - After the last character in the string.
    - Between two characters in the string where one character is a word character and the other is a non-word character such as a space, tab, or newline.
- The `\b` easily allows us to search for whole words only.
- This is how we could use the string `match()` method to return the matches by passing in a regex:
    
    ```jsx
    // try with no word boundary
    let re = /cat/g;
    let matches = "The catsup was eaten by the cat".match(re);
    // ["cat", "cat"]
    
    // try using word boundary
    let re = /\\bcat\\b/g;
    let matches = "The catsup was eaten by the cat".match(re);
    // ["cat"]
    
    ```
    
    The `g` at the end of the regex is the *global* flag and it tells the regex to search for all matches, instead of just the first.
    

### Capturing

- Parentheses can also be used to define **capture** groups.
- Capturing is when matched text is "captured" into numbered groups.
- These groups can then be reused with a process called back-referencing.
- Capturing is beyond the scope of this lesson. Here's [one of several articles out there](http://techbrij.com/javascript-backreferences-string-replace-regex) should the mood strike you.

## Additional Practice

- Now you can have some fun practicing writing four more regular expressions.
- A possible solution follows each of the four exercises.

### Additional Practice - 1 of 4

Match an *American Express Credit Card Number* which always begin with 34 or 37 and totals 15 digits.

- Solution
    
    `/3[47]\d{13}/`
    

### Additional Practice - 2 of 4

Match a full U.S. Phone Number:<br>**+1-(555)-555-5555**

- Solution
    
    `/\+1-\(\d{3}\)-\d{3}-\d{4}/`
    

### Additional Practice - 3 of 4

A date in the format: `YYYY-MM-DD` 

YYYY can start with either 19 or 20 only.

DD can be anything from 01 to 31, regardless of the month.

- Solution
    
    `/(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/`
    

### Additional Practice - 4 of 4

An integer between 0 and 255<br>This is difficult, remember to use the "alternation" (|) operator.

- Solution
    
    `/(2[0-4][0-9]|25[0-5]|[01]?[0-9]?[0-9])/`