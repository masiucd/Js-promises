# JS Promises

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Tools](#tools)
- [Promise-State](#promise-state)

## About <a name = "about"></a>

JS-promises a huge feature of how we can handle asynchronous code in our javascript programs.
This Repository will take up the fundamentals and to explain to core concepts how they actually work and how you can use them in your code base.

## Getting Started <a name = "getting_started"></a>

### start server

to be able to start the server run `npm run json-server`
now when the server is started, check your terminal and you will se what endpoint you have access to.
You could also modify the data in `db.json`

## Promise State <a name = "promise-state"></a>

there is 3 possible states that or promise can be in

- Pending
- Fulfilled
- Rejected

Before our result is ready the promise is the pending state.

```js
const x = fetch("https://jsonplaceholder.typicode.com/users").then(
  response => response
)
```

when the promise is available then the promise change it state to `fulfilled`.

if something bads happened the promise gets `rejected`.
if the promise has either been fulfilled ore rejected we usually says that the promise has been settled. It can't now change it's state to something else.

## Promise-chain <a name = "promise-chain"></a>

Simply promise chain is when we can chain our response into the the next step.
For example:

```js
const x = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log(users)
    console.log(users.length)
  })
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 10
```

We return the data in to next `promise chain` where we can console.log out the result and length of the users list

## Tools <a name = "tools"></a>

- Promises
- Typescript
