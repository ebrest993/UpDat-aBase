const express = require('express');
const inquirer = require('inquirer');

const apiRoutes = require('./routes');
const { mysql } = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

require('./config/connection').mysql();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use('/api', apiRoutes);

// app.use('*', (req, res) => {
    //     res.status(404).end();
    // });
    
    // app.listen(PORT, () => {
        //     console.log(`Server running on http://localhost:${PORT}`);
        // });
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
            updateRole();
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
        console.log("figure out how to display schema table");
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
    trackEmployee();
    }

    
    const updateRole = () => {
        inquirer.prompt([
            {
                name:"update_role",
                type: "list",
                message:"Which role would you like to update?",
                choices: [
                    "Sales Lead",
                    "Salesperson",
                    "Lead Engineer",
                    "Software Engineer",
                    "Account Manager",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer"
                ]
            }
        ])
        .then(() => {console.info('You need to come back and add all the stipulations of what comes next.');})
            trackEmployee();
        }
        
        
    const viewRoles = () => {
        console.log('find out how to display all the roles');
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
        .then(() => {console.info('You need to figure out how to add the new role to the table data')})
            trackEmployee();
    }
    
        const viewDepartments = () => {
            console.log('find out how to display the departments');
            trackEmployee();
        }
        
    const addDepartment = () => {
        inquirer.prompt([
            {
                name:"add_department",
                type:"input",
                message:"What is the name of the new department?"
            },
        ])
        .then(() => {
            console.info('You need to figure out how to add this to the table data')
            trackEmployee();
        })
    }
}


trackEmployee();

console.log(mysql.value);