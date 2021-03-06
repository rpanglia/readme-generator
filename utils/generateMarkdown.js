// Fununction that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![${license}](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  } else {
    return ``;
  };
};

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](#license)`
  } else {
    return ``;
  };
};

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## This product is licensed under the: ${license}.`
  } else {
    return ``;
  };
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Decription
  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contibution](#contribution)
  - [Tests](#test)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  ${data.submitQuestions}
  Email: ${data.email}
  GitHub: https://github.com/${data.userName}

  ${renderLicenseSection(data.license)}
`;
};

module.exports = generateMarkdown;