import { Router } from "express"
import * as userServices from "./services/user.services.js"
import * as validators from "./user.validation.js"
import { validation } from "../../middleware/validation.middleware.js"
const router=Router()


export default router