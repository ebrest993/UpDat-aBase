const express = require('express');
const inquirer = require('inquirer');

const apiRoutes = require('./routes');
const { mysql } = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

require('./config/connection');
// require('./config/connection').mysql();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

app.use('*', (req, res) => {
        res.status(404).end();
    });
    
    app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

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
                "Add Department"
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
    })
    
    const viewEmployees = () => {
        console.info('D I S P L A Y   T A B L E   H E R E');
        trackEmployee();
    }
    
    const addEmployee = () => {
        inquirer.prompt([
            {
                name:"add_first_name",
                type:"input",
                message:"What is the employee's first name?"
            },
            {
                name:"add_second_name",
                type:"input",
                message:"What is the employee's last name?"
            }
        ])
        .then(() => {
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
        trackEmployee();
    }
    
    
    const addRole = () => {
        inquirer.prompt([
            {
                name:"add_role",
                type:"input",
                message:"What is the name of the new role?"
            },
        ])
        .then(() => {
            console.info("- - - - - New role added! - - - - -")
        })
        .then(() => {
            trackEmployee();
        });    
    }
    
    const viewDepartments = () => {
        console.log('D I S P L A Y   T A B L E   H E R E')
        trackEmployee();
    };
        
    const addDepartment = () => {
        inquirer.prompt([
            {
                name:"add_department",
                type:"input",
                message:"What is the name of the new department?"
            },
        ])
        .then(() => {
            console.info("- - - - - New department added! - - - - -")
        })
        .then(() => {
            trackEmployee();
        })
    }
}


// trackEmployee();

