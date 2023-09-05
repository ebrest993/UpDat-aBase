const express = require('express');
const inquirer = require('inquirer');

const apiRoutes = require('./routes');

const app = express();

const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'abracadabra',
    database: 'tracker_db'
  },
  console.log(`Connected to the tracker_db database.`),
  console.log(),
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
        db.query(
            `SELECT id, first_name, last_name, role_id FROM employee`,
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result) 
                // console.info({role_id})
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
                })
            console.info("- - - - - New employee added! - - - - -")
        })
        .then(() => {
            trackEmployee();
        });
    }

    const updateEmployeeRole = () => {
        console.log(names)
        inquirer.prompt([
            {
                name:"update_role1",
                type: "list",
                message:"Which employee's role would you like to update?",
                choices: [
                    db.query(
                        `SELECT * FROM employee`
                    )
                    // "employee1",
                    // "employee2",
                    // "employee3", 
                    // "employee4",
                    // "employee5",
                    // "employee6",
                    // "employee7",
                    // "employee8"
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
            `SELECT id, title, salary FROM roles`,
            (err, result) => { 
                if (err) {
                    console.log(err);
                }
                console.table(result)
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
                })    
            console.info("- - - - - New role added! - - - - -")
        })
        .then(() => { 
            trackEmployee();
        });    
    } 
    
    const viewDepartments = () => {
        db.query(
            `SELECT name FROM department`,
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result)
                trackEmployee(); 
            }
        ) 
    };
        
    const addDepartment = () => {
        inquirer.prompt([
            { 
                name:"add_department",
                type:"input", 
                message:"What is the name of the new department?"
            },
        ]) 
        .then((add_department) => {
            const newDept = add_department;
            console.info('Department name: ', newDept.add_department);
            db.query( 
                `INSERT INTO department ( name ) VALUES ( '${newDept.add_department}' )`,
                (err, result) => {
                    if (err) { 
                        console.log(err);
                    } 
                }
            )

            console.info("- - - - - New department added! - - - - -");
        })

        .then(() => {
            trackEmployee();
        })
    }

    const quitInquirer = () => {
        return;
    }

}

trackEmployee();