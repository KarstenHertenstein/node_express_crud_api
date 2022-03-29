import express from 'express';

import { /* getUsers, */ createUser, getUser, deleteUser, updateUser, login } from '../controllers/users.js';

const router = express.Router();

//router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', login);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;