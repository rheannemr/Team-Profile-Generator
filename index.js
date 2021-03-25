const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs')
const path = require('path');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const render = require('./src/htmlRender');

const employeeTeamArr = []

function addEmployee() {

    inquirer.prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "If adding a new employee to the team, please select the role below. If not, please select the Continue option.",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Continue"
            ]
        }
    ]) .then((response) => {
        switch (response.newEmployee) {
            case "Manager":
                return addManager();
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            default:
                return generateTeam();
        }
    });
};

function addManager() {
    
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the Manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Manager's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Manager's email address:"
        },
        {
            type: "number",
            name: "officeNumber",
            message: "Enter the Manager's office number:"
        }
    ]) .then((response) => {
        const manager = new Manager ( 
            response.name,
            response.id,
            response.email,
            response.officeNumber
        );
        employeeTeamArr.push(manager);
        addEmployee();
    });

};

function addEngineer() {
    
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the Engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Engineer's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the Engineer's GitHub username:"
        }
    ]) .then((response) => {
        const engineer = new Engineer ( 
            response.name,
            response.id,
            response.email,
            response.github
        );
        employeeTeamArr.push(engineer);
        addEmployee();
    });

};

function addIntern() {
    
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the Intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Intern's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the Intern's school:"
        }
    ]) .then((response) => {
        const intern = new Intern ( 
            response.name,
            response.id,
            response.email,
            response.school
        );
        employeeTeamArr.push(intern);
        addEmployee();
    });

};

function generateTeam() {
    fs.writeFileSync(outputPath, render(employeeteamArr), 'utf-8');
};