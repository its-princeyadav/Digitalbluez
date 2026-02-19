import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Admin from "@/models/Admin"
import bcrypt from "bcryptjs"

export async function POST(req) {
  try {
    await connectDB()

    const { username, password } = await req.json()

    const user = await Admin.findOne({ username })

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 400 }
      )
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}