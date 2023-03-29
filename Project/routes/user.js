import express from "express";
import { getAllInfo } from "../controller/user.js";

const router = express.Router();

router.get("/getAllInfo", getAllInfo);

export default router;
