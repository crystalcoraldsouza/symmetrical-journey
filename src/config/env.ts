import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  alphaVantage: {
    apiKey: process.env.ALPHA_VANTAGE_API_KEY || "",
    baseUrl: process.env.ALPHA_VANTAGE_BASE_URL || "",
  },
  mockData: process.env.MOCK_DATA === "true",
};
