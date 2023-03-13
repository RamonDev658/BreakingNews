import mongoose from "mongoose";


const connectDatabase = () => {
  console.log("wait connecting to the database");

  mongoose
    .connect(process.env.MONGODB_URI,
      
      { useNewUrlParser: true,
        useUnifiedTopology: true 
      }
    )
    .then(() => console.log("MongoDB Atlas is connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
