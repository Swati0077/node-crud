import client from "../dbconnect";

export class User{
    constructor(public id:string,public firstname:string ,public middlename:string ,public lastname:string , public email:string,public phone_number:string,public role:string ,public address:string)
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

}
