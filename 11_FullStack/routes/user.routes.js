import express, { Router } from "express"
import { registerUser } from "../controller/user.controllers.js"

const router=express.Router()

router.get("/register",registerUser)

export default router