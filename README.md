# Project Instructions

The goal of this project is to give you practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Stage 1 - Getting Started - Setting up the Project

It would be good to first get your basic project up and functioning. Fork the project Github repo, and then clone or download the zip file locally. Remember that once you clone, you will still need to install everything:

```sh
cd <project directory>
npm install
```

Follow the steps from the course up to Lesson 4, but do not add Service Workers just yet. We won't need the service workers during development, and having extra caches floating around just means there's more potential for confusion. Just for your quick reference, we installed the following loaders and plugins so far:

```sh
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```

## Stage 2 - Setting up the API

You will be using the MeaningCloud Sentiment Analysis API for this project.

### Step 1: Signup for an API key

You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API.

### Step 2: Environment Variables

Follow the steps below to configure environment variables:

- [ ] Use npm or yarn to install the dotenv package `npm install dotenv`. This will allow us to use environment variables we set in a new file
- [ ] Create a new `.env` file in the root of your project
- [ ] Fill the .env file with your API keys like this:

```
API_ID=**************************
API_KEY=**************************
```

- [ ] Add this code to the very top of your server/index.js file:

```
const dotenv = require('dotenv');
dotenv.config();
```

- [ ] Reference variables you created in the .env file by putting `process.env` in front of it, an example might look like this:

```
console.log(`Your API key is ${process.env.API_KEY}`);
```

- [ ] Go to your `.gitignore` file and add `.env` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.

### Step 3: Using the API

We're ready to go! You can check out the documentation of the MeaningCloud API [here](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1). MeaningCloud also has several other APIs, which we won’t be using for this project, but feel free to take a look around if you’re curious!

It's up to you to create the various requests and make sure your server is set up appropriately.

## Stage 3 - Project Enhancement

At the current stage, make enhancement in your project code. Parse the response body to dynamically fill content on the page.

For the next stages should remain only requirements related to "Offline Functionality" and "Testing" criteria.

## Stage 4 - Unit Testing using Jest Framework

[Jest](https://jestjs.io/en/) is a framework for testing JavaScript projects. The Jest framework provides us the ability to create, and run unit tests. In general, unit testing means to test the functionality of each unit/component of a project. But, in our case, we will write tests for desired functions defined in the src/client/js directory. The tests will check if the functions are behaving expectedly when provided an input. Let's learn to add Jest to your project to handle unit-testing.

## How does it work?

1. Install Jest by using `npm install --save-dev jest`

2. Write the custom JS in your src/client/js directory, responsible for the server, and form submission task. For example, assume that the `/src/client/js/formHandler.js` file has the following function to be tested:

```
function handleSubmit(event) {
  event.preventDefault()
  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.checkForName(formText)
  console.log("::: Form Submitted :::")
}
export { handleSubmit }
```

3. You have to ensure that all your custom functions in src/client/js directory can handle error responses if the user input does not match API requirements.

You will write tests in `<function_name>.test.js` or `<function_name>.spec.js` file, to be present in a `__test__` folder. For each functionality, consider writing a separate test file. The `__test__` folder should be present in the project directory.

In each test file, the general flow of the test block should be:

- Import the js file to test
- Define the input for the function. Note that, to keep it simple, we will not validate the input being provided to the test cases.
- Define the expected output
- Check if the function produces the expected output

For the example function shown above, /src/client/js/formHandler/handleSubmit(), you can write a test file testFormHandler.spec.js in the `__test__` directory, having a test block as:

```
// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
```

```
// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
 // The test() function has two arguments - a string description, and an actual test as a callback function.
 test("Testing the handleSubmit() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(handleSubmit).toBeDefined();
})});
```

You must be wondering about the matchers, and other syntactical information about test blocks. At this point, you must refer to the external resources:

[Jest - Getting started](https://jestjs.io/docs/en/getting-started) - Provides a basic overview, with the help of an example.
[JJest - matchers](https://jestjs.io/docs/en/using-matchers) - Read carefully to identify the suitable matcher for each of your functions.
[Jest - testing asynchronous code](https://jestjs.io/docs/en/asynchronous) - If you have code that runs asynchronously.
[A tutorial for beginners](https://www.valentinog.com/blog/jest/) - A good explanatory tutorial.

4. Configure an npm script named "test" in `package.json` to run your tests from the command line:

```
"scripts": {
  "test": "jest"
}
```

Also, ensure that the "devDependencies" in `package.json` have a suitable entry for Jest and others, where the version may vary with time.

5. Run the `npm run` test command.

## Stage 5 - Service Workers

Go to the webpack config file, and add the setup for service workers.  Test that the site should be available even when you stop your local server.

## Stage 6 - Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
