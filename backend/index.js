import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const app = express() 
app.use(express.json()); //built-in middleware to make sure that server except json requests
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// // This is the endpoint that the frontend is calling for the popular causes. fill it with a dictionary that has an array of causes. cause1, cause2, etc..
// app.get('/api/popular-causes', (req, res) => {
//   // res.header("Access-Control-Allow-Origin", "*");
//   res.send({
//     "causes": [
//       {
//         "id": 1,
//         "name": "Cause 1"
//       },
//       {
//         "id": 2,
//         "name": "Cause 2"
//       },
//       {
//         "id": 3,
//         "name": "Cause 3"
//       }
//     ]
//   })
// })


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
