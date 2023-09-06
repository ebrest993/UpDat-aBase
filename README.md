WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

all roles
job title, role id, the department that role belongs to, and the salary for that role

all employees
formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

add a role
name, salary, and department for the role
that role is added to the database

add an employee
first name, last name, role, and manager
that employee is added to the database

update employee role
select both an employee to update and their new role
this information is updated in the database 



currently where you have console.info("- - - - - Role updated! - - - - -") you'll need to do another query that actually updates the changed employee info to the DB, but this will get you on the right track to the part you mentioned with getting the employee list to show


In your index.js file, this is where most of the CRUD methods will be done related to Loading and displaying the prompts. So you will have to make use on the inquirer library that you installed early on.
So think of how you need to create CRUD functions for the role, employee and departments.
Then you will have a main function that will be dedicated loading the user prompts and based on what the user communcates to the prompt it will call one of the CRUD functions you’ve defined
For Example, something like this
function loadMainPrompts() {
 prompt([
  {
   type: "list",
   name: "choice",
   message: "What would you like to do?",
   choices: [
    {
     name: "Add Employee",
     value: "ADD_EMPLOYEE"
    },
    {
     name: "Remove Employee",
     value: "REMOVE_EMPLOYEE"
    },
    {
     name: "Quit",
     value: "QUIT"
    }
   ]
  }
 ]).then(res => {
  let choice = res.choice;
  switch (choice)
   case "ADD_EMPLOYEE":
    addEmployee();
    break;
   case "REMOVE_EMPLOYEE":
    removeEmployee();
    break;
   default:
    quit();
  }
 }

function addEmployee() {
    // all your code in here
}

function removeEmployee() {
    // all your code in here
}


# Employee Tracker #


## Table of Contents ##
1. [Description](./README.md#description)
2. [Installation](./README.md#installation)
3. [Usage](./README.md#usage)
4. [Contributing](./README.md#contributing)
5. 
6. [Test](./README.md#test)
7. [Contact](./README.md#contact)

## Description ##
    
This project makes quick work of an SQL database to view, add, or edit employees, their roles within your company, and their individual salaries.
    
##############

## Installation ##

Upon cloning, run 'npm install' followed by the following: inquirer@8.2.4 nodemon, mysql, mysql2, 

#############

## Usage ##

To run the application, enter 'node server.js' into the terminal at the root of the project

#############

## Contributing ##

If developers wish to request access for contribution, the repository can be found at this link: 

https://github.com/ebrest993/UpDat-aBase

##############

## Contact ##

For any questions or to contact the developer directly:

email: elliott.brest@gmail.com

GitHub: https://github.com/ebrest993 