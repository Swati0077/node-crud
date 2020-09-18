
import express,{Request,Response,NextFunction} from 'express';
import userRoutes from './routes/users';
import bodyParser from 'body-parser';
import path from 'path';

const app=express();

app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "src/views");
//console.log(path.join(__dirname , "../" , "public"));
app.use(express.static(path.join(__dirname , "../" , "public")));

app.use('/user',userRoutes);

app.use('/', (req,res,next) => {
    res.render('table', {data: []})
});


//For handling error 
/*app.use((err:Error ,req:Request,res:Response,next:NextFunction)=>{
res.status(500).json({message:err.message});
});*/
app.listen(3000);

