import express from "express";
import { getAllUsers, register, getUserDetails } from "../controllers/user.js";

const router = express.Router();

// Display all user
router.get("/all", getAllUsers);

// create new user
router.post("/new", register);

// Detail of user Based in ID
router.get("/userid/:id", getUserDetails);

/**
 * 
 * if we have to use same route for different   methods i.e,   (get,post,delete....)
 
Then we will do like this : 

router.get("/userid/:id", getUserDetails);
router.put("/userid/:id", updateUserDetails);
router.delete("/userid/:id", deleteUserDetails);


But Instead of this we can do(if router is same) :

router
.route("/userid/:id")
.get(getUserDetails)
.put(updateUserDetails)
.delete(deleteUserDetails);

 */

export default router;
