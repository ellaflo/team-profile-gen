
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const path = require('path');
const fs = require('fs');

// rest of your code here


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./lib/htmlRender');
const path = require('path');


// Empty array to store team members
const teamMembers = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'id',
      },
      {
        type: 'input',
        message: "What is the team manager's email address?",
        name: 'email',
      },
      {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'officeNumber',
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      buildTeam();
    });
}

    function createEngineer() {
        inquirer
          .prompt([
            {
              type: 'input',
              message: "What is the engineer's name?",
              name: 'name',
            },
            {
              type: 'input',
              message: "What is the engineer's employee ID?",
              name: 'id',
            },
            {
              type: 'input',
              message: "What is the engineer's email address?",
              name: 'email',
            },
            {
              type: 'input',
              message: "What is the engineer's GitHub username?",
              name: 'github',
            },
          ])
          .then((answers) => {
            const engineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.github
            );
            teamMembers.push(engineer);
            buildTeam();
          });
      }
      

    function createIntern() {
        inquirer
          .prompt([
            {
              type: 'input',
              message: "What is the intern's name?",
              name: 'name',
            },
            {
              type: 'input',
              message: "What is the intern's employee ID?",
              name: 'id',
            },
            {
              type: 'input',
              message: "What is the intern's email address?",
              name: 'email',
            },
            {
              type: 'input',
              message: "What is the intern's school?",
              name: 'school',
            },
          ])
          .then((answers) => {
            const intern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.school
            );
            teamMembers.push(intern);
            buildTeam();
          });
      }

function buildTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'memberType',
        choices: ['Engineer', 'Intern', 'Finish building the team'],
      },
    ])
    .then((answers) => {
      switch (answers.memberType) {
        case 'Engineer':
          createEngineer();
          break;
        case 'Intern':
          createIntern();
          break;
        case 'Finish building the team':
            const html = render(teamMembers);
          fs.writeFile(outputPath, html, (err) =>
            err ? console.error(err) : console.log('Successfully generated team.html!')
          );
          break;
      }
    });
}

createManager();
