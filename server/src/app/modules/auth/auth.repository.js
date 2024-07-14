const FIND_USER = `
SELECT 
  users.id, 
  users.user_name, 
  users.employee_id, 
  users.password,
  users.email, 
  users.phone, 
  users.gender, 
  users.role_id, 
  users.is_banned, 
  roles.name as role_name 
FROM 
  users
INNER JOIN 
  roles ON users.role_id = roles.id
WHERE users.email=($1)
`;

export const AuthRepository = {
  FIND_USER,
};
