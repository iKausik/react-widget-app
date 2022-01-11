# React Widget App

## Two sweet and simple widgets built using React.js

![Widget App](https://github.com/iKausik/react-widget-app/blob/master/src/assets/React-Widget-App.PNG)

## Goals of the Project

The main goals of the project is to build two widgets.

**For the 1st widget:** User can change the slider at the bottom and number inside the circle and the circular bar around the circle will change. Range is 0-10.

**For the 2nd widget:** Users can select any bar on the scale, and the status text above will be updated as per the selection.

## Setup & Intallation

**Prerequisites:**
You should have `node` and `npm` installed locally on your machine.

Clone the repository locally

Install all the dependecies `npm install`

Start the development server `npm start`

It'll start the server on your `localhost:3000`

Go there to see the app running on your local machine.

## Tests

All the test cases are written using `react-testing-library` under the `__test__` folder as `fileName.test.js` on the corresponding components folder.

To run all the tests, use `npm test`

## Solutions

**For the 1st Widget:** React `useState` hook is used to build the counting functionality in the middle of the circle and the circulur progress bar around the circle when changing the slider at the bottom.

**For the 2nd Widget:** React `useReducer` hook is being used to build the functionality of selecting the bar and changing the status text above according to the selection.

_see the Opportunity for Improvement section below to know more about improvment options._

For all styling purposes `material-ui` and `css` are being used.

## Opportunitiy for Improvements

Although this **React Widget App** is fully functional according to the goals of the project. there are some areas that needs to be improved.

The 2nd widget's code is need to be refactored, there's some repeatated code that should be avoided.

I've built a 2nd version for the 2nd widget as `Bars_v2.js` It's better version with more concise code than the currently running version. But the `Bars_v2.js` is not ready yet.

see the comment in the `Bars_v2.js` file to know about it or try running it on your localhost.

## Contributions

Contribute to the project if you have better Solutions.

Always open for improvements and discussion for better ways to do things.

## Contact

If you've done the contribution, or just want to say `Hi` **Tweet me** [@kausik47](https://twitter.com/kausik47)
