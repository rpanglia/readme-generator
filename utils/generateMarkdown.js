// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![${license}](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  } else {
    return `Not Licensed`;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](#license)`
  } else {
    return ``;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## This product is licensed under the ${license}.`
  } else {
    return ``;
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Decription
  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contibution](#contribution)
  [License]${renderLicenseLink(data.license)}(#license)
  [Tests](#test)
  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.test}

  ## Questions
  For any questions, you can reach me at:
  Email: ${data.email}
  GitHub: https://github.com/${data.userName}
  ${data.submitQuestions}
`;
}

module.exports = generateMarkdown;