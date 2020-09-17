"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
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
}
exports.User = User;
