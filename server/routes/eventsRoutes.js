import express from "express"
import multer from "multer"
// import controllers
import {createEvent,getEvent,deleteEvent,updateEvent} from "../controllers/eventsController.js"
const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });
router.route("/createEvent").post(createEvent)
router.route("/getEvent").get(getEvent);
router.route("/deleteEvent/:id").delete(deleteEvent);
router.route("/updateEvent/:id").put(updateEvent);
export default router;