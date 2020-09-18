"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// for configuring routes
const express_1 = require("express");
//import {getUser} from '../controller/users'
const users_1 = require("../controller/users");
const router = express_1.Router();
//router.post('/');
router.get('/', users_1.getUser);
router.patch('/edit/:id', users_1.updateUser);
router.delete('/delete/:id', users_1.deleteUser);
exports.default = router;
