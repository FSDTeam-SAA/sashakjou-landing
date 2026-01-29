"use client";
import React, { useState } from "react";
import Image from "next/image";

function HomeHeroTwo() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
  };
  return (
    <section className="relative w-full h-screen overflow-hidden mt-20">
      {/* Background Image */}
      <Image
        src="/images/home3.jpeg"
        alt="Home Hero Background"
        fill
        priority
        className="object-contain"
      />

      <div className="max-w-sm w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-3xl shadow-lg">
        {/* Login Card - Transparent Background */}
        <div className="p-6 rounded-3xl">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            התחברות
          </h2>

          <div className="space-y-4">
            {/* Username Input */}
            <input
              type="text"
              placeholder="שם משתמש"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-6 py-4 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-lg"
              dir="rtl"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="סיסמה"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-lg"
              dir="rtl"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-2xl"
            >
              כניסה
            </button>

            {/* Register/Subscribe Link */}
            <p className="text-center text-sm text-white">
              הצטרף אלינו כסוכן
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroTwo;
