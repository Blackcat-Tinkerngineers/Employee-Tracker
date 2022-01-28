const { Table } = require("console-table-printer");

//Create a table
const p = new Table({
  columns: [
    {
      name: "Employee ID",
      alignment: "center",
    },
    {color: "red"},
    {
      name: "First Name",
      alignment: "center",
    },
    {color: "red"},
    {
      name: "Last Name",
      alignment: "center",
    },
    {color: "red"},
    {
      name: "Department",
      alignment: "center",
    },
    {color: "red"},
    {
      name: "Job Job Title",
      alignment: "center"
    },
    {color: "red"},
    {
      name: "Salary",
      alignment: "center",
    },
    {color: "red"},
    {
      name: "Manager Name",
      alignment: "center",
    },
    {color: "red"},
  ],
});

//add rows with color
p.addRow(
  {
    "Employee ID": "1001",
    "First name": "Jane",
    "last name": "Doe",
    "Department": "Administrations",
    "Job Job Title": "Front desk receptionist",
    "Salary": "80.000",
    "Manager Name": "Betty White"
  },
  { color: "green" });
p.addRow(
  {
    "Employee ID": "2002",
    "first name": "Betty",
    "Last Name": "White",
    "Department": "Administrations",
    "Job Title": "Office Manager",
    "Salary": "120.000",
    "Manager": "Null"
  },
  { color: "green" });
p.addRow(
  {
    "Employee ID": "3003",
    "First Name": "Jackie",
    "Last Name": "Daytona",
    "Department": "Sales",
    "Job Title": "Sales Lead",
    "Salary": "120.000",
    "Manager": "Null"
  },
  { color: "green" });
p.addRow(
  {
    "Employee ID": "4004",
    "First Name": "Peter",
    "Last Name": "Daisy",
    "Department": "Engineering",
    "Job Title": "Lead Engineer",
    "Salary": "160.000",
    "Manager": "Null"
  },
  { color: "green" });
p.addRow(
  {
    "Employee ID": "505",
    "First Name": "Jennifer",
    "Last Name": "Davids",
    "Department": "Engineering",
    "Job Title": "Software Engineer",
    "Salary": "120.000",
    "Manager": "Peter Daisy"
  },
  { color: "green" });



//print
p.printTable();



