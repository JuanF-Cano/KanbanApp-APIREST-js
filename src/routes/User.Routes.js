import { Router } from "express";
import { getUsers, createUser, login, deleteUser, actualizateUser, getUserById } from "../controllers/User.Controller.js";
import { validateUser ,validateEmail } from "../middleware/models.js";
import { authenticateToken } from "../middleware/jwt.js";

const userRouter = Router();

//login
userRouter.post("/login", validateEmail, login);

//register
userRouter.post('/user', validateUser, createUser);

//getUser
userRouter.get('/users', getUsers);

//getUserById
userRouter.get('/user/:id', authenticateToken, getUserById)

// Eliminar usuario por ID
userRouter.delete('/user/:id', authenticateToken, deleteUser);

// Actualizar usuario por ID
userRouter.put('/user/:id', authenticateToken, validateUser, actualizateUser);

export default userRouter;