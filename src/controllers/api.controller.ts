import { Request, Response } from "express";
import { fetchSymbolSearchData } from "../services/external.service";
export const sanityCheck = (req: Request, res: Response) => {
  res.json({ message: "API is working!" });
};

export const getSymbolSearchData = async (req: Request, res: Response) => {
  try {
    const data = await fetchSymbolSearchData(req.query.keyword as string);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};
