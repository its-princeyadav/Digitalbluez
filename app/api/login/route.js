import connectionToDatabase from "@/lib/mongoose";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs" 
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { username, password } = await req.json()

    await connectDB()

    const admin = await Admin.findOne({ username })

    if (!admin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 400 })
    }

    const isMatch = await bcrypt.compare(password, admin.password)

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 })
    }

    return NextResponse.json({ message: "Login successful" })

  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}