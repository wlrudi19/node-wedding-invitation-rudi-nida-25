// import { useState, useEffect } from "react";

// const Countdown = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     Days: 0,
//     Hours: 0,
//     Minutes: 0,
//     Seconds: 0,
//   });

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const weddingDate = new Date("2025-12-13T00:00:00");
//       const now = new Date();
//       const difference = weddingDate - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//         const minutes = Math.floor((difference / 1000 / 60) % 60);
//         const seconds = Math.floor((difference / 1000) % 60);

//         setTimeLeft({
//           Days: days,
//           Hours: hours,
//           Minutes: minutes,
//           Seconds: seconds,
//         });
//       }
//     };

//     const timer = setInterval(calculateTimeLeft, 1000);
//     calculateTimeLeft();
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="py-16 px-4 bg-rose-600 text-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="font-great-vibes text-4xl mb-8">
//           Countdown to the happiest day
//         </h2>

//         {/* 🔥 Using grid for better small-screen stability */}
//         <div className="grid grid-cols-4 gap-2 md:gap-6 justify-center">
//           {Object.entries(timeLeft).map(([unit, value]) => (
//             <div
//               key={unit}
//               className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm flex flex-col items-center w-full"
//             >
//               <div className="text-3xl md:text-4xl font-bold drop-shadow-lg">
//                 {value}
//               </div>
//               <div className="text-xs md:text-sm uppercase tracking-wide mt-1">
//                 {unit}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Countdown;

import { useState, useEffect } from "react";
import bgPhoto from "../assets/images/bersama-2.jpg"; // your single photo

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("2025-12-13T00:00:00");
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          Minutes: Math.floor((difference / 1000 / 60) % 60),
          Seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 px-4 text-white overflow-hidden">
      {/* 🔥 Background Photo */}
      <div className="absolute inset-0">
        <img
          src={bgPhoto}
          alt="Background Silhouette"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-rose-600 bg-opacity-70"></div>
      </div>

      {/* 🔥 Countdown Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="font-great-vibes text-4xl mb-8 drop-shadow-lg">
          Countdown to the happiest day
        </h2>

        <div className="grid grid-cols-4 gap-2 md:gap-6 justify-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-4 flex flex-col items-center w-full"
            >
              <div className="text-3xl md:text-4xl font-bold drop-shadow-lg">
                {value}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-wide mt-1">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;