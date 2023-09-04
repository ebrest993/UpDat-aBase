const express = require('express');
const inquirer = require('inquirer');

const apiRoutes = require('./routes');

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
    }])
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
    inquirer.prompt([
        {
            name:"test2",
            type: "list",
            message:"Did it work?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ])
}

const addEmployee = () => {
    console.log('you made it to add');
}


const updateRole = () => {
    console.log('you made it to update');
}


const viewRoles = () => {
    console.log('you made it to view roles');
}


const addRole = () => {
    console.log('you made it to add role');
}


const viewDepartments = () => {
    console.log('you made it to view dept');
}
    
const addDepartment = () => {
    console.log('you made it to add dept');
}
