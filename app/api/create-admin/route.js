import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Admin from "@/models/Admin"
import bcrypt from "bcryptjs"

export async function GET() {
  try {
    await connectDB()

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: "admin" })
    if (existingAdmin) {
      return NextResponse.json({ message: "Admin already exists" })
    }

    const hashedPassword = await bcrypt.hash("123456", 10)

    await Admin.create({
      username: "admin",
      password: hashedPassword
    })

    return NextResponse.json({ message: "Admin created successfully" })
  } catch (error) {
    return NextResponse.json({ message: "Error creating admin" })
  }
}