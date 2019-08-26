# Bankr-1.0

[![CircleCI](https://circleci.com/gh/codeBlock-1984/Bankr-1.0.svg?style=svg)](https://circleci.com/gh/codeBlock-1984/Bankr-1.0)
[![Maintainability](https://api.codeclimate.com/v1/badges/c20a46fd835589ea1c1e/maintainability)](https://codeclimate.com/github/codeBlock-1984/Bankr-1.0/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/c20a46fd835589ea1c1e/test_coverage)](https://codeclimate.com/github/codeBlock-1984/Bankr-1.0/test_coverage)

Secure online banking application. Easy to use, efficient, fast.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this application, you will need to have the latest versions of the following software installed on your system

* [NPM](https://www.npmjs.com/)
* [Node](https://nodejs.org)
* [Git](https://git-scm.com/)

### Running the app locally

Follow the steps below to get the development environment running locally

1. Clone the repo to your local machine

- On your local computer, open your terminal and navigate to the directory you want the repo to reside in
- Run the following command to clone the repo to your machine
```
    git clone https://github.com/codeBlock-1984/Bankr-1.0.git
```
- Next, navigate into the project root directory and run the following command to install project dependencies
```
    npm install
```

- To start the development server run
```
    npm run dev
```

## Running the tests

To run the automated tests, navigate to the project root directory and run the following command in your terminal
```
    npm test
```

## Built With

The following core packages where used in building this application

* [ReactJS](https://https://reactjs.org/) - A Javascript library for building component-based user-friendly frontend applications
* [Redux](https://redux.js.org/) - A state management tool for javascript applications
* [Express](https://expressjs.com/) - The web framework used
* [Babel](https://babeljs.io/) - Javascript transpiler

## Core features

**Users**

There are three types of users, namely: client, staff, and admin.

- **Client** - A normal user, with basic access and privileges
- **Staff** - A cashier. Has more more privileges than normal user
- **Admin** - The system administrator. Has superuser privileges

The main features of this application with respect to the various users are listed below.

#### A Client can do the following:

- Sign up with the application  
- Sign in with already created user account details
- View user dashboard
- View his accounts 
- View his transactions
 

#### A Staff can do the following:

- View staff dashboard
- View all accounts
- View all transactions


## Related links

* [User Interface](https://bankr-1.herokuapp.com/) - The hosted application can be accessed here

## Author

* **Emmanuel Ihemegbulam**


## License

This project is licensed under the MIT License