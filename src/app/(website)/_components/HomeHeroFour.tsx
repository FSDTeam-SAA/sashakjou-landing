"use client";
import Image from "next/image";

function HomeHeroFour() {
  const bonusAmount = "$10,239";
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/h5.jpeg"
        alt="Home Hero Background"
        fill
        priority
        className="object-contain"
      />

      <div className="absolute top-[41%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-white text-6xl font-bold">{bonusAmount}</p>
      </div>

      <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-black py-4 px-14 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-5xl whitespace-nowrap">
          טעינת החשבון
        </button>
      </div>

      {/* Small Text */}
      <p className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        למשיכת הכספים מהחשבון, יש לפנות לסוכן שלך
      </p>
    </section>
  );
}

export default HomeHeroFour;
