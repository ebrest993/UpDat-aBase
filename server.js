const express = require('express');
const inquirer = require('inquirer');

const apiRoutes = require('./routes');
// const { mysql } = require('./config/connection');

const app = express();

const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'abracadabra',
    database: 'tracker_db'
  },
  console.log(`Connected to the tracker_db database.`)
); 

const trackEmployee = () => {
    inquirer.prompt([
        {
            name:"choice",
            type:"list", 
            message:"What would you like to do?",
            choices: [ 
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
                "QUIT"
            ]
        }
    ])
    .then((answers) => {
        const { choice } = answers;
        if(choice === "View All Employees") {
            viewEmployees();
        }
        if(choice === "Add Employee"){
            addEmployee();
        }
        if(choice === "Update Employee Role"){
            updateEmployeeRole();
        }
        if(choice === "View All Roles"){
            viewRoles();
        }
        if(choice === "Add Role"){
            addRole();
        }
        if(choice === "View All Departments"){
            viewDepartments();
        }
        if(choice === "Add Department"){
            addDepartment();
        }
        if(choice === "QUIT"){
            quitInquirer();
        }
    })
    
    const viewEmployees = () => {
        console.info('D I S P L A Y   T A B L E   H E R E');
        db.query(
            `SELECT first_name, last_name FROM employee`,
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.info(result)
                trackEmployee();
        })
    }
    
    const addEmployee = () => {
        inquirer.prompt([
            {
                name:"addFirstName",
                type:"input",
                message:"What is the employee's first name?"
            },
            {
                name:"addLastName",
                type:"input",
                message:"What is the employee's last name?"
            },
        ])
        .then(({ addFirstName, addLastName }) => {  
            const newFirstName = addFirstName;
            const newLastName = addLastName; 
            db.query( 
                `INSERT INTO employee ( first_name, last_name ) VALUES ( '${newFirstName}', '${newLastName}' )`,
                (err, result) => {
                    if (err) { 
                        console.log(err);
                    } 
                    trackEmployee();
                })
            console.info("- - - - - New employee added! - - - - -")
        })
        .then(() => {
            trackEmployee();
        });
    }

    const updateEmployeeRole = () => {
        inquirer.prompt([
            {
                name:"update_role1",
                type: "list",
                message:"Which employee's role would you like to update?",
                choices: [
                    "employee1",
                    "employee2",
                    "employee3",
                    "employee4",
                    "employee5",
                    "employee6",
                    "employee7",
                    "employee8"
                ],
            },
            {
                name:"update_role2",
                type: "list",
                message:"Which role would you like to assign them?",
                choices: [
                    "Sales Lead",
                    "Salesperson",
                    "Lead Engineer",
                    "Software Engineer",
                    "Account Manager",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer"
                ],
            }
        ])
        .then(() => {
            console.info("- - - - - Role updated! - - - - -")
        })
        .then(() => {
            trackEmployee();
        });        
    }
        
    const viewRoles = () => {
        console.log('D I S P L A Y   T A B L E   H E R E');
        db.query(
            `SELECT title, salary FROM roles`,
            (err, result) => { 
                if (err) {
                    console.log(err);
                }
                console.info(result)
                trackEmployee();
            })
    }
    
    const addRole = () => {
        inquirer.prompt([
            {
                name:"title",
                type:"input",
                message:"What is the name of the new role?"
            },
            {
                name:"salary",
                type:"input",
                message:"What is the salary for this new role?"
            },
        ])
        .then(({ title, salary}) => { 
            const newTitle = title;
            const newSalary = salary;
            db.query( 
                `INSERT INTO roles ( title, salary ) VALUES ( '${newTitle}', ${newSalary} )`,
                (err, result) => {
                    if (err) {
                        console.log(err); 
                    }
                    trackEmployee();
                })    
            console.info("- - - - - New role added! - - - - -")
        })
        .then(() => { 
            trackEmployee();
        });    
    } 
    
    const viewDepartments = () => {
        console.log('D I S P L A Y   T A B L E   H E R E')
        db.query(
            `SELECT name FROM department`,
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.info(result)
                trackEmployee();
            })
    };
        
    const addDepartment = () => {
        inquirer.prompt([
            {
                name:"add_department",
                type:"input",
                message:"What is the name of the new department?"
            },
        ])
        .then((answer) => {
            console.info(answer) 
            console.info("- - - - - New department added! - - - - -")
        })
        .then(() => {
            db.query(
                `SELECT name FROM department`,
                (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    console.info(result)
                    trackEmployee();
                })
    
            trackEmployee();
        })
    }
    const quitInquirer = () => {
        return;
    }
}

trackEmployee();