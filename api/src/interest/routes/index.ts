import { Interest } from "../controller/index.js";
import { Router } from "express";

const router = Router();
router.post("/", Interest.postInterest);
export { router };
