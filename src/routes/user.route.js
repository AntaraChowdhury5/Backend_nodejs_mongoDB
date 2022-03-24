import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { adminAuth } from '../middlewares/auth.middleware';
import { setRole } from '../middlewares/auth.middleware'

const router = express.Router();

/* //register for user
router.post('/registrationUser',newUserValidator,setRole('user'),userController.registration) */

//register for admin
router.post('/registrationAdmin',newUserValidator,setRole('admin'),userController.registration)

//login
router.post("/login", userController.login);

//route to get all users
router.get('', userAuth ,userController.getAllUsers);

//route to create a new user
router.post('', adminAuth,newUserValidator,userController.newUser);

//route to get a single user by their user id
router.get('/:_id', userController.getUser);

//route to update a single user by their user id
router.put('/:_id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/:_id', userController.deleteUser);

export default router;
