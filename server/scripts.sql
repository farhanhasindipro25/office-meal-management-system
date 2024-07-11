CREATE DATABASE officemealmanagement

CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO roles (name) VALUES ('ADMIN'),('GENERAL_USER');
SELECT * FROM roles;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    employee_id VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    gender VARCHAR(10),
    password_hashed VARCHAR(255) NOT NULL,
    role_id UUID NOT NULL REFERENCES roles(id),
    is_banned BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (user_name, employee_id, email, phone, gender, password_hashed, role_id, is_banned)
VALUES 
('Farhan', 'E12345', 'farhan@example.com', '1234567890', 'Male', 'hashed_password_1', 'aaa887c5-ce72-4097-bae9-537ffde5474e', FALSE),
('Hasin', 'E12346', 'hasin@example.com', '1234567890', 'Male', 'hashed_password_2', 'aaa887c5-ce72-4097-bae9-537ffde5474e', FALSE),
('Farhan', 'E12347', 'dipro@example.com', '1234567890', 'Male', 'hashed_password_3', '273c0329-7d15-49ac-86e0-6cf81c45d1f1', FALSE);

-- Selecting all users with role names
SELECT 
    users.id,
    users.user_name,
    users.employee_id,
    users.email,
    users.phone,
    users.gender,
    users.password_hashed,
    roles.name AS role_name,
    users.is_banned,
    users.created_at,
    users.updated_at
FROM 
    users
INNER JOIN 
    roles
ON 
    users.role_id = roles.id;

