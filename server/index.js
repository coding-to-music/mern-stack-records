import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

// const app = express();

// // app.use(bodyParser.json({ limit: '30mb', extended: true }));
// // app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use(express.json({ limit: '30mb', extended: true }));
// app.use(express.urlencoded({ limit: '30mb', extended: true }));

// const CONNECTION_URL = process.env.ATLAS_URI;
// const CONNECT_OPTIONS = {
// 	useNewUrlParser: true,
// 	useCreateIndex: true,
// 	useUnifiedTopology: true,
// };
// const PORT = process.env.PORT || 5000;

// mongoose
// 	.connect(CONNECTION_URL, CONNECT_OPTIONS)
// 	.then(() =>
// 		app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
// 	)
// 	.catch((error) => console.log(error));

// mongoose.set('useFindAndModify', false);

const path = require("path");
const port = process.env.PORT || 4000;

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;

// app.use(express.static(path.join(__dirname, 'client/build')));

mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

// server
app.listen(port, () => {
  // console.log(`Listening on port ${PORT}`);
  console.log(`💥 Application is listening on port http://localhost:${port}`);
});

app.use(cors());

app.use("/posts", postRoutes);
