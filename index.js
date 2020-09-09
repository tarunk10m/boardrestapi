const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const tasksRoute = require('./routes/tasks');
const PORT = process.env.PORT || 3000

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/tasks',tasksRoute);

//connection to mongodb atlas
mongoose.connect(
    process.env.MONGO_URL,
   {useNewUrlParser:true}
)

.then(() =>{
    console.log("connected to db");
}).catch(error => {
    console.log("Something unexpected happened", error)
})

app.listen(PORT, () => {
    console.log("server started at PORT", PORT);
})