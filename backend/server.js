const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../backend/config/db");


dotenv.config();
const app = express();
// app.use(async (ctx, next) => {
//     ctx.response.set("Access-Control-Allow-Origin", "http://localhost:3000");
//     ctx.response.set(
//       "Access-Control-Allow-Methods",
//       "GET, POST, OPTIONS, PUT, DELETE"
//     );
//     ctx.response.set("Access-Control-Allow-Methods", "*");
//     await next();
//   });

app.use('/todo', require('./routes/TodoRoute'));

connectDB()
app.use(express.json());
app.get('/', (req,res) => {
    res.send("API is Running");
})



const PORT = process.env.PORT || 5000;
app.listen(5000, console.log('Server started port ' + PORT));


