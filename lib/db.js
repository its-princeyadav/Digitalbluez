import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) return
    await mongoose.connect(process.env.MongoURL)
    console.log("MongoDB Connected")
  } catch (error) {
    console.log("MongoDB Connection Error:", error)
  }
}
console.log("MongoURL:", process.env.MongoURL)