import express from 'express';

import { getUsers} from './userController.js';

const router = express.Router();

router.get('/', getUsers);

export default router;