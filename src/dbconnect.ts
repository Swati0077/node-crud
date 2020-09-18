// For connecting with database
import { Client } from "pg"

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Users',
    password: '123',
    port: 5432,
});

client.connect().then(()=>console.log('connnect'));
export default client;