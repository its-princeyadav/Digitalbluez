import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Admin from "@/models/Admin"
import bcrypt from "bcryptjs"

export async function GET() {
  try {
    await connectDB()

    const existingAdmin = await Admin.findOne({ username: "aditya" })
    if (existingAdmin) {
      return NextResponse.json({ message: "Admin already exists" })
    }

    const hashedPassword = await bcrypt.hash("123456", 10)

    await Admin.create({
      username: "aditya",
      password: hashedPassword
    })

    return NextResponse.json({ message: "Admin created successfully" })

  } catch (error) {
    console.log("FULL ERROR:", error)   // 👈 ADD THIS
    return NextResponse.json({ message: error.message })  // 👈 show real error
  }
}