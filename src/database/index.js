import mongoose from "mongoose"

const connectToDB = async () => {
  const url =
    "mongodb+srv://namoanishtharu:nzhnDZq4zAqF4XHv@cluster0.vund5.mongodb.net/"

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e))
}

export default connectToDB
