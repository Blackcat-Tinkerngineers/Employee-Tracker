CREATE DATABASE blackcat_db;
USE blackcat_db;

CREATE TABLE department (
    id INT,
    name VARCHAR(30)
);

CREATE TABLE role(
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee(
	id INT,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	role_id INT,
	manager_id INT NULL
);

DROP TABLE department;
