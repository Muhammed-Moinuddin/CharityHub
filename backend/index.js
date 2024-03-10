import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { apiRouter } from "./routes/api/apiRoutes.js";
import { userRouter } from "./routes/user/userRoutes.js";

dotenv.config();
const app = express() 
app.use(express.json()); //built-in middleware to make sure that server except json requests
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/", apiRouter);
app.use("/", userRouter);

//To connect to mongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
  () => {
    console.log("App is connected now")
    {//Server will only run if mongoDB is connected
    app.listen(process.env.PORT, () => {
        console.log(`You server is running at port ${process.env.PORT}`)
    })}
  }
).catch(
  (err) => {
    console.log(err);
  }
)
