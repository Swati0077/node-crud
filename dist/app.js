"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.set("view engine", "ejs");
app.set("views", "src/views");
//console.log(path.join(__dirname , "../" , "public"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../", "public")));
app.use('/user', users_1.default);
app.use('/', (req, res, next) => {
    res.render('table', { data: [] });
});
//For handling error 
/*app.use((err:Error ,req:Request,res:Response,next:NextFunction)=>{
res.status(500).json({message:err.message});
});*/
app.listen(3000);
