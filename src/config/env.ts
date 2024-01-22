export const env = {
  ANALYZE: process.env.ANALYZE || "false",
  LOCALSERVER: process.env.LOCALSERVER || "http://localhost:3003",
  ENVIRONMENT: process.env.ENVIRONMENT || "development",
  DB_HOST: process.env.DB_HOST || "localhost",
  IS_ENV_FILE: process.env.DB_HOST ? "true" : "false",
};
