import app from './app';
import dotenv from 'dotenv'
dotenv.config();

const port = 7001;

app.listen(port, ()=>{
    console.log("Running on port ", port);
});