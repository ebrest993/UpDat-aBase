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
        name:"test",
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
            const { choices } = answers;
            if(choices === "View All Employees") {
                viewEmployees();
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