const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../backend/config/db");
const TodoRoutes = require("./routes/TodoRoute");




dotenv.config();


const app = express();
app.use('/add',TodoRoutes);

connectDB()
app.use(express.json());
app.get('/', (req,res) => {
    res.send("API is Running");
})



const PORT = process.env.PORT || 5000;
app.listen(5000, console.log('Server started port ' + PORT));


