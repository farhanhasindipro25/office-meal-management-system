CREATE DATABASE office_meal_management

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
    password VARCHAR(255) NOT NULL,
    role_id UUID NOT NULL REFERENCES roles(id),
    is_banned BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (user_name, employee_id, email, phone, gender, password, role_id, is_banned)
VALUES ('Farhan', 'E12345', 'farhan@example.com', '1234567890', 'Male', 'password_1', '9405c271-dff9-4bd9-8824-150a582dc59f', FALSE),
('Hasin', 'E12346', 'hasin@example.com', '1234567890', 'Male', 'password_2', '8e36330f-967c-4268-81e9-a86e65eca4e1', FALSE),
('Dipro', 'E12347', 'dipro@example.com', '1234567890', 'Male', 'password_3', '8e36330f-967c-4268-81e9-a86e65eca4e1', TRUE);

-- Selecting all users with role names
SELECT 
    users.id,
    users.user_name,
    users.employee_id,
    users.email,
    users.phone,
    users.gender,
    users.password,
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


INSERT INTO items (category_id, name) VALUES ('932a4a90-4cfe-40f9-a52a-7f32dcae8ba3','Plain Rice'),('932a4a90-4cfe-40f9-a52a-7f32dcae8ba3','Roti'),('497a3890-011e-415d-abf5-597a267d8010','Begun Bhaji'),('497a3890-011e-415d-abf5-597a267d8010','Daal'),('497a3890-011e-415d-abf5-597a267d8010','Potato Bhorta'),('497a3890-011e-415d-abf5-597a267d8010','Tomato Bhorta'),('e0d74414-fb0d-4805-a87d-0d38329565b4','Fish Curry'),('e0d74414-fb0d-4805-a87d-0d38329565b4','Chicken Curry'),('e0d74414-fb0d-4805-a87d-0d38329565b4','Egg Curry'),('e0d74414-fb0d-4805-a87d-0d38329565b4','Egg Bhorta');

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


CREATE TABLE weekly_schedules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  working_day INTEGER,
  current_month INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO weekly_schedules (working_day, current_month) VALUES (1, EXTRACT(MONTH FROM CURRENT_DATE)), (2, EXTRACT(MONTH FROM CURRENT_DATE)),(3, EXTRACT(MONTH FROM CURRENT_DATE)),(4, EXTRACT(MONTH FROM CURRENT_DATE)),(5, EXTRACT(MONTH FROM CURRENT_DATE));

CREATE TABLE meals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  schedule_id UUID NOT NULL REFERENCES weekly_schedules(id),
  item_id UUID [] NOT NULL REFERENCES items(id)
);

INSERT INTO scheduled_meals (schedule_id, item_id) VALUES ('259d803e-a2c4-48e0-a529-3bdd2bf62444', 'f5d2248e-e2c8-4c64-ab5f-254de3947745'),('259d803e-a2c4-48e0-a529-3bdd2bf62444', '348c3a1b-13c9-41cf-8913-2dc1d1f1f7ee'),('259d803e-a2c4-48e0-a529-3bdd2bf62444', '2f692da0-41b7-4422-b8fa-9b9440567c62');

-- Selecting scheduled meal items available per day
SELECT weekly_schedules.id, weekly_schedules.working_day, weekly_schedules.current_month, STRING_AGG(items.name,',') AS item_name
FROM weekly_schedules
INNER JOIN scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
INNER JOIN items ON scheduled_meals.item_id = items.id
GROUP BY weekly_schedules.id;


CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    meal_id UUID REFERENCES weekly_schedules(id),
    user_id UUID REFERENCES users(id),
    date VARCHAR(255) NOT NULL,
    month INTEGER,
    wants_meal BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO orders (user_id, wants_meal, meal_id, date, month) VALUES ('8f92dd1b-eb26-4432-8b20-3f4c14813d89',TRUE, '259d803e-a2c4-48e0-a529-3bdd2bf62444','Sunday',EXTRACT(MONTH FROM CURRENT_DATE));
-- INSERT INTO orders (user_id, wants_meal, date, month) VALUES ('8f92dd1b-eb26-4432-8b20-3f4c14813d89',FALSE, 'Monday',EXTRACT(MONTH FROM CURRENT_DATE));

-- INSERT INTO orders (user_id,wants_meal, meal_id, date, month) VALUES ($1,$2,$3,$4,EXTRACT(MONTH FROM CURRENT_DATE))

-- Selecting user orders with meal names
SELECT
      orders.id AS order_id,
      orders.user_id,
      orders.wants_meal,
      orders.meal_id,
      orders.date,
      STRING_AGG(items.name, ', ') AS item_names
  FROM
      orders
  LEFT JOIN
      weekly_schedules ON orders.meal_id = weekly_schedules.id
  LEFT JOIN
      scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
  LEFT JOIN
      items ON scheduled_meals.item_id = items.id
  WHERE
      orders.user_id = $1
  GROUP BY
      orders.id,
      orders.user_id,
      orders.wants_meal,
      orders.meal_id,
      orders.date
  ORDER BY
      orders.date;


-- Selecting all orders with meal names
SELECT
    users.id AS user_id,
    users.user_name,
    roles.name AS role_name,
    orders.id AS order_id,
    orders.date,
    orders.wants_meal,
    STRING_AGG(items.name, ', ') AS item_names
FROM
    users
INNER JOIN
    roles ON users.role_id = roles.id
LEFT JOIN
    orders ON orders.user_id = users.id
LEFT JOIN
    weekly_schedules ON orders.meal_id = weekly_schedules.id
LEFT JOIN
    scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
LEFT JOIN
    items ON scheduled_meals.item_id = items.id
WHERE
    roles.name = 'GENERAL_USER'
GROUP BY
    users.id,
    users.user_name,
    roles.name,
    orders.id,
    orders.date,
    orders.wants_meal
ORDER BY
    users.user_name,
    orders.date;



SELECT 
    weekly_schedules.id AS schedule_id,
    weekly_schedules.working_day,
    weekly_schedules.current_month,
    items.name AS item_name
FROM 
    weekly_schedules
LEFT JOIN 
    scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
LEFT JOIN 
    items ON scheduled_meals.item_id = items.id
WHERE
    weekly_schedules.id = 'your_schedule_id_here';