USE company;

CREATE TABLE directory (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    manager_id VARCHAR(30) NOT NULL
    
);

INSERT INTO directory (first_name, last_name, department, title, salary, manager_id)
VALUES
('Jane', 'Doe', 'Administrations', 'Front Desk', '80.000', 'Becky Apples'),
('John','Doe','Sales','Salesperson','80.000','Becky Apples'),
('Jackie','Daytona','Legal','Lawyer','200.000','Self'),
('Jennifer','Peters','Engineering','Lead Engineer','160.000','Self'),
('Peter','Parker','Engineering','Engineer','120.000','Jennifer Peters');

SELECT * From directory;

DELETE FROM directory
WHERE ID=10;