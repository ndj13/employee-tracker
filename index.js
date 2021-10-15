const inquirer = require('inquirer');

const consoleTable = require('console.table')

const db = require('./db/connection');

const chalk = require('chalk');
const figlet = require('figlet');

function employeeList () {
    
}

function employeeListBD () {
    
}

function employeeListBM () {
    
}

function addEmployee () {
    
}

function removeEmployee () {
    
}
function updateRole () {
    
}

function viewDP () {
    
}
function viewRoles () {
    
}
function addnewDP () {
    
}
function addnewRole () {
    
}
function removeRole () {
    
}
function exitApp () {
    
}

function mainmenu() {
    inquirer
        .prompt({
            name: 'choice',
            type: 'list',
            message: 'Menu',
            choices: [
                    'View all Employees',
                    'View all Employees by Department',
                    'View all employees by Manager',
                    'Add Employee',
                    'Remove Employee',
                    'Update Employee Role',
                    'View all Departments',
                    'Add Department',
                    'View all Roles',
                    'Add Role',
                    'Remove Role',
                    'EXIT'
                    ]
            }).then(function (value) {
                switch (value.choice) {
                    case 'View all Employees':
                        employeeList();
                        break;
                    case 'View all Employees by Department':
                        employeeListBD();
                        break;
                    case 'View all Employees by Manager':
                        employeeListBM();
                        break;
                    case 'Add Employee':
                        addEmployee();
                        break;
                    case 'Remove Employee':
                        removeEmployee();
                        break;
                    case 'Update Employee Role':
                        updateRole();
                        break;
                    case 'View all Departments':
                        viewDP();
                        break;
                    case 'View all Roles':
                        viewRoles();
                        break;
                    case 'Add Department':
                        addnewDP();
                        break;
                    case 'Add Role':
                        addnewRole();
                        break;
                    case 'Remove Role':
                        removeRole();
                        break;
                    case 'EXIT': 
                        exitApp();
                        break;
                    default:
                        break;
                }
        })
};

//view all employees
function employeeList() {
    var query = 'SELECT * FROM employee';
    db.query(query, function(err, res) {
        if (err) throw err;
        console.log(res.length + ' employees found!');
        console.table('All Employees:', res); 
        mainmenu();
    })
};

mainmenu();