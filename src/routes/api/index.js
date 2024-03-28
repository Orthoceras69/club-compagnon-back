import express from 'express';
import ping from './ping.js';
import auth from './auth.js';
import users from './users.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.use('/ping', ping);
router.use('/auth', auth);
router.use('/users', users);

export default router;
