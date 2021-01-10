---
title: JavaScript Promises and reason to use them.
author: Puskar Adhikari
date: May 01 2020
tag: JavaScript
---

Being a JavaScript developer we have to deal with **_Asynchronous code_**, especially, when your application has too much of I/O in it. To deal with asynchronous code,**_callbacks_** &**_promises_** makes their way into the picture. Promises turn out to be more promising for making the code behave synchronously. In this article, we try to understand **_why to use JavaScript promises._**

**What is Promises?**

A promise is an object that may produce a single value sometime in the future: either a resolved value or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked.

**How JavaScript Promises Work**

JavaScript Promises work in one of 3 below possible states.

- _pending:_ initial state, neither fulfilled nor rejected.

- _fulfilled:_ meaning that the operation completed successfully.

- _rejected:_ meaning that the operation failed.

**Why use promises?**

Before we use promises, our code was full of confusing callback tricks and asynchronous. Switching to promises made our code easier to read, understand, and test. There are so many reasons to use promises, but here is some reason to use them.

**1) Ease of Use**

JavaScript promises make our code look so clean and they are easy to learn, understand, and debug.

**2) Handling errors**

When anything in the chain of promises fails and raises an error or rejects the promise, the control goes to the nearest catch() statement down the chain.

```code
new Promise((resolve, reject) => {
  reject('Error')
}).catch(err => {
  console.error(err)
})
```

**3) Cascade errors handling**

If inside the catch() you raise an error, you can append a second catch() to handle it, and so on.

```code
new Promise((resolve, reject) => {
  throw new Error('Error')
})
  .catch(err => {
    throw new Error('Error')
  })
  .catch(err => {
    console.error(err)
  })
```

**4) Chaining promises**

A promise can be returned to another promise, creating a chain of promises.

A great example of chaining promises is given by the Fetch API, a layer on top of the XMLHttpRequest API, which we can use to get a resource and queue a chain of promises to execute when the resource is fetched.

```code
const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  }
  return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch('/todos.json')
  .then(status)
  .then(json)
  .then(data => {
    console.log('Request succeeded with JSON response', data)
  })
  .catch(error => {
    console.log('Request failed', error)
  })
```
