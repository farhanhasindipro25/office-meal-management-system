const FIND_USER = "SELECT * FROM users WHERE email=($1)";

export const AuthRepository = {
  FIND_USER,
};
