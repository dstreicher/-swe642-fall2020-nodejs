# Dog Picture Fetcher

This is a sample project showcasing different ways to write asynchronous code in Node.js

## Requirements

- Node.js (v10.16.0 or greater) https://nodejs.org/en/

## Getting Started
Run the following command to install the dependencies and start the web server:
```
npm install
npm start
```
Then open a web browser and navigate to the following page: http://localhost:3000

## Evaluating Other Approaches
Change the import statement (line 2) in the dog-web-api.js file depending on which code you want to use:
```javascript
const dogAPI = require('./callback'); // for callbacks
const dogAPI = require('./promise'); // for promise objects
const dogAPI = require('./async-await'); // for async await pattern
```