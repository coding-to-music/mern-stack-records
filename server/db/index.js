import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// useCreateIndex: true,
// useFindAndModify: false,

const CONNECT_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(MONGODB_URI, CONNECT_OPTIONS)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
