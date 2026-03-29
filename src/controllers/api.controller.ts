import { Request, Response } from "express";
import { fetchExternalData } from "../services/external.service";

export const getData = async (req: Request, res: Response) => {
  try {
    const data = await fetchExternalData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};
