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
          {/* Background Image */}
          <Image
            src="/images/phoneOneHeader.svg"
            alt="Mobile Hero Background"
            fill
            priority
            className="object-fill"
          />

          <div className="absolute top-[48%] left-[40.5%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[90%]">
              <h2 className="text-2xl font-bold text-white my-2 text-center">
                התחברות
              </h2>

              <div className="space-y-4">
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
          {/* Background Image */}
          <Image
            src="/images/padmini.svg"
            alt="Tablet Hero Background"
            fill
            priority
            className="object-contain"
          />

          <div className="absolute top-[55.5%] left-[44.5%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full max-w-md  p-8 ">
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
            src="/images/hero3.jpeg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-contain"
          />

          <div className="absolute top-1/2 left-[49.7%] transform -translate-x-1/2 -translate-y-1/2">
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
      <section className="mt-10">
        {/* Hero for Mobile (sm and below) */}
        <div className="block md:hidden relative w-full h-screen overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/heroTwoMobile.svg"
            alt="Mobile Hero Background"
            fill
            priority
            className="object-fill"
          />

          <div className="absolute top-[48%] left-[40.5%] transform -translate-x-1/2 -translate-y-1/2">
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
          {/* Background Image */}
          <Image
            src="/images/heroTwoTab.svg"
            alt="Tablet Hero Background"
            fill
            priority
            className="object-contain"
          />

          <div className="absolute top-[55.5%] left-[44.5%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full max-w-md  p-8 ">
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
            src="/images/home3.jpeg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-contain"
          />

          <div className="absolute top-1/2 left-[49.7%] transform -translate-x-1/2 -translate-y-1/2">
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

      {/* Section of Hero three   */}
      <section className="relative mt-10 lg:max-w-[880px] mx-auto">
        <Image
          src="/images/heroThreeMobile.svg"
          alt="Home Hero"
          width={1440}
          height={800}
          quality={100}
          priority
          className="w-full h-auto object-cover"
        />

        <div className="flex items-center  gap-2 bg-emerald-900 px-3 py-2 rounded-lg absolute top-2 right-3">
          {/* Yellow Button */}
          <a href="#bonus-section">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-2 py-1 rounded-lg text-sm transition-all duration-300">
              היתרה שלי
            </button>
          </a>

          {/* Balance Display */}
          <div className="bg-emerald-700 text-white font-bold px-2 py-1 rounded-lg text-sm">
            {balance}
          </div>
        </div>
        <button className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 absolute bottom-8 lg:bottom-20 lg:right-14 right-5">
          {/* Telegram Image */}
          <Image
            src="/images/tlgrm.png"
            alt="Telegram"
            width={60}
            height={60}
            quality={100}
            className="object-cover w-full h-full roufnded-full"
          />
        </button>
      </section>

      <section className="mt-10">
        {/* Hero Four - Mobile */}
        <div
          id="bonus-section-mobile"
          className="block md:hidden relative w-full h-screen overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src="/images/heroFourPhone.svg"
            alt="Mobile Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-[50%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white text-4xl font-bold text-center">
              {bonusAmount}
            </p>
          </div>

          <div className="absolute top-[60%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
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
          {/* Background Image */}
          <Image
            src="/images/heroFourTab.svg"
            alt="Tablet Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-[50%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white text-5xl font-bold text-center">
              {bonusAmount}
            </p>
          </div>

          <div className="absolute top-[63%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-black py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-4xl whitespace-nowrap">
              טעינת החשבון
            </button>
          </div>

          {/* Small Text */}
          <p className="absolute top-[70%] left-[38%] transform -translate-x-1/2 -translate-y-1/2 text-white text-base text-center">
            למשיכת הכספים מהחשבון, יש לפנות לסוכן שלך
          </p>
        </div>

        {/* Hero Four - Desktop (lg and above) */}
        <div
          id="bonus-section-desktop"
          className="hidden lg:block relative w-full h-screen overflow-hidden lg:max-w-[885px] mx-auto my-10"
        >
          {/* Background Image */}
          <Image
            src="/images/heroFourTab.svg"
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-[50%] left-[38%] transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white text-6xl font-bold text-center">
              {bonusAmount}
            </p>
          </div>

          <div className="absolute top-[65%] left-[37%] transform -translate-x-1/2 -translate-y-1/2">
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
