const department= require("../lib/department");
const employee= require("../lib/employee");
const role = require("../lib/role");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const employeeTracker = [];

function addDepartment() {
    inquirer.prompt([
      {
        type: "input",
        name: "departmentName",
        message: "What department would you like to add?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
    }
    ]).then(answers => {
      const department = new department(answers.departmentName);
      employeeTracker.push(department);
    });
  }

  function addRole() {
    inquirer.prompt([
      {
        type: "input",
        name: "roleName",
        message: "What role would you like to add?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
        },
      {
        type: "input",
        name: "salaryAmount",
        message: "Please enter a salary for this role",
        validate: answer => {
            if (answer !== "") {
                return true;
              }
              return "Please enter a positive number greater than zero.";
            }
          },
      {
        type: "input",
        name: "departmentName",
        message: "What is the department name?",
        validate: answer => {
            if (answer !== "") {
            return true;
          }
          return "Please enter the department name";
        }
      }
    ]).then(answers => {
      const role= new Role(answers.roleName, answers.salaryAmount,answers.departmentName);
      employeeTracker.push(Role);
      createDirectory();
    });
  }

  
  function addEmployee() {
    inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
        },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
        validate: answer => {
            if (answer !== "") {
                return true;
              }
              return "Please enter a positive number greater than zero.";
            }
          },
      {
        type: "input",
        name: "managerName",
        message: "What is the name of this employees manager?",
        validate: answer => {
            if (answer !== "") {
            return true;
          }
          return "Please enter a manager name";
        }
      }
    ]).then(answers => {
      const employee= new Employee(answers.firstName, answers.lastName,answers.managerName);
      employeeTracker.push(Role);
      createDirectory();
    });
  }

  function buildDirectory() {
    // Create the output directory if the output path doesn't exist

    fs.writeFileSync('team_gen.html', render(employeeTracker, "utf-8"));
  }



