import { Router } from "express";
import { checkWinController, rollDice, updateAmountController } from "../controllers/dice.controller.js";

const router = Router();

router.route("/roll-dice").get(rollDice)
router.route("/check-win").post(checkWinController)
router.route("/update-amount").post(updateAmountController)


export default router;