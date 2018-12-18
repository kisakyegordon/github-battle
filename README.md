[![Maintainability](https://api.codeclimate.com/v1/badges/703c60dab84f064dfa10/maintainability)](https://codeclimate.com/github/kisakyegordon/github-battle/maintainability)   <a href="https://codeclimate.com/github/kisakyegordon/github-battle/test_coverage"><img src="https://api.codeclimate.com/v1/badges/703c60dab84f064dfa10/test_coverage" /></a>

# GITHUB BATTLE

Compares developers github accounts.

![Screenshot]("./docs/screenshot.png")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
#### Prerequisites

What things you need to install the software and how to install them

```
- node
- npm or yarn
```



#### Installing

How to get the development environment running.

- Cloning the project.

  * while inside a desired directory, clone the github-battle repository using https://github.com/kisakyegordon/github-battle*

- Install Packages

  * enter the github-battle repository then run the `npm install` or `yarn  install` command on the terminal to install the required libraries.

- Start The Application

  * To start the application, run the `npm start` or `yarn start` commands.


#### Running the tests

To locally run the tests

  * run the `npm test` or `yarn test`, you can also see the whole coverage by appending --coverage ie `npm test --coverage`.




## Setting up Continuos Integration.

- To setup continuos Integration, i created a `.circleci` directory with a `config.yml` file where i put instructions for circle-ci to read when a change is made to this Repo.

- The instructions are used by circleci to setup an environment to test the current changed build and they can be summed with :
  * What node version to use.
  * How to run tests.
  * Send test coverage report to code-climate.
  * Where to deploy the app, when the build is successful.

- #### Environment Variables Used.
  - `CC_TEST_REPORTER_ID` - used to create a connection to [code-climate](https://codeclimate.com/github/kisakyegordon/github-battle) to which the coverage report is sent, this key is obtained from  code-climate.

  - `HEROKU_API_KEY` - used to create a connection to [Heroku](https://githubattle.herokuapp.com/), where the application is deployed.

  - `HEROKU_APP_NAME` - used to specify the app name on Heroku to which our github battle application is deployed.

