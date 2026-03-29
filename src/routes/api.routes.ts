import { Router } from "express";
import {
  sanityCheck,
  getSymbolSearchData,
} from "../controllers/api.controller";

const router = Router();
router.get("/", sanityCheck);

router.get("/symbol-search", getSymbolSearchData);

export default router;
