const express = require('express');
const app = express();
const connectDB = require('./Services/ConnectDBService.js');
const userRouter = require('./Router/UserRoute.js');

const port = 5000;

//connect database
connectDB();

//middleware routes
app.use('/user', userRouter);

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});