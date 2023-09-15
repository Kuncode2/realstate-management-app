import mongoose from "mongoose";

const Connection = async (username , password) => {
  const URL = `mongodb://${username}:${password}@ac-946nldz-shard-00-00.hlmuaen.mongodb.net:27017,ac-946nldz-shard-00-01.hlmuaen.mongodb.net:27017,ac-946nldz-shard-00-02.hlmuaen.mongodb.net:27017/?ssl=true&replicaSet=atlas-8nnmcd-shard-0&authSource=admin&retryWrites=true&w=majority`

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database not connected", error);
  }
};

export default Connection;
