import { Router } from "express";
import { verifyJWT } from "../middlewere.js/auth.middlewere.js";
import {
  createMeeting,
  deleteMeeting,
  getMeetings,
  updateMeeting,
} from "../controller/meeting.controller.js";

const router = Router();

router.route("/create-meeting").post(verifyJWT, createMeeting);
router.route("/get-All").get(verifyJWT, getMeetings);
router.route("/:id").put(verifyJWT, updateMeeting);
router.route("./delete-meeting").delete(verifyJWT, deleteMeeting);

export default router