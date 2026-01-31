// "use client";
// import Image from "next/image";

// function HomeHero() {
//   const balance = "$20,193";
//   return (
//     <section className="mx-auto max-w-[940px] py-10 px-4 sm:px-6 lg:px-8 relative">
//       <Image
//         src="/images/h4.jpeg"
//         alt="Home Hero"
//         width={1440}
//         height={800}
//         quality={100}
//         priority
//         className="w-full h-auto"
//       />

//       <div className="flex items-center gap-2 bg-emerald-900 px-3 py-2 rounded-lg absolute top-14 right-14">
//         {/* Yellow Button */}
//         <a href="#bonus-section">
//           <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300">
//             היתרה שלי
//           </button>
//         </a>

//         {/* Balance Display */}
//         <div className="bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-sm">
//           {balance}
//         </div>
//       </div>

//       <button className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 absolute bottom-20 right-14">
//         {/* Telegram Image */}
//         <Image
//           src="/images/tle.png" // 🔄 Ekhane tumhar image path dao
//           alt="Telegram"
//           fill
//           className="object-cover"
//         />
//       </button>
//     </section>
//   );
// }

// export default HomeHero;




"use client";
import Image from "next/image";

function HomeHero() {
  const balance = "$20,193";
  return (
    <section className="mx-auto max-w-[940px] py-10 px-4 sm:px-6 lg:px-8 relative">
      <Image
        src="/images/svgh3.svg"
        alt="Home Hero"
        width={1440}
        height={800}
        quality={100}
        priority
        className="w-full h-auto"
      />

      <div className="flex items-center gap-2 bg-emerald-900 px-3 py-2 rounded-lg absolute top-14 right-14">
        {/* Yellow Button */}
        <a href="#bonus-section">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300">
            היתרה שלי
          </button>
        </a>

        {/* Balance Display */}
        <div className="bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-sm">
          {balance}
        </div>
      </div>

      <button className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 absolute bottom-20 right-14">
        {/* Telegram Image */}
        <Image
          src="/images/tle.png" // 🔄 Ekhane tumhar image path dao
          alt="Telegram"
          fill
          className="object-cover"
        />
      </button>
    </section>
  );
}

export default HomeHero;
