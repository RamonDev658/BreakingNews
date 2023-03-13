import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("wait connecting to the database");

  mongoose.connect("mongodb+srv://ramondev658:rr85VUFys0PFmiER@cluster0.nhnvseo.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true}
  )
  .then(() => console.log("MongoDB Atlas is connected"))
  .catch((error) => console.log(error));

};

export default connectDatabase;