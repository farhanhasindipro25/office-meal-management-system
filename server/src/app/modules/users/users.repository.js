const postUserToDB = `
  INSERT INTO users (user_name, employee_id, email, phone, gender, password, role_id)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING id, user_name, employee_id, email, phone, gender, role_id, is_banned, created_at, updated_at
`;

const getUsersFromDB = `
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
    users.role_id = roles.id
WHERE 
    ($1::text IS NULL OR users.user_name = $1)
AND 
    ($2::boolean IS NULL OR users.is_banned = $2)
AND 
    ($3::text IS NULL OR roles.name = $3)
AND 
    ($4::text IS NULL OR users.gender = $4)
ORDER BY 
    users.id
LIMIT 
    $5
OFFSET 
    $6;
`;

const getUserByIdFromDB = `
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
    users.role_id = roles.id
WHERE 
    users.id = $1;
`;

const patchUserInDB = `
UPDATE users SET
    user_name = $1,
    employee_id = $2,
    email = $3,
    phone = $4,
    gender = $5,
    role_id = $6,
    updated_at = NOW()
WHERE id = $7 RETURNING *
`;

const banUserInDB = `
UPDATE users SET
    is_banned = $1,
    updated_at = NOW() 
WHERE id = $2 RETURNING *
`;

const checkEmailExists = "SELECT * FROM users WHERE email=($1)";

export const UsersRepository = {
  postUserToDB,
  getUsersFromDB,
  getUserByIdFromDB,
  patchUserInDB,
  banUserInDB,
  checkEmailExists,
};
