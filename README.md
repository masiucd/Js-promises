# JS Promises

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Tools](#tools)
- [Promise-State](#promise-state)
- [Catch](#catch)
- [Finally](#finally)
- [Promise Constructor](#promise-constructor)
- [Race](#race)

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

## Catch Errors <a name = "catch"></a>

What would happened if something wrong would happened on the way from out request? We would like to catch somehow our errors to handle the on some kind of way.
When using promise chaining we can add another chain at the end names `.catch()` that will catch our errors if the promise has been rejected.
Remember the we can nly bee in on state, either `fulfilled` ore `rejected`.
So using the same example above we could add the `.catch()` at the end and catch any errors, if so.

For example let's change the url

```js
const x = fetch("https://json-----placeholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log(users)
    console.log(users.length)
  })
  .catch(err => console.error("ohh nooo!!!", err))
console.log(x)
```

<img src="error.png" />

## Finally <a name = "finally"></a>

The `Promise.prototype.finally()` m​e​t​h​o​d lets you attach a callback to a promise that is executed once that promise is settled(`fulfilled` ore `rejected`). It used when you want to clean up the logic, for example if u suing a pinner you don't want to still show the spinner if the promise has been rejected, then `.finally()` is a great option to use here.

## Promise Constructor <a name = "promise-constructor"></a>

We can even create our own native promises with the built in Promise constructor, `new Promise()`.
The `Promise constructor` function takes two parameters, `resolved` adn `rejected`.
this parameter do exactly what they defined, they either resolve our promise ore reject it.
When using the build in Promise constructor you will have access to all the asynchronous functions like `async await` and `promise chaining methods`.

_Own promise example_

```js
function run(amount: number) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      if (amount >= 500) {
        resolved("run after  " + amount + " ms")
      } else if (amount < 500) {
        reject("promise got rejected because it can't handle ms under 500 ms")
      }
    }, amount)
  })
}

run(650)
  .then(res => {
    console.log(res)
  })
  .then(() => run(900))
  .then(r => console.log(r))
  .then(() => run(790))
  .then(r => console.log(r))
  .then(() => run(300))
  .catch(r => console.log(r))

// Please don't do this Christmas tree in your production code
// this is just a example code
run(700)
  .then(res => {
    console.log(res)
    run(600)
      .then(res => {
        console.log(res)
        run(1200)
          .then(res => {
            console.log("res", res)
            run(300)
              .then(res => {
                console.log(res)
              })
              .catch(err => {
                console.log(err)
              })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  })
  .catch(err => {
    console.log(err)
  })
```

## Race <a name = "race"></a>

`Promise.race()` will return the fulfilled promise that will be fulfilled first, so simply the fastest will win.
`Promise.race()` takes a array og f promises as a parameter, if you give at a empty array the state will be a pending promise.

```typescript
function runAfter<T>(ms: number, val: T) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val)
    }, ms)
  })
}

const rabbit = runAfter(2000, "🐇")
const turtle = runAfter(6000, "🐢")

const winnerIs = Promise.race([rabbit, turtle])
winnerIs.then(res => {
  console.log(res)
})
```

## Tools <a name = "tools"></a>

- Promises
- Typescript
