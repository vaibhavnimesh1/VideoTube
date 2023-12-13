import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() =>
    app.use(() => {
      app.listen(process.env.PORT || 8000, () => {
        console.log("server is running at port : ${process.env.PORT || 8000}");
      });
    })
  )
  .catch((err) => console.log("mongo connnection failed " + err));
