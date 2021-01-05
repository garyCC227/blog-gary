---
title: How to hide your API keys in React.
author: Puskar Adhikari
date: Jun 01 2020
tag: api
---

An API key or application programming interface key is a code that gets passed in by computer applications. The program or application then calls the API to identify its user, developer or calling program to a website.

Application programming keys are normally used to assist in tracking and controlling how the interface is being utilized. Often, it does this to prevent abuse or malicious use of the API in question.

An API key is both incredibly powerful and extremely vulnerable. API key exposure can result in significant damage, both to a company and to the data it holds. As such, hiding and securing keys (as well as a mitigating potential loss) is critical for any security plan in the modern API space.

**So, how do we hide it in React? Here is how to do it in a React app:**

**1. Create a file called `.env` in the root of your project’s directory.**

```
node_modules
public
src
.env     <---- Here
.gitignore
LICENSE
README.md
package-lock.json
package.json
```

**2. Inside the `.env` file, prepend `REACT_APP_` to your API key name of choice and assign it.**

`REACT_APP_` is, in fact, a tool that create-react-app uses to identify these variables.

```
// .env
API_KEY=your_api_key            <-- this won't work
REACT_APP_API_KEY=your_api_key  <-- yes! this work
// Example:
// REACT_APP_GOOGLE_API_KEY=123456
```

**3. Add the `.env` file to your `.gitignore` file.**

You don’t want this file to be committed to gitHub!

```
// .gitignore

# api keys
.env       <-- add this line

# dependencies
/node_modules
...
```

After you’ve saved `.gitignore`, run `$git status` to make sure that `.env` is not on the list of changes to be committed.

**4. Access the API key via the `process.env` object.**

To check that you can access your API key, go to your `App.js` file and add `console.log` at the top below the require statements. After saving the file and reloading the page, if the `console log` does not show your API key, try restarting the react server. And of course, make sure to remove the `console.log` line before committing your code.

```
// src/App.js
import React, { Component } from 'react';
import './App.css';
console.log(process.env.REACT_APP_GOOGLE_API_KEY)
class App extends Component {
...
```

> The accidental synchronization of secure code is not uncommon. The solutions to hide is very easy to implement and can be done broadly across almost any current implementation. Ensuring the security of your API key should be a major focus for any organization or personal project, and is a first major step for any security plan. What do you think about this implementation?
