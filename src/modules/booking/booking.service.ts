import { pool } from "../../config/db";

const createBooking = async (payload: Record<string, unknown>) => {
  const { customer_id, vehicle_id, rent_start_date, rent_end_date, status } = payload;
  const bookingResult = await pool.query(
    `
    INSERT INTO bookings (
      customer_id,
      vehicle_id,
      rent_start_date,
      rent_end_date,
      total_price,
      status
    )
    SELECT
      $1,
      $2,
      $3,
      $4,
      ($4::date - $3::date) * daily_rent_price,
      $5
    FROM vehicles
    WHERE id = $2
    RETURNING *;
    `,
    [customer_id, vehicle_id, rent_start_date, rent_end_date, status]
  );

  const booking = bookingResult.rows[0];

  const vehicleResult = await pool.query(
    `SELECT vehicle_name, daily_rent_price FROM vehicles WHERE id = $1`,
    [vehicle_id]
  );

  booking.vehicle = vehicleResult.rows[0];

  return booking;
};


const getBooking = async () => {
  const result = await pool.query(`SELECT * FROM bookings, users, vehicles`);
  return result;
};

export const bookingServices = {
  createBooking,
  getBooking,
};
