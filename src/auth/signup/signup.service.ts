import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

const registerUser = async (payload: Record<string, unknown>) => {
  const { name, email, phone, password, role } = payload;

  const hash = await bcrypt.hash(password as string, 10);
  const result = await pool.query(
    `INSERT INTO users(name,email,password,phone,role) VALUES($1,$2,$3,$4,$5) RETURNING *`,
    [name, email, hash, phone, role]
  );
  return result;
};

export const signupServices = {
  registerUser,
};
