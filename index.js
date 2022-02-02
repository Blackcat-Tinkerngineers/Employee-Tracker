const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "@!Pw*L#cc66DCpMgE6er@Nsp",
  database: "blackcat_db"
});
 // beginning of terminal app start

console.table([
  { DepartmentID: '101',
    DepartmentName: 'Engineering',
    FirstName: 'Cassie',
    LastName: 'Cooper',
    Role: 'Lead Engineer',
    RoleID: '100',
    Salary: '$160,000',
    ReportingManager: 'Null' 
  },
  { DepartmentID: '101',
    DepartmentName: 'Engineering',
    FirstName: 'Paxton',
    LastName: 'Lee',
    Role: 'Engineer',
    RoleID: '103',
    Salary: '$140,000',
    ReportingManager: 'Cassie Cooper',
  },
  { DepartmentID: '202',
    DepartmentName: 'Administration',
    FirstName: 'Stephen',
    LastName: 'Roe',
    Role: 'Front Desk Greeter',
    RoleID: '204',
    Salary: '$100,000',
    ReportingManager: 'Daniel Fargus',
},
{
  DepartmentID: '202',
  DepartmentName: 'Administration',
  FirstName: 'Daniel',
  LastName: 'Fargus',
  Role: 'Front Desk Manager',
  RoleID: '200',
  Salary: '$160,000',
  ReportingManager: 'Null',
},
{
  DepartmentID: '303',
  DepartmentName: 'Human Resources',
  FirstName: 'Cherry',
  LastName: 'von Howztubskin',
  Role: 'HR Manager',
  RoleID: '300',
  Salary: '$160,000',
  ReportingManager: 'Null',
},
{
  DepartmentID: '404',
  DepartmentName: 'Social Media Team',
  FirstName: 'Jackie',
  LastName: 'Dayton',
  Role: 'Social Media Coordinator',
  RoleID: '400',
  Salary: '$170,000',
  ReportingManager: 'Null',
},
{
  DepartmentID: '404',
  DepartmentName: 'Social Media Team',
  FirstName: 'Nandilia',
  LastName: 'Billings',
  Role: 'Social Media Host',
  RoleID: '402',
  Salary: '$120,000',
  ReportingManager: 'Jackie Dayton',  
},
{ 
  DepartmentID: '505',
  DepartmentName: 'Sales',
  FirstName: 'Jenny',
  LastName: 'Aruokay',
  Role: 'Sales Manager',
  RoleID: '500',
  Salary: '$170,000', 
  ReportingManager: 'Null',
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
          message: "What do you want to add?",
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
                  name: "option"
                })
                .then(function(answer) {
                  console.log(answer);
                  connection.connect();
    
                  connection.query(
                    "INSERT INTO department SET ?",
                    { name: answer.option },
                    function(error, results, fields) {
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
                message: "What is the title of the role you want to add?",
                name: "option"
              },{
                  type: "input",
                  message: "What is the salary for this position?",
                  name: "amount"
              },{
                type: "input",
                message: "What department does this role work in?",
                name: "departmentId"
              }])
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "INSERT INTO role SET ?",
                  { title: answer.option, salary: answer.amount, department_id: answer.departmentId },
                  function(error, results, fields) {
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
                name: "first"
              },
                  {
                type: "input",
                message: "What is the last name of the employee you want to add?",
                name: "last"
              },
                  {
                type: "input",
                message: "What role does this employee have?",
                name: "role"
              },
                  {
                type: "input",
                message: "Who is the manager of this employee?",
                name: "boss"
              }
            ])
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "INSERT INTO employee SET ?",
                  { first: answer.first, last: answer.last, role: answer.role, boss: answer.boss },
                  function(error, results, fields) {
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
              function(error, results, fields) {
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
              function(error, results, fields) {
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
              function(error, results, fields) {
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
                name: "option"
              })
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "DELETE FROM department WHERE ?",
                  { name: answer.option },
                  function(error, results, fields) {
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
                  "What is the title of the role you want to remove?",
                name: "option"
              })
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "DELETE FROM role WHERE ?",
                  { title: answer.option },
                  function(error, results, fields) {
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
                message:"What is the id name of the employee you want to remove?",
                name: "option"
              })
              .then(function(answer) {
                console.log(answer);
                connection.connect();

                connection.query(
                  "DELETE FROM employee WHERE ?",
                  { id: answer.option },
                  function(error, results, fields) {
                    if (error) throw error;
                    console.log(results);
                  }
                );
              });
          }
        });
    }
  });
