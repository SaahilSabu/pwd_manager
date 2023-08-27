import "dotenv/config";

export const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
export const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

export const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || "localhost";
