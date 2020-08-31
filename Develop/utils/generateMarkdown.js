// function to generate markdown for README
function generateMarkdown(data) {
  // Chage the badge and the notice information based on the selected license type
  var licenseBadge =
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  var licenseNotice = `Copyright 2020 Monika Kakuturu
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

  return `# ${data.title}
  ${licenseBadge}
  ## Table of Contents
  1. [ Description. ](#desc)
  2. [ Installation. ](#instal)
  3. [ Usage. ](#usage)
  4. [ License. ](#license)
  5. [ Contributing. ](#contrib)
  6. [ Tests. ](#tests)
  7. [ Questions. ](#ques)

<a name="desc"></a>
## 1. Description

${data.description}

<a name="instal"></a>
## 2. Installation

${data.installInstructions}

<a name="usage"></a>
## 3. Usage

${data.usageInfo}

<a name="license"></a>
## 4. License

${data.license}
${licenseNotice}

<a name="contrib"></a>
## 5. Contributing

${data.contribGuide}

<a name="tests"></a>
## 6. Tests

${data.testInstructions}

<a name="ques"></a>
## 7. Questions

Github Profile: [a link](github.com/${data.githubUser})
If you have any additional questions, please reach me at \"${data.email}\"
`;
}

module.exports = {
  generateMarkdown: generateMarkdown,
};
