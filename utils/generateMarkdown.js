// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-red)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `[${license}](https://img.shields.io/static/v1?label=license&message=${license}&color=red)`
    )
  }
  return ''
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      
      Made under the ${license} license}.`

    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Desciption

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.tests}


## Questions

  For any questions, reach me at ${data.email} or [${data.github}](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;