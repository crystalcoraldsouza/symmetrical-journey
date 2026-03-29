import axios from "axios";
import { config } from "../config/env";
import { ALPHA_VANTAGE_FUNCTIONS } from "../config/constants";
import mockSymbols from "../mockData/mockSymbols";

export const fetchSymbolSearchData = async (keyword: string) => {
  try {
    if (config.mockData) {
      const mockData = mockSymbols;
      return mockData;
    } else {
      const response = await axios.get(config.alphaVantage.baseUrl, {
        params: {
          function: ALPHA_VANTAGE_FUNCTIONS.SYMBOL_SEARCH,
          keywords: keyword,
          apikey: config.alphaVantage.apiKey,
        },
      });
      return response.data;
    }
  } catch (error) {
    throw new Error("Failed to fetch external API");
  }
};
