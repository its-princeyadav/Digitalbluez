import mongoose from "mongoose"

const connectionToDatabase = async () =>{
    try{
        await mongoose.connect(process.env.MongoURL)
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.log("error")
    }
}

export default connectionToDatabase