# fundoo-client
Fundoo front-end developed on Reactjs framework.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites or Installation

> Linux:

What things you need to install the software and how to install them

```
npm install - which will install all modules present in package.json file.
```

## Usage example

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

https://github.com/BYL0002/fundoo-client/issues/2#issue-436583446

### Installing

A step by step series of examples that tell you how to get a development env running

```
npx create-react-app my-app
npm i redux
npm i @material-ui/core
npm i @material-ui/styles
npm i react-charts
npm i react-canvas-js
npm i dotenv
---or---
npm install
npm run start
```

## Code analysis setup

> Describe how to install all development dependencies and how to run an automated code analysis. Potentially do this for multiple platforms.

```sh
sudo apt-get install docker.io
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
npm i sonarqube-scanner
run sonarqube on browser - localhost:9000
```

## Testing setup

> Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
npm i @babel/core
npm i jest
npm i enzyme
```

## Running the tests

> Explain how to run the automated tests for this system

```sh
change branch to test
npm install
npm run test
```

### Break down into end to end tests

Explain what these tests test and why

```
tests work on input and output of project flow.
Request to hit api and response generated with status code from the operations on request data.
Unit testing done with Json format.
```

## Deployment

> Notes about how to deploy this on a live system

```sh
* [Docker] (https://www.docker.com/) - to get the images of redis, mongodb & etc.
* [AWS Console] (https://aws.amazon.com/console/) to get instances running to provide CICD.
* [Jenkins] (https://jenkins.io/) - to get the job assigned and running with github repo.
* [Github] (https://github.com/) - to make our code best accessible to team.
```

## ReactJs Instructions
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Built With

* [Reactjs](https://reactjs.org/) - The web framework
* [Material ui](https://material-ui.com/) - Designing library
* [Nodejs](https://nodejs.org/en/) - Platform

## Authors

* **Yash Sharma** - *Initial work* - [BridgeLabz-Yash](https://github.com/BYL0002)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
