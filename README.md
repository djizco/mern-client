# MERN Client

For those who wish to separate [MERN Boilerplate](https://github.com/djizco/mern-boilerplate) into the client and server, this repo is for the client. This project is meant to be used alongside [MERN Server](https://github.com/djizco/mern-server).

## Requirements

* Operating System: MacOS or Linux
* [Node.js](https://nodejs.org/) (I recommend installing with [NVM](https://github.com/nvm-sh/nvm))

## Quick Start

#### Setup

```bash
npm install
```

#### for Development

Start the client
```bash
npm run start
```

#### for Production

```bash
npm run build
```

#### Other Commands

```bash
npm test
npm run lint
npm run lint:fix
npm run test:coverage
npm run test:verbose
npm run test:watch
```

## Setup Instructions

Note: This is now a github template project. This makes copying the contents of the project
into a new repo very simple.

To setup your own project, you will need to copy the contents of this project into a new repo.
You will need to update the content in these files to names of your project and yourself:

* package.json: name, version, description, repository, author, bugs, homepage
* LICENSE: (update to your preferred license)
* client/index.html: description and title
* this README.md

This is also a good time to go through the included libraries to add or remove features that you want.

After this you can commit the files into a new repository and push up to your github.
You can now start updating files in your client to begin working on your own project!

## Features

* Webpack conveniently bundles your code for you.
* Babel lets you use ES6/7 features.
* CSS pre-processor setup for LESS and SASS lets you keep your styles clean and organized.
* ESLint helps you maintain a high level of code quality.
* Jest gives you a robust testing framework to make sure your code works.

## Code Structure

```
- client
  - api
  - assets
    - images
    - icons
  - components
    - pages
    - environment
  - hooks
  - store
    - actions
    - reducers
    - thunks
    - tests
  - styles
  - utils
- config
- scripts
```

## Technologies

[React](https://facebook.github.io/react/) - View Library

[Redux](http://redux.js.org/) - State Manager

[Webpack](https://webpack.github.io/) - Module Bundler

[React Notifications Component](https://teodosii.github.io/react-notifications-component/) - Notification System

[Material-UI](http://material-ui.com/) - React Component Library

[Bulma](http://bulma.io/) - CSS Framework

[React Bulma Companion](https://github.com/djizco/react-bulma-companion) - Bulma Component Library

[FontAwesome](http://fontawesome.io/) - Icons

[Ramda](http://ramdajs.com/) - Functional Library

[date-fns](https://date-fns.org/) - Date Functions Library

[SuperAgent](https://github.com/visionmedia/superagent) - HTTP Request Library

[ESLint](http://eslint.org/) - Code Linter

[Jest](https://jestjs.io/) - Testing Framework
