"use client"
import { useState } from "react"
import axiox from "axios"

const page = () => {
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
   
  const handlesubmit = async(e) => {
    e.preventDefault()
   try{
const response = await axiox.post() 
   }
   catch(error){
    console.error("Login failed:", error);
   }
  }
  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Welcome to Admin Page</h1>

      <form className="space-y-5" onSubmit={handlesubmit}>
           <div>
            <label className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
      </form>
      </div>
    </div>
  )
}

export default page 
