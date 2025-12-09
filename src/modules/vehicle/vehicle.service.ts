import { pool } from "../../config/db";

const createVehicle = async (payload: Record<string, unknown>) => {
  const {
    vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status,
  } = payload;

  const result = await pool.query(
    `
    INSERT INTO vehicles(vehicle_name,type, registration_number, daily_rent_price,availability_status) VALUES($1,$2,$3,$4,$5) RETURNING *
    `,
    [
      vehicle_name,
      type,
      registration_number,
      daily_rent_price,
      availability_status,
    ]
  );
  return result;
};

const getVehicle = async () => {
  const result = await pool.query(`SELECT * FROM vehicles`);
  return result;
};
const singleVehicle = async (id: string) => {
  const result = await pool.query(`SELECT * FROM vehicles WHERE id = $1`, [id]);
  return result;
};
const updateVehicle = async (payload: Record<string, unknown>, id: string) => {
  const { name, email } = payload;
  const result = await pool.query(
    `UPDATE vehicles SET name=$1,email=$2 WHERE id=$3 RETURNING *`,
    [name, email, id]
  );
  return result;
};
const deleteVehicle = async (id: string) => {
  const result = await pool.query(`DELETE FROM vehicles WHERE id=$1`, [id]);
  return result;
};

export const vehicleServices = {
  createVehicle,
  getVehicle,
  singleVehicle,
  updateVehicle,
  deleteVehicle,
};
