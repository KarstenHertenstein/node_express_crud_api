import express from 'express';

import { createUser, getUser, login } from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);
router.post('/login', login);
router.get('/:id', getUser);

export default router;