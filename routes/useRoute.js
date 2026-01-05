import express from "express";
import { getAllUsers, create,update, deleteuser, signup, login } from "../controller/useController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", getAllUsers);
route.put("/update/:id",update);
route.delete("/deleteuser/:id",deleteuser);
route.post("/signup",signup);
route.post("/login",login);
export default route;
