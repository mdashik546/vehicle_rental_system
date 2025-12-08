import { pool } from "../../config/db";

const getUser = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};
const singleUser = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return result;
};
const updateUser = async (payload: Record<string, unknown>, id: string) => {
  const { name, email, phone, role } = payload;
  const result = await pool.query(
    `UPDATE users SET name=COALESCE($1,name),email=COALESCE($2,email),phone=COALESCE($3,phone),role=COALESCE($4,role) WHERE id=$5 RETURNING *`,
    [name ?? null, email ?? null, phone ?? null, role ?? null, id]
  );
  return result;
};
const deleteUser = async (id: string) => {
  const result = await pool.query(`DELETE FROM users WHERE id=$1`, [id]);
  return result;
};

export const userServices = {
  getUser,
  singleUser,
  updateUser,
  deleteUser,
};
