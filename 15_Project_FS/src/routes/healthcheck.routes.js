import {Router} from "epxress"
import { healthCheck } from "../controllers/healthcheck.controllers.js"

const router =Router()

router.route("/").get(healthCheck)

export default router
