const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require('console.table');

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
},
]);

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'blackcat_db',
  password: '@!Pw*L#cc66DCpMgE6er@Nsp'
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
    }
    console.log("Hello World, welcome to the Black Cat Inventory Management System!");
    start();
    });

function start() {
  inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add a employee",
        "Update and employee role"
      ]
    },
  ]).then(function(answer) {
      switch (answer.action) {
          case "View all departments":
            viewAllDepartment();
              break;
              case "View all roles":  
              viewRoles();
              break;
              case "View all employees":
                viewEmployees();
                break;
                case "Add a department":
                  addDepartment();
                  break; 
                  case "Add a role":  
                  addRole();
                  break; 
                  case "Add a employee":
                    addEmployee();
                    break;
                  case "update and employee role":
                    updateEmployeeRole();
                    break;  
      }
    });
  }
function viewAllDepartment() {
  let query = "SELECT * FROM department";
  connection.query(query, function(err, res) {
    if(err) return err;
    console.log("\n");
    console.log(res);
    start();

  });
}

function viewRoles() {
  let query = "SELECT * FROM role";
  connection.query(query, function(err, res) {
    if(err) return err;
    console.log("\n");
    console.log(res);
    start();

  });
}
function viewEmployees() {
  let query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if(err) return err;
    console.log("\n");
    console.log(res);
    start();

  });
}

function addDepartment(){
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the department?"
    }
  ]).then(function(answer) {
    let query = "INSERT INTO department (name) VALUES (?)";
    connection.query(query, [answer.name], function(err, res) {
      if(err) return err;
      console.log("\n");
      console.log(res);
    });
} );
}

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the role?"
    },
    {   type: "input",      
        name: "salary",
        message: "What is the salary of the role?",
  },
  {
    type: "input",
    name: "department_id",
    message: "What is the department id of the role?"
  }
]).then(function(answer) {
  let query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
  connection.query(query, [answer.title, answer.salary, answer.department_id], function(err, res) {
    if(err) return err;
    console.log("\n");
    console.log(res);
  });       
});
}
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the employee?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee?"
},
{
  type: "input",
  name: "role_id",
  message: "What is the role id of the employee?"
},
{
  type: "input",
  name: "manager_id",
  message: "What is the manager id of the employee?"
}
]).then(function(answer) {
  let query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
  connection.query(query, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function(err, res) {
    if (err) return err;
    console.log("\n");
    console.log(res);
});
});
}
function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "employee_id",
      message: "What is the employee id of the employee?"
    },
    {
      type: "input",
      name: "role_id",
      message: "What is the role id of the employee?"
}
]).then(function(answer) {
  let query = "UPDATE employee SET role_id = ? WHERE id = ?";
  connection.query(query, [answer.role_id, answer.employee_id], function(err, res) {
    if (err) return err;
    console.log("\n");
    console.log(res);
});
});
}
