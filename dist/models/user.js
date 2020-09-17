"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const dbconnect_1 = __importDefault(require("../dbconnect"));
class User {
    constructor(id, firstname, middlename, lastname, email, phone_number, role, address) {
        this.id = id;
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.email = email;
        this.phone_number = phone_number;
        this.role = role;
        this.address = address;
    }
    static allData(callback) {
        dbconnect_1.default.query('SELECT * from users', (err, res) => {
            if (err) {
                console.error(err.message);
            }
            else {
                //callback(res); 
                callback(res.rows);
            }
        });
    }
}
exports.User = User;
