// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for userData
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
        default: 'Not Licensed'
    },
    {
        type: 'input',
        message: 'Contributions: Are there any additional contributors? Or specific information related to contributing to this project that you would like to include? Please provide the appropriate information.',
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
        message: 'Provide instructions on how a user may connect with you, should they have any questions. Your email address and link to your GitHub page will automatically be included in this section.',
        name: 'submitQuestions'
    }
];


// Prompt question list that will be used to gather user data and later generate README
const promptUser = () => {
    return inquirer.prompt(questions);
};


// Function to write README file
const writeToFile = util.promisify(fs.writeFile);


// Function to initialize the app
async function init () {
    console.log('To begin generating your professional README file, please answer the following questions.');

    try {
        const userData = await promptUser();
        console.log(userData);

        const makeMarkdown = generateMarkdown(userData);

        await writeToFile("README.md", makeMarkdown)
        console.log('Congratulations! You have generated a professional README.md file for your project!')
        
    }
    catch(err) {
        console.log(err);
    }
};


// Function call to initialize app
init();
