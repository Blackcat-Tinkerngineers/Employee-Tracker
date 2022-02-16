const dotenv = require('dotenv').config()
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "@!Pw*L#cc66DCpMgE6er@Nsp",
  database: "blackcat_db"
});
 // beginning of terminal app start

console.table([
  { Employee_ID: '100',
    FirstName: 'Cassie',
    LastName: 'Cooper',
    Role_ID: '100',
    Role: 'Lead Engineer',
    Department_ID: '101',
    Department_Name: 'Engineering',
    Salary: '$160,000',
    Manager_ID: 'Null',
  },
  { Employee_ID: '103',
    FirstName: 'Paxton',
    LastName: 'Lee',
    Role_ID: '103',
    Role: 'Engineer',
    Department_ID: '101',
    Department_Name: 'Engineering',
    Salary: '$140,000',
    Manager_ID: '100 (Cassie Cooper)',
  },
  { 
    Employee_ID: '204',
    FirstName: 'Stephen',
    LastName: 'Roe',
    Role_ID: '204',
    Role: 'Front Desk Greeter',
    Department_ID: '202',
    Department_Name: 'Administration',
    Salary: '$100,000',
    Manager_ID: '200 (Daniel Fargus)',
},
{
  Employee_ID: '200',
  FirstName: 'Daniel',
  LastName: 'Fargus',
  Role_ID: '200',
  Role: 'Front Desk Manager',
  Department_ID: '202',
  Department_Name: 'Administration',
  Salary: '$160,000',
  Manager_ID: 'Null',
},
{
  Employee_ID: '300',
  FirstName: 'Cherry',
  LastName: 'von Howztubskin',
  Role_ID: '300',
  Role: 'HR Manager',  
  Department_ID: '303',
  Department_Name: 'Human Resources',
  Salary: '$160,000',
  Manager_ID: 'Null',
},
{
  Employee_ID: '400',
  FirstName: 'Jackie',
  LastName: 'Dayton',
  Role_ID: '400',
  Role: 'Social Media Coordinator',
  Department_ID: '404',
  Department_Name: 'Social Media Team',
  Salary: '$170,000',
  Manager_ID:'Null',
},
{
  Employee_ID: '402',
  FirstName: 'Nandilia',
  LastName: 'Billings',
  Role_ID: '402',
  Role: 'Social Media Host',
  Department_ID: '404',
  Department_Name: 'Social Media Team',
  Salary: '$120,000',
  Manager_ID: '400 (Jackie Dayton)', 
},
{ 
  Employee_ID: '500',
  FirstName: 'Jenny',
  LastName: 'Aruokay',
  Role_ID: '500',
  Role: 'Sales Manager',
  Department_ID: '505',
  Department_Name: 'Sales',
  Salary: '$170,000', 
  Manager_ID: 'Null',
}
]);

inquirer
  .prompt({
    type: "list",
    message: "What do you want to do?",
    name: "option",
    choices: ["add", "view", "remove"]
  })
  .then(function(answer) {
    console.log(answer);
    if (answer.option === "add") {
      inquirer
        .prompt({
          type: "list",
          message: "What would you like to add?",
          name: "option",
          choices: ["department", "role", "employee"]
        })
        .then(function(answer) {
            console.log(answer);

            // Adding department option
             if (answer.option === "department") {
              inquirer
                .prompt({
                  type: "input",
                  message: "What is the name of the department you want to add?",
                  name: "name"
                })
                .then(function(answer) {
                  console.log(answer);
                  connection.connect();
    
                  connection.query(
                    "INSERT INTO department SET ?",
                    { name: answer.name },
                    function(error, results) {
                      if (error) throw error;
                      console.log(results);
                    }
                  );
                });
            }

          // adding role option
          else if (answer.option === "role") {
            inquirer
              .prompt([{
                type: "input",
                message: "Please is the name of the role you want to add?",
                name: "title"
              },
              { 
                  type: "input",
                  message: "What is the salary for this position?",
                  name: "salary"
              },{
                type: "input",
                message: "Please enter the department ID for this role.",
                name: "department_id"
              }])
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "INSERT INTO role SET ?",
                  { title: answer.tile, salary: answer.salary, department_id: answer.department_id },
                  function(error, results) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
   
          }
          
          // Adding employee option
          else if (answer.option === "employee") {
            inquirer
              .prompt([
                  {
                type: "input",
                message: "What is the first name of the employee you want to add?",
                name: "first_name"
              },
                  {
                type: "input",
                message: "What is the last name of the employee you want to add?",
                name: "last_name"
              },
                  {
                type: "input",
                message: "Please enter an  ID number for this new employee.",
                name: "employee_id"
              },
                  {
                type: "input",
                message: "What is the manager's ID number of this employee?",
                name: "manager_id"
              }
            ])
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "INSERT INTO employee SET ?",
                  { first_name: answer.first_name, last_name: answer.last_name, employee_id: answer.employee_id, manager_id: answer.manager_id },
                  function(error, results) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
          }
        });
        // beginning of view option
    } else if (answer.option === "view") {
      inquirer
        .prompt({
          type: "list",
          message: "What do you want to VIEW?",
          name: "option",
          choices: ["department", "role", "employee"]
        })
        .then(function(answer) {
          console.log(answer);
        //   view departments
          if (answer.option === "department") {
            connection.query(
              "SELECT * FROM department",
              { name: answer.option },
              function(error, results) {
                if (error) throw error;
                console.log(results);
              }
            );
          }
          // view roles
          else if (answer.option === "role") {
            connection.query(
              "SELECT * FROM role",
              { name: answer.option },
              function(error, results) {
                if (error) throw error;
                console.log(results);
              }
            );
          }
          // view employees
          else if (answer.option === "employee") {
            connection.query(
              "SELECT * FROM employee",
              { name: answer.option },
              function(error, results) {
                if (error) throw error;
                console.log(results);
              }
            );
          }

        });
        // beginning of remove option 
    } else if (answer.option === "remove") {
      inquirer
        .prompt({
          type: "list",
          message: "Where do you want to remove from?",
          name: "option",
          choices: ["department", "role", "employee"]
        })
        .then(function(answer) {
          console.log(answer);
          // beginning of remove department
          if (answer.option === "department") {
            inquirer
              .prompt({
                type: "input",
                message: "What is the name of the department you want to remove?",
                name: "name"
              })
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "DELETE FROM department WHERE ?",
                  { name: answer.name },
                  function(error, results) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
          }
          // beginning of remove role
          else if (answer.option === "role") {
            inquirer
              .prompt({
                type: "input",
                message:
                  "What is the name of the role title you would like to remove?",
                name: "title"
              })
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "DELETE FROM role WHERE ?",
                  { title: answer.title },
                  function(error, results) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
          }
          // beginning of remove employee
          else if (answer.option === "employee") {
            inquirer
              .prompt({
                type: "input",
                message:"What is the employee ID number you would like to remove?",
                name: "employee_id"
              })
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "DELETE FROM employee WHERE ?",
                  { employee_id: answer.employee_id },
                  function(error, results) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
          }
        });
    }
  });