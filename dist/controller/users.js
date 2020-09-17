"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = void 0;
const user_1 = require("../models/user");
//Array for storing data 
let Users = [];
//Data stored on server side in JSON file
/*fs.readFile('./data.json',(err,data)=>
{
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        const Data=JSON.parse(data.toString());
        for(let i=0;i<Data.length;i++)
        {
            Users.push(Data[i]);
        }
    }
});
*/
// Get request to fetch data
exports.getUser = (req, res, next) => {
    user_1.User.allData(function (data) {
        Users = data;
        res.json(Users);
    });
    //res.render('table', {data: Users});
};
//Updating user
exports.updateUser = (req, res, next) => {
    const userID = req.params.id;
    console.log(Users[0].id);
    console.log(userID);
    const userIndex = Users.findIndex(user => user.id == userID);
    if (userIndex < 0) {
        throw new Error("Could not find user!!");
    }
    const updated_firstName = (req.body.firstname === undefined) ? Users[userIndex].firstname : req.body.firstname;
    const updated_middleName = (req.body.middlename === undefined) ? Users[userIndex].middlename : req.body.middlename;
    const updated_lastName = (req.body.lastname === undefined) ? Users[userIndex].lastname : req.body.lastname;
    const updated_email = (req.body.email === undefined) ? Users[userIndex].email : req.body.email;
    const updated_phoneNumber = (req.body.phonenumber === undefined) ? Users[userIndex].phone_number : req.body.phonenumber;
    const updated_role = (req.body.role === undefined) ? Users[userIndex].role : req.body.role;
    const updated_address = (req.body.address === undefined) ? Users[userIndex].address : req.body.address;
    Users[userIndex] = new user_1.User(Users[userIndex].id, updated_firstName, updated_middleName, updated_lastName, updated_email, updated_phoneNumber, updated_role, updated_address);
    res.json(Users[userIndex]);
};
exports.deleteUser = (req, res, next) => {
    console.log("function called");
    const userID = req.params.id;
    console.log(typeof userID);
    console.log(typeof Users[0].id);
    const userIndex = Users.findIndex(item => item.id == userID);
    if (userIndex < 0) {
        throw new Error("could not find user!");
    }
    Users.splice(userIndex, 1);
    res.json({ message: "User Deleted !" });
};
