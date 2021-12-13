// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
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
        choices: [
            'GNU General Public License v3.0', 
            'GNU GPLv3', 
            'ISC', 
            'Mozilla Public License 2.0', 
            'Apache License 2.0', 
            'MIT License', 
            'Boost Software License 1.0', 
            'The Unlicense'
        ],
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
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Provide instructions on how a user may be able to connect with you should they have any questions.',
        name: 'questions'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const promptUser = () => {
    // return inquirer.prompt(questions);
}

// TODO: Create a function to initialize app
function init() {
    // inquirer
    //     .prompt(
    //         questions
    //     )
    //     .then((answers) => {
    //         writeToFile('README.md', answers);
    //     });
};

// Function call to initialize app
init();
