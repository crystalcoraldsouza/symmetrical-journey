import { Router } from "express";
import { getData } from "../controllers/api.controller";

const router = Router();

router.get("/data", getData);

export default router;
