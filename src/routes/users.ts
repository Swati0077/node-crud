// for configuring routes
import {Router} from 'express';
//import {getUser} from '../controller/users'
import {getUser,updateUser,deleteUser} from '../controller/users'


const router=Router();
//router.post('/');

router.get('/',getUser);

router.patch('/edit/:id',updateUser);
 
router.delete('/delete/:id',deleteUser);


export default router;
