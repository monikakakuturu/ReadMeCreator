var inquirer = require("inquirer");
var fs = require("fs");
var markdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project?",
  },
  {
    type: "input",
    name: "installInstructions",
    message: "What is the project installation instructions?",
  },
  {
    type: "input",
    name: "usageInfo",
    message: "What is the project usage information?",
  },
  {
    type: "input",
    name: "contribGuide",
    message: "What is the project contribution guidelines?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "What is the project test instructions?",
  },
  {
    type: "list",
    message: "What is the license type for the application?",
    name: "license",
    choices: ["PublicDomain", "Permissive", "LGPL", "CopyLeft", "Proprietary"],
  },
  {
    type: "input",
    name: "githubUser",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdown.generateMarkdown(data), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully created the README.md file!");
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", data);
  });
}

// function call to initialize program
init();
