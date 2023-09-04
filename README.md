## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Mock-Up

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)

## Getting Started

This Challenge will require a video submission. Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, and the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) to interact with the user via the command line.

**Important**: You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. In upcoming lessons, you will learn how to better secure this password, or you can start researching npm packages now that could help you.

You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

As the image illustrates, your schema should contain the following three tables:

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Deliverables: 10%

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

    * Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

* Follows the table schema outlined in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to a walkthrough video.

### Application Quality 10%

* The application user experience is intuitive and easy to navigate.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

you'll want to create schema and seeds
check for bonus and required

INQUIRER QUESTIONS
#1. What would you like to do?
view all employees
    - shows whole table
BONUS: view all employees by department
    -which department would you like to see employees for?
BONUS: view all employees by manager
add employee 
    -first name
    -last name
    -role
    -manager
BONUS: remove employee 
    -which employee
update employee role
    -which employee
    -what's their new role
BONUS: update employee manager
    -which employee
    -who's the new manager
view all roles
add role
BONUS: remove role
view all departments
add department
BONUS: remove department
BONUS: view total utilized budget by department
quit

Okay based on what you have currently
<!-- First Step
See if you can install the following libraries asciiart-logo and inquirer. -->
Second Step
You want to create a connection to you MySQL database. So think about you will have to setup a connection.js file in your db folder that will have the configurations to create a connection with your MySQL database. For this step refer to your previous Mini Activity on the Movie Database to see how did you a connection there
Third Step
Double Check that your Table Schemas are correct and then Create the database
Fourth Step
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
 )
}


function addEmployee() {
    // all your code in here
}

function removeEmployee() {
    // all your code in here
}

Trying using the Projects as reference
• 07 INS CRUD-Insert/db
• 08 STU CRUD Insert
• 09 INS CRUD Delete/db
• Mini Project