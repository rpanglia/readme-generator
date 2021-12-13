// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title? ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is this project used for?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select a license for this project.',
        name: 'license',
        choices: [] //ADD LIST OF LICENSES HERE
    },
    {
        type: 'input',
        message: 'Contributions',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
