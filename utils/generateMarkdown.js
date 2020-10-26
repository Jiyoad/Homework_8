// function to generate markdown for README
function generateMarkdown(data) {
  return `
[github.com/${data.github}](github.com/${data.github})
# Title
${data.title}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
# Description
${data.description}
# User Name
${data.username}
# Email
${data.email}
# Installation
${data.install}
# Usage
${data.usage}
# Contributing
${data.contributions}
# Tests
${data.test}
# License(s)
${data.license}
`;
}

module.exports = generateMarkdown;
