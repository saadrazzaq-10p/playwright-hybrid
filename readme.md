# Playwright Automation Framework

## Introduction
The Playwright Automation Framework is a comprehensive tool designed for automating web, API, and mobile testing. This README serves as a user manual guide to help you effectively utilize the framework for your testing requirements.

## Getting Started
### Installation
To install the Playwright Automation Framework, follow these steps:
1. Clone the repository from GitHub.
2. Install the required dependencies using `npm install`.

### Configuration
Customize the framework by adjusting the configuration files to match your testing environment and preferences.

## Environment Configuration

The `.env` file in the root directory contains configuration parameters for the framework. Before executing tests, ensure that the `.env` file is properly configured with the correct parameter values.

### Updating Parameter Values

1. Open the `.env` file located in the root directory of the project.
2. Update the parameter values with the appropriate credentials and URLs.
3. Save the changes to the `.env` file.

Example `.env` file:

```
USERNAME=username
PASS=password
BASE_API_URL=https://reqres.in/api
BASE_URL=https://www.saucedemo.com/
PERFORMANCE_URL=https://reqres.in 
```
## Framework Components
The framework comprises the following key components:

## Writing Test Cases
### Web Testing
Write web test cases using the Playwright and organize them into test classes.

### API Testing
Craft API test cases using the provided API testing classes within the framework.

### Mobile Testing
Create mobile test cases using the dedicated mobile testing classes provided by the framework.

## Running Test Cases
Execute test cases using the following commands:
- For web tests: `npm run test:web`
- For API tests: `npm run test:api`
- For mobile tests: `npm run test:mobile`

## Extending the Framework
Extend the functionality of the framework by:
- Adding new test cases.
- Creating additional page classes.
- Integrating other testing tools as needed.

## Conclusion
The Playwright Automation Framework offers a robust solution for automating various testing scenarios. By following the guidelines outlined in this user manual, you can efficiently develop and execute test cases for web, API, and mobile applications.
