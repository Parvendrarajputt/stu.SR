import express from "express"
import { createUser, deleteUser, getAllUser, getUserByID, updateUser, } from "../Controller/Controller.js";


const router = express.Router();
router.post('/users', createUser);
router.get ('/allUsers',getAllUser)
router.get('/users/:RollNumber', getUserByID)
router.delete('/users/:RollNumber', deleteUser);
router.put('/users/:RollNumber', updateUser);


export {router} ;