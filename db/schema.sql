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
    employee_id INT,
	manager_id INT
);

INSERT INTO employee (id, first_name, last_name, employee_id, manager_id)
VALUES 
('101','Cassie', 'Cooper', '100', '100'),
('101','Paxton', 'Lee', '103', '100'),
('202','Stephen', 'Roe', '204', '200'),
('202','Daniel', 'Fargus', '200', '200'),
('303','Cherry', 'von Howztinski', '300', '300'),
('404','Jackie', 'Daytona', '400', '400'),
('404','Nandilia', 'Billings', '402', '400'),
('505','Jenny', 'Aruokay', '500', '500');


INSERT INTO department(id,name)
VALUES 
('101','Engineering'),
('202','Administrations'),
('303','Human Resources'),
('404','Social Media Team'),
('505','Sales');

INSERT INTO role(id,title,salary,department_id)
VALUES
('100','Lead Engineer','160000','101'),
('103','Software Engineer','140000','101'),
('204','Front Desk Greeter','100000','202'),
('200','Office Manager','160000','202'),
('300','HR Manager','160000','303'),
('400','Social Media Coordinator','170000','404'),
('402','Social Media Host','120000','404'),
('500','Sales Manager','170000','505');


SELECT * FROM role;
