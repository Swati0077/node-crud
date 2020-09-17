"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// For connecting with database
const pg_1 = require("pg");
const client = new pg_1.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Users',
    password: '123',
    port: 5432,
});
client.connect().then(() => console.log('connnect'));
exports.default = client;
