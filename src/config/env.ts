import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  apiUrl: process.env.THIRD_PARTY_API || "",
};
