import generateHTML from './src/generateHTML.js';
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js'; 
import fs from 'fs'; 
import inquirer from 'inquirer';


const team = []; 

const questions = [
    {
      type: 'list',
      name: 'role',
      message: 'Please choose a role for the employee you would like to add.',
      choices: ['Manager', 'Engineer', 'Intern', 'Im all done!']
    }
  ];
  
  const manager = [
    {
      type: 'input',
      name: 'name',
      message: "What is Manger's first name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?',
    },
    {
      type: 'number',
      name: 'office',
      message: 'What is their Office number?'
    }
  
  ];
  
  const engineer = [
    {
      type: 'input',
      name: 'name',
      message: "What is Engineer's first name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is their Github user name?'
    }
  
  ];
  
  const intern = [
    {
      type: 'input',
      name: 'name',
      message: "What is Intern's first name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school do they attend?'
    }
  ];
  
  function init() {
    inquirer.prompt(questions).then(answers => {
 
      if (answers.role === 'Im all done!') {
        console.log(team);
        generateTeam();
        return;
      }

      if (answers.role === 'Manager') {
        inquirer.prompt(manager).then(answers => {
          const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
          team.push(manager);
          init();
        })
      }
 
      if (answers.role === 'Engineer') {
        inquirer.prompt(engineer).then(answers => {
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          team.push(engineer);
          init();
        })
      }

      if (answers.role === 'Intern') {
        inquirer.prompt(intern).then(answers => {
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
          team.push(intern);
          init();
        })
      }
    })
  };

  init();
  
 
  function generateTeam() {
    fs.writeFileSync('./dist/index.html', generateHTML(team));
    console.log('Team created!')
  };
  