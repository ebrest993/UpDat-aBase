INSERT INTO department (name)
VALUE   ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUE   ('Sales Lead', '100000', 1),
        ('Salesperson', '80000', 1),
        ('Lead Engineer', '150000', 2),
        ('Software Engineer', '120000', 2),
        ('Account Manager', '160000', 3),
        ('Accountant', '125000', 3),
        ('Legal Team Lead', '250000', 4),
        ('Lawyer', '190000', 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE  ('John', 'Doe', 6, 6),
       ('Mike', 'Chan', 5, NULL),
       ('Ashley', 'Rodriguez', 1, 7),
       ('Kevin', 'Tupik', 7, 6),
       ('Kunal', 'Singh', 4, 4),
       ('Malia', 'Brown', 2, NULL),
       ('Sarah', 'Lourd', 3, 8),
       ('Tom', 'Allen', 8, 1);


