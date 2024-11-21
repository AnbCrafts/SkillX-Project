import { Router } from "express";
import { registerNewUser,loginExistingUser } from "../Controllers/userController.controllers.js";


const UserRoute = Router();

UserRoute.post('/register',registerNewUser);
UserRoute.post('/login',loginExistingUser);

export default UserRoute;