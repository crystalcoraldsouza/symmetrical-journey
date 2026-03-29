import axios from "axios";
import { config } from "../config/env";

export const fetchExternalData = async () => {
  try {
    const response = await axios.get(config.apiUrl);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch external API");
  }
};
