import connectionToDatabase from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        await connectionToDatabase()
        const { username, password } = await request.json()
    } catch (error) {
        console.log(error)
    }
}