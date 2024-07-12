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


CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name, description)
VALUES 
('Starch', 'e.g. Rice, Bread'),
('Veg', 'e.g. Potato, Tomato, Eggplant'),
('Protein', 'e.g. Chicken, Beef, Egg, Fish');


CREATE TABLE items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID NOT NULL REFERENCES categories(id),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO items (category_id, name) VALUES ('17219629-3cd2-472a-9089-230718669dd3','Plain Rice'),('17219629-3cd2-472a-9089-230718669dd3','Roti'),('364ce12a-1319-4523-9a80-b5e3672801b1','Begun Bhaji'),('364ce12a-1319-4523-9a80-b5e3672801b1','Daal'),('364ce12a-1319-4523-9a80-b5e3672801b1','Potato Bhorta'),('364ce12a-1319-4523-9a80-b5e3672801b1','Tomato Bhorta'),('76c39085-f377-45c0-88cf-31c196e030b3','Fish Curry'),('76c39085-f377-45c0-88cf-31c196e030b3','Chicken Curry'),('76c39085-f377-45c0-88cf-31c196e030b3','Egg Curry'),('76c39085-f377-45c0-88cf-31c196e030b3','Egg Bhorta');

-- Selecting all items with category names
SELECT 
    items.id,
    items.name,
    categories.name AS category_name,
    items.created_at,
    items.updated_at
FROM 
    items
INNER JOIN 
    categories
ON 
    items.category_id = categories.id;


CREATE TABLE meals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  day INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO meals (day) VALUES (1),(2),(3),(4),(5);


CREATE TABLE meal_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meal_id UUID NOT NULL REFERENCES meals(id),
  item_id UUID NOT NULL REFERENCES items(id)
);

INSERT INTO meal_items (meal_id, item_id) VALUES ('f3b3a5ef-62b9-4fbb-a2d2-4588fc4d1044', 'ca36081a-b210-4668-872f-6c908ebfef05');

-- Selecting meal items available per day
SELECT meals.day AS work_day, STRING_AGG(items.name,',') AS item_name
FROM meals
INNER JOIN meal_items ON meals.id = meal_items.meal_id
INNER JOIN items ON meal_items.item_id = items.id
GROUP BY meals.day;


CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    meal_id UUID REFERENCES meals(id),
    wants_meal BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
