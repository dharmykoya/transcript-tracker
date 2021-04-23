import express from "express";
// import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

// app.use(cors)
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.send('hello there!!');
})

app.listen(4000, () => {
    console.log('listening on port 4000');    
})