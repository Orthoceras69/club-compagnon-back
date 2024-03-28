import express from 'express';
import usersController from '#src/controllers/usersController'
import authGard from '#src/middleware/authGard'
const router = express.Router();

router.get('/',authGard.protect,usersController.allUsers);
router.post('/',authGard.adminProtect,usersController.createUser);
router.put('/:id',authGard.adminProtect,usersController.updateUser);
router.delete('/:id',authGard.adminProtect,usersController.deleteUser);

export default router;