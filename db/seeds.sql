INSERT INTO department (name)
VALUE   ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO roles (title, salary)
VALUE   ('Sales Lead', '100000'),
        ('Salesperson', '80000'),
        ('Lead Engineer', '150000'),
        ('Software Engineer', '120000'),
        ('Account Manager', '160000'),
        ('Accountant', '125000'),
        ('Legal Team Lead', '250000'),
        ('Lawyer', '190000');

INSERT INTO employee (first_name, last_name)
VALUE  ('John', 'Doe'),
       ('Mike', 'Chan'),
       ('Ashley', 'Rodriguez'),
       ('Kevin', 'Tupik'),
       ('Kunal', 'Singh'),
       ('Malia', 'Brown'),
       ('Sarah', 'Lourd'),
       ('Tom', 'Allen');


-- INSERT INTO department (id, name)
-- VALUE   (1, 'Sales'),
--         (2, 'Engineering'),
--         (3, 'Finance'),
--         (4, 'Legal');

-- INSERT INTO roles (id, title, salary, department_id)
-- VALUE   (1, 'Sales Lead', '100000', 1),
--         (2, 'Salesperson', '80000', 1),
--         (3, 'Lead Engineer', '150000', 2),
--         (4, 'Software Engineer', '120000', 2),
--         (5, 'Account Manager', '160000', 3),
--         (6, 'Accountant', '125000', 3),
--         (7, 'Legal Team Lead', '250000', 4),
--         (8, 'Lawyer', '190000', 4);

-- INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
-- VALUE  (1, 'John', 'Doe', 1, 0),
--        (2, 'Mike', 'Chan', 2, 0),
--        (3, 'Ashley', 'Rodriguez', 3, 0),
--        (4, 'Kevin', 'Tupik', 4, 0),
--        (5, 'Kunal', 'Singh', 5, 0),
--        (6, 'Malia', 'Brown', 6, 0),
--        (7, 'Sarah', 'Lourd', 7, 0),
--        (8, 'Tom', 'Allen', 8, 0);
