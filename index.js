import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/useRoute.js";
dotenv.config();
const app = express();

app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

app.use("/api/user", route);

mongoose.connect(MONGOURL)
  .then(() => {
    console.log("Database Connected.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
