import { pool } from "../../config/db";

const createVehicle = async (payload: Record<string, unknown>) => {
  const {
    user_id,
    vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status,
  } = payload;

  const result = await pool.query(
    `
    INSERT INTO vehicles(user_id,vehicle_name,type, registration_number, daily_rent_price,availability_status,) VALUES($1,$2,$3,$4,$5,$6) RETURNING *
    `,
    [
      user_id,
      vehicle_name,
      type,
      registration_number,
      daily_rent_price,
      availability_status,
    ]
  );
  return result;
};

export const vehicleServices = {
  createVehicle,
};
