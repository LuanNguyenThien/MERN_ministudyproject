const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./Services/ConnectDBService.js');
const userRouter = require('./Router/UserRoute.js');
const authRouter = require('./Router/AuthRoute.js');


require('dotenv').config();
//middleware apply for all request 
app.use(cors());

//middleware for parsing json data
app.use(express.json());

//connect database
connectDB();

//middleware routes
app.use('/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(process.env.PORT, function () {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});