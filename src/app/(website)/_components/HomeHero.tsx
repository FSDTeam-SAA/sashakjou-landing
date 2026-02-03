"use client";

import Image from "next/image";
import { useState } from "react";

function HomeHero() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Your login logic here
    console.log("Login clicked", { username, password });
  };

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const handleSubmitRge = () => {
    // Your login logic here
    console.log("Login clicked", { username, password });
  };

  const balance = "$20,193";
  const bonusAmount = "$10,239";

  return (
    <section>
      {/* Section of Hero one  */}
      <section>
        {/* Hero for Mobile (sm and below) */}
        <div className="block md:hidden relative w-full h-screen overflow-hidden">
          <Image
            src="/images/heroOneBG.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-3 left-16 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={100}
              width={100}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute left-[55%] top-[51%] -translate-x-1/2 -translate-y-1/2 w-[330px]">
            <Image
              src="/images/middleManHeorOne.svg"
              alt="image"
              height={610}
              width={610}
              quality={100}
              className="z-50 w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/bottom.svg"
              alt="image"
              height={120}
              width={120}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute -top-3 -right-4">
            <Image
              src="/images/top.svg"
              alt="image"
              height={120}
              width={120}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute top-[54.5%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[80%]">
              <h2 className="text-2xl font-bold text-white my-2 text-center">
                התחברות
              </h2>

              <div className="space-y-3">
                {/* Username Input */}
                <input
                  type="text"
                  placeholder="שם משתמש"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-2 py-1 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                  dir="rtl"
                />

                {/* Password Input */}
                <input
                  type="password"
                  placeholder="סיסמה"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-2 py-1 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                  dir="rtl"
                />

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-1 px-2 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
                >
                  כניסה
                </button>

                {/* Register Link */}
                <p className="text-center text-sm text-white hover:text-yellow-400 cursor-pointer">
                  הרשמה
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero for Tablet (md to lg) */}
        <div className="hidden md:block lg:hidden relative w-full h-screen overflow-hidden">
          <Image
            src="/images/heroOneBG.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-5 left-20 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={130}
              width={130}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute left-[60%] top-[51%] -translate-x-1/2 -translate-y-1/2 w-[510px]">
            <Image
              src="/images/middleManHeorOne.svg"
              alt="image"
              height={610}
              width={610}
              quality={100}
              className="z-50 w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/bottom.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute -top-3 -right-4">
            <Image
              src="/images/top.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute top-[55.5%] left-[47.6%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full max-w-[340px]  p-8 ">
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
                  className="w-full px-5 py-4 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-lg"
                  dir="rtl"
                />

                {/* Password Input */}
                <input
                  type="password"
                  placeholder="סיסמה"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-lg"
                  dir="rtl"
                />

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-2xl"
                >
                  כניסה
                </button>

                {/* Register Link */}
                <p className="text-center text-sm text-white hover:text-yellow-400 cursor-pointer">
                  הרשמה
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero for Desktop (lg and above) */}
        <div className="hidden lg:block relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/heroOneBG.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-5 left-20 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={130}
              width={130}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/middleManHeorOne.svg"
              alt="image"
              height={510}
              width={510}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/bottom.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute -top-3 -right-4">
            <Image
              src="/images/top.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute top-[55%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full max-w-[350px] p-8 rounded-3xl shadow-lg">
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

                {/* Register Link */}
                <p className="text-center text-sm text-white hover:text-yellow-400 cursor-pointer">
                  הרשמה
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section of Hero two   */}
      <section className="mt-10 ">
        {/* Hero for Mobile (sm and below) */}
        <div className="block md:hidden relative w-full h-screen overflow-hidden">
          <Image
            src="/images/heroOneBG.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-3 left-16 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={100}
              width={100}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute left-[55%] top-[51%] -translate-x-1/2 -translate-y-1/2 w-[330px]">
            <Image
              src="/images/HeroTwoMan.svg"
              alt="image"
              height={610}
              width={610}
              quality={100}
              className="z-50 w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/bottom.svg"
              alt="image"
              height={120}
              width={120}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute -top-3 -right-4">
            <Image
              src="/images/top.svg"
              alt="image"
              height={120}
              width={120}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute top-[53.5%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[90%]">
              <h2 className="text-2xl font-bold text-white my-2 text-center">
                התחברות
              </h2>

              <div className="space-y-4">
                {/* Username Input */}
                <input
                  type="text"
                  placeholder="שם משתמש"
                  value={usernameReg}
                  onChange={(e) => setUsernameReg(e.target.value)}
                  className="w-full px-2 py-1 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                  dir="rtl"
                />

                {/* Password Input */}
                <input
                  type="password"
                  placeholder="סיסמה"
                  value={passwordReg}
                  onChange={(e) => setPasswordReg(e.target.value)}
                  className="w-full px-2 py-1 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                  dir="rtl"
                />

                {/* Submit Button */}
                <button
                  onClick={handleSubmitRge}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-1 px-2 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-xl"
                >
                  כניסה
                </button>

                {/* Register Link */}
                <p className="text-center text-sm text-white hover:text-yellow-400 cursor-pointer">
                  הפטור אינו סוכן
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero for Tablet (md to lg) */}
        <div className="hidden md:block lg:hidden relative w-full h-screen overflow-hidden">
          <Image
            src="/images/heroOneBG.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-5 left-20 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={130}
              width={130}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute left-[60%] top-[51%] -translate-x-1/2 -translate-y-1/2 w-[510px]">
            <Image
              src="/images/HeroTwoMan.svg"
              alt="image"
              height={610}
              width={610}
              quality={100}
              className="z-50 w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/bottom.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute -top-3 -right-4">
            <Image
              src="/images/top.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute top-[54.5%] left-[49.3%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full max-w-[350px]  p-8 ">
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
                  className="w-full px-5 py-4 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-lg"
                  dir="rtl"
                />

                {/* Password Input */}
                <input
                  type="password"
                  placeholder="סיסמה"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-900 text-white text-right rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-lg"
                  dir="rtl"
                />

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-2xl"
                >
                  כניסה
                </button>

                {/* Register Link */}
                <p className="text-center text-sm text-white hover:text-yellow-400 cursor-pointer">
                  הרשמה
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero for Desktop (lg and above) */}
        <div className="hidden lg:block relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/heroOneBG.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-5 left-20 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={130}
              width={130}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/HeroTwoMan.svg"
              alt="image"
              height={500}
              width={500}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/bottom.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute -top-3 -right-4">
            <Image
              src="/images/top.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute top-[53.3%] left-[45.8%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full max-w-[350px] p-8 rounded-3xl shadow-lg">
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

                {/* Register Link */}
                <p className="text-center text-sm text-white hover:text-yellow-400 cursor-pointer">
                  הצטרף אלינו כסוכן
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <section className="hidden lg:block relative w-full overflow-hidden mt-10">
          {/* Background Image */}
          <Image
            src="/images/heroOneBG.svg"
            alt="Hero Background"
            width={1440}
            height={800}
            quality={100}
            priority
            className="w-full h-auto"
          />

          {/* Logo */}
          <div className="absolute top-3 left-16 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={100}
              width={100}
              quality={100}
              className="z-50"
            />
          </div>

          {/* Hero Three On */}
          <div className="absolute top-[2%] left-[28%] w-[220px] sm:w-[300px] md:w-[400px] lg:w-[700px] z-10">
            <Image
              src="/images/heroThreeOn.svg"
              alt="Hero Three On"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Hero Three Two */}
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 !w-[90vw] max-w-[600px] z-10 ">
            <Image
              src="/images/heroThreeTwo.svg"
              alt="Hero Three Two"
              width={500}
              height={500}
              className="w-full h-auto "
              priority
            />
          </div>

          {/* Hero Four Image */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[600px] z-10">
            <Image
              src="/images/heroFourimage.svg"
              alt="Hero Four"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Carousel */}
          <div className="absolute top-[57%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] z-10">
            <Image
              src="/images/carousal.svg"
              alt="Carousel"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Black Images */}
          <div className="absolute top-[68%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] z-10">
            <Image
              src="/images/black.svg"
              alt="Black"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] z-10">
            <Image
              src="/images/black.svg"
              alt="Black"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Balance Box */}
          <div className="flex items-center gap-2 bg-emerald-900 px-3 py-2 rounded-lg absolute top-4 right-4 z-20">
            <a href="#bonus-section-mobile">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-2 py-1 rounded-lg text-sm transition-all duration-300">
                היתרה שלי
              </button>
            </a>
            <div className="bg-emerald-700 text-white font-bold px-2 py-1 rounded-lg text-sm">
              {balance}
            </div>
          </div>

          {/* Telegram Button */}
          <button
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex items-center justify-center
               transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105
               absolute bottom-6 right-4 sm:bottom-10 sm:right-10 lg:bottom-20 lg:right-14 z-20"
          >
            <Image
              src="/images/tlgrm.png"
              alt="Telegram"
              width={60}
              height={60}
              quality={100}
              className="object-cover w-full h-full rounded-full"
            />
          </button>
        </section>

        <section className="block lg:hidden w-full relative mt-10">
          <div className="w-full relative">
            <Image
              src="/images/heroFourImage.svg"
              alt="Hero Image"
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* Balance Box */}
          <div className="flex items-center gap-2 bg-emerald-900 px-3 py-2 rounded-lg absolute top-4 right-4 z-20">
            <a href="#bonus-section-mobile">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-2 py-1 rounded-lg text-sm transition-all duration-300">
                היתרה שלי
              </button>
            </a>
            <div className="bg-emerald-700 text-white font-bold px-2 py-1 rounded-lg text-sm">
              {balance}
            </div>
          </div>

          {/* Telegram Button */}
          <button
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex items-center justify-center
               transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105
               absolute bottom-6 right-4 sm:bottom-10 sm:right-10 lg:bottom-20 lg:right-14 z-20"
          >
            <Image
              src="/images/tlgrm.png"
              alt="Telegram"
              width={60}
              height={60}
              quality={100}
              className="object-cover w-full h-full rounded-full"
            />
          </button>
        </section>
      </section>

      <section className="mt-10">
        {/* Hero Four - Mobile */}
        <div
          id="bonus-section-mobile"
          className="block md:hidden relative w-full h-screen overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src="/images/heroOneBG.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-3 left-16 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={100}
              width={100}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[330px]">
            <Image
              src="/images/lastImage.svg"
              alt="image"
              height={610}
              width={610}
              quality={100}
              className="z-50 w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/bottom.svg"
              alt="image"
              height={120}
              width={120}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute -top-3 -right-4">
            <Image
              src="/images/top.svg"
              alt="image"
              height={120}
              width={120}
              quality={100}
              className="z-50"
            />
          </div>
          <div className="absolute top-[50%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white text-4xl font-bold text-center">
              {bonusAmount}
            </p>
          </div>

          <div className="absolute top-[62%] left-[54%] transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
            <button className=" bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-black py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-2xl">
              טעינת החשבון
            </button>
          </div>

          {/* Small Text */}
          <p className="absolute w-full top-[68%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white text-sm text-center px-4">
            למשיכת הכספים מהחשבון, יש לפנות לסוכן שלך
          </p>
        </div>

        {/* Hero Four - Tablet */}
        <div
          id="bonus-section-tablet"
          className="hidden md:block lg:hidden relative w-full h-screen overflow-hidden"
        >
          <Image
            src="/images/heroOneBG.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-5 left-20 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={130}
              width={130}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[510px]">
            <Image
              src="/images/lastImage.svg"
              alt="image"
              height={610}
              width={610}
              quality={100}
              className="z-50 w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/bottom.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute -top-3 -right-4">
            <Image
              src="/images/top.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute top-[50%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white text-5xl font-bold text-center">
              {bonusAmount}
            </p>
          </div>

          <div className="absolute top-[63%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
            <a href="">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-black py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-4xl whitespace-nowrap">
                טעינת החשבון
              </button>
            </a>
          </div>

          {/* Small Text */}
          <p className="absolute top-[70%] left-[38%] transform -translate-x-1/2 -translate-y-1/2 text-white text-base text-center">
            למשיכת הכספים מהחשבון, יש לפנות לסוכן שלך
          </p>
        </div>

        {/* Hero Four - Desktop (lg and above) */}
        <div
          id="bonus-section-desktop"
          className="hidden lg:block relative w-full h-screen overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src="/images/heroOneBG.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-5 left-20 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="image"
              height={130}
              width={130}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/lastImage.svg"
              alt="image"
              height={510}
              width={510}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              src="/images/bottom.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute -top-3 -right-4">
            <Image
              src="/images/top.svg"
              alt="image"
              height={220}
              width={220}
              quality={100}
              className="z-50"
            />
          </div>

          <div className="absolute top-[50%] left-[45.3%] transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white text-6xl font-bold text-center">
              {bonusAmount}
            </p>
          </div>

          <div className="absolute top-[63%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-black py-4 px-14 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-5xl whitespace-nowrap">
              טעינת החשבון
            </button>
          </div>

          {/* Small Text */}
          <p className="absolute top-[72%] left-[37%] transform -translate-x-1/2 -translate-y-1/2 text-white">
            למשיכת הכספים מהחשבון, יש לפנות לסוכן שלך
          </p>
        </div>
      </section>
    </section>
  );
}

export default HomeHero;
