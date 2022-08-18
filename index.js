
const fs = require('fs');
const Engineer = require ('./Roles/Engineer.js');
const Manager = require ('./Roles/Manager.js');
const Intern = require ('./Roles/Intern.js');
const inquirer = require("inquirer");
const path = require ('path');
const OUTPUT_DIR = path.resolve(__dirname);
const outputPath = path.join(OUTPUT_DIR, "index.html");   
const generateTeam = require("./sources/generatePage.js")


classArray = [];

function runApp () {
// member choices

function createClass () {
  inquirer.prompt([{
   type:"list",
   message: "What type of member are you adding to the team?",
   name:"addMember",
   choices:["Manager", "Intern","Engineer","No more members needed."]
  }]).then(function (classInput) {
  switch (classInput.addMember) {
  case "Intern":
        addIntern();
   break;
   case "Manager":
           addManager();
   break;
   case "Engineer":
          addEngineer();
   break;
   default:
    html();
      }
  })
}


// Functions/ questioneer

function addIntern() {
    inquirer.prompt([
    
      {
        type: "input",
        name: "Name",
        message: "Intern's name?"
      },

      {
        type: "input",
        name: "Id",
        message: "Intern's employee ID number?" 
      },

      {
        type: "input",
        name: "Email",
        message: "Intern's email address?"
      },

      {
        type: "input",
        name: "School",
        message: "School attened name?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.Name, answers.Id, answers.Email, answers.School);
      classArray.push(intern);
      createClass();
    });
  }

  function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "Name",
        message: "Manager's name?"
      },

      {
        type: "input",
        name: "Id",
        message: "Manager's employee ID number?"
      },

      {
        type: "input",
        name: "Email",
        message: "Manager's email address?"
      },

      {
        type: "input",
        name: "OfficeNumber",
        message: "Manager's office number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.Name, answers.Id, answers.Email, answers.OfficeNumber);
      classArray.push(manager);
      createClass();
    });
  }
  
function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "Name",
        message: "Engineer's name?"
      },

      {
        type: "input",
        name: "Id",
        message: "Employee ID number?" 
      },

      {
        type: "input",
        name: "Email",
        message: "Engineer's email address?"
      },
      
      {
        type: "input",
        name: "Github",
        message: "Engineer's GitHub username?"
      }

    ]).then(answers => {

      const engineer = new Engineer(answers.Name, answers.Id, answers.Email, answers.Github);
      classArray.push(engineer);
      createClass();
    });
  }

  function html () {
    console.log ('Well done! Your Team is Created :)')
    fs.writeFileSync (outputPath, generateTeam (classArray), "UTF-8")
  
  }
createClass();
}
runApp();
  




