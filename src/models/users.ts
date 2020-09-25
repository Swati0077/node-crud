import client from "../dbconnect";

export class User{
    constructor(public id:string,public firstname:string ,public middlename:string ,public lastname:string , public email:string,public phonenumber:string,public role:string ,public address:string,public created_on:Date,public modified_on:Date)
    {

    }
    
      public static  allData(callback:any)
    {
        client.query('SELECT * from users', (err, res) => {
            if (err) {
              console.error(err.message)
            } else {
              //callback(res); 
             callback(res.rows)
            }
          })
    }
    public static  updateData(body:any, id:string)
    {

      let q = "UPDATE users SET firstname='"+ body.firstname +"', middlename='" + body.middlename  + "', lastname='"+body.lastname + "', email='"+body.email + "', phonenumber='"+body.phonenumber + "', role='"+body.role+ "', address='"+body.address+"', modified_on =  CURRENT_TIMESTAMP where id=" +id;

      client.query(q, (err, res) => {
            if (err) {
              console.error(err.message)
            }
          
          })
    }

    public static  deleteData(id:string)
    {
        client.query('delete from users where id=' +id, (err, res) => {
            if (err) {
              console.error(err.message)
            }
          })
    }

}
