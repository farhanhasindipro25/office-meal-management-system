export const POST_USER_TO_DB =
  "INSERT INTO users (user_name, employee_id, email, phone, gender, password, role_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";

export const GET_USERS_FROM_DB = `
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
`;

export const PATCH_USER_IN_DB = `
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
