
import express,{Request,Response,NextFunction} from 'express';
import userRoutes from './routes/users';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors'


const app=express();
app.use(cors())

app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "src/views");
//console.log(path.join(__dirname , "../" , "public"));
app.use(express.static(path.join(__dirname , "../" , "public")));

app.use('/user',userRoutes);

app.use('/', (req,res,next) => {
    res.render('table', {data: [], path: "/"})
});

app.use((err:Error ,req:Request,res:Response,next:NextFunction)=>{
res.status(500).json({message:err.message});
});
app.listen(5000);







//while writing update command, don't write modified_on = req.body.modified_on, write modified_on = CURRENT DATE TIME;