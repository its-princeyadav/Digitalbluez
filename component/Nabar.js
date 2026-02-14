"use client";

import { useState } from "react";
import {
  Search,
  Phone,
  User,
  ShoppingBag,
  MapPin,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">

      {/* 🔵 TOP BLUE BAR */}
      <div className="bg-[#0E75B9] text-white px-4 md:px-8 py-3 flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-sm"></div>
          <span className="text-lg md:text-xl font-semibold tracking-wide">
            Digitalbluez
          </span>
        </div>

        {/* CENTER SEARCH (Hidden on small screens) */}
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-[40%] max-w-xl">
          <Search className="text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="What are you looking for..."
            className="w-full outline-none px-3 text-sm text-black"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6 text-sm">

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <div className="leading-tight">
              <p className="text-xs opacity-80">For Bulk Enquiries</p>
              <p className="font-semibold text-sm">
                +91-9535698866
              </p>
            </div>
          </div>

          <User className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
          <MapPin className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          {mobileOpen ? (
            <X onClick={() => setMobileOpen(false)} className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu onClick={() => setMobileOpen(true)} className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </div>

      {/* ⚪ SECOND MENU BAR (Desktop Only) */}
      <div className="hidden md:flex bg-white shadow-sm px-8 py-3 items-center justify-between text-gray-700 text-sm">

        <div className="flex items-center gap-8 font-medium">

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#0E75B9]">
            <Menu className="w-4 h-4" />
            All Categories
          </div>

          <span className="hover:text-[#0E75B9] cursor-pointer">MacBook</span>
          <span className="hover:text-[#0E75B9] cursor-pointer">Products +</span>
          <span className="hover:text-[#0E75B9] cursor-pointer">Students +</span>
          <span className="hover:text-[#0E75B9] cursor-pointer">Bulk Orders +</span>
          <span className="hover:text-[#0E75B9] cursor-pointer">Dream On</span>
          <span className="hover:text-[#0E75B9] cursor-pointer">Company +</span>
          <span className="hover:text-[#0E75B9] cursor-pointer">Store</span>
          <span className="hover:text-[#0E75B9] cursor-pointer">More +</span>

        </div>

        <div className="text-xs font-semibold text-gray-500">
          NSE Price
        </div>
      </div>

      {/* 📱 MOBILE DROPDOWN MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-4 text-gray-700 text-sm">

          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none px-3 bg-transparent text-black"
            />
          </div>

          <p className="font-medium">All Categories</p>
          <p>MacBook</p>
          <p>Products +</p>
          <p>Students +</p>
          <p>Bulk Orders +</p>
          <p>Dream On</p>
          <p>Company +</p>
          <p>Store</p>
          <p>More +</p>

          <div className="border-t pt-3 text-xs">
            <p className="opacity-70">For Bulk Enquiries</p>
            <p className="font-semibold">+91-9535698866</p>
          </div>

        </div>
      )}
    </header>
  );
}