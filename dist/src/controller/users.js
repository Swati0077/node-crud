"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = void 0;
const user_1 = require("../models/user");
const fs_1 = __importDefault(require("fs"));
//Array for storing data 
const Users = [];
//Data stored on server side in JSON file
fs_1.default.readFile('./data.json', (err, data) => {
    if (err) {
        console.log(err.message);
    }
    else {
        const Data = JSON.parse(data.toString());
        for (let i = 0; i < Data.length; i++) {
            Users.push(Data[i]);
        }
    }
});
// Get request to fetch data
exports.getUser = (req, res, next) => {
    res.render('table', { data: Users });
};
//Updating user
exports.updateUser = (req, res, next) => {
    const userID = req.params.id;
    const userIndex = Users.findIndex(user => user.id === userID);
    if (userIndex < 0) {
        throw new Error("Could not find user!!");
    }
    const updated_firstName = (req.body.firstName === undefined) ? Users[userIndex].firstname : req.body.firstName;
    const updated_middleName = (req.body.middleName === undefined) ? Users[userIndex].middlename : req.body.middleName;
    const updated_lastName = (req.body.lastName === undefined) ? Users[userIndex].lastname : req.body.lastName;
    const updated_email = (req.body.email === undefined) ? Users[userIndex].email : req.body.email;
    const updated_phoneNumber = (req.body.phoneNumber === undefined) ? Users[userIndex].phone_number : req.body.phoneNumber;
    const updated_role = (req.body.role === undefined) ? Users[userIndex].role : req.body.role;
    const updated_address = (req.body.address === undefined) ? Users[userIndex].address : req.body.address;
    console.log(updated_middleName);
    console.log(updated_lastName);
    console.log(updated_phoneNumber);
    Users[userIndex] = new user_1.User(Users[userIndex].id, updated_firstName, updated_middleName, updated_lastName, updated_email, updated_phoneNumber, updated_role, updated_address);
    res.json({ message: "updated", updatedUser: Users[userIndex] });
};
exports.deleteUser = (req, res, next) => {
    console.log("function called");
    const userID = req.params.id;
    console.log(userID);
    const userIndex = Users.findIndex(user => user.id === userID);
    if (userIndex < 0) {
        throw new Error("could not find user!");
    }
    Users.splice(userIndex, 1);
    res.json({ message: "User Deleted !" });
};
