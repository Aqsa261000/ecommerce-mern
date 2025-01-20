const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database connection -> u can also
//create a separate file for this and then import/use that file here

mongoose
.connect(
    "mongodb+srv://aqsamehdiali26:AqsaMehdi2025@cluster0.8sttk.mongodb.net/"
)
    .then(()=>console.log('MongoDB connected'))
    .catch((error)=>console.log(error));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        //client will be run on this origin only
        origin:'http://localhost:5173/',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=>console.log(`Server is now running on PORT ${PORT}`))