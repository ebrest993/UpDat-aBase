DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
  id            INT         AUTO_INCREMENT,
  name          VARCHAR(30),  
  PRIMARY KEY(id)
);

CREATE TABLE roles (
  id            INT         AUTO_INCREMENT,
  title         VARCHAR(30),
  salary        DECIMAL,
  department_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (department_id) REFERENCES department(id)
); 

CREATE TABLE employee (
  id            INT         AUTO_INCREMENT,
  first_name    VARCHAR(30),
  last_name     VARCHAR(30),
  role_id       INT,
  manager_id    INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES roles(id)
);
