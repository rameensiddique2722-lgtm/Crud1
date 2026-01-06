import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/useRoute.js";
dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());



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
