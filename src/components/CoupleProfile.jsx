import { FaInstagram } from 'react-icons/fa';

import madeft from '../assets/images/rudi-3.jpg';
import putuft from '../assets/images/nida-4.jpg';
import bgCouple from "../assets/images/bersama-13.jpg"; // change path & file

const CoupleProfile = () => {
  // Replace with actual Instagram URLs or remove if not needed
  const groomInstagram = "https://instagram.com/";
  const brideInstagram = "https://instagram.com/";

  return (
    // <section className="py-16 px-4 bg-white" id="couple">
    //   <div className="max-w-6xl mx-auto">
    //     <h2 className="font-great-vibes text-4xl text-center text-slate-600 mb-12">The Bride & Groom</h2>

    //     <div className="flex flex-col md:flex-row items-center justify-center gap-12">
    //       {/* Bride */}
    //       <div className="text-center">
    //         <div className="rounded-full overflow-hidden border-4 border-slate-400 w-48 h-48 mx-auto mb-6 shadow-lg">
    //           <img 
    //             src={putuft}
    //             alt="Putu - Mempelai Wanita" 
    //             className="w-full h-full object-cover"
    //             loading="lazy"
    //           />
    //         </div>
    //         <h3 className="text-2xl font-semibold mb-2">Annida Fitria Maruf</h3>
    //         <p className="text-gray-600 mb-1">Beloved daughter of</p>
    //         <p className="text-gray-600 mb-4">Mr. Marsinggih & Mrs. Suratmi</p>

    //         {/* {brideInstagram ? (
    //           <a 
    //             href={brideInstagram} 
    //             target="_blank" 
    //             rel="noopener noreferrer"
    //             className="text-rose-600 hover:text-rose-700 flex items-center justify-center gap-2"
    //             aria-label="Instagram Mempelai Wanita"
    //           >
    //             <FaInstagram /> @putu
    //           </a>
    //         ) : (
    //           <div className="text-rose-600 flex items-center justify-center gap-2">
    //             <FaInstagram /> @putu
    //           </div>
    //         )} */}
    //       </div>

    //       <div className="font-great-vibes text-4xl text-slate-600 hidden md:block"> </div>

    //       {/* Groom */}
    //       <div className="text-center">
    //         <div className="rounded-full overflow-hidden border-4 border-slate-400 w-48 h-48 mx-auto mb-6 shadow-lg">
    //           <img 
    //             src={madeft} 
    //             alt="Made  - Mempelai Pria" 
    //             className="w-full h-full object-cover"
    //             loading="lazy"
    //           />
    //         </div>
    //         <h3 className="text-2xl font-semibold mb-2">Rudi Wildantoro Lesmana</h3>
    //         <p className="text-gray-600 mb-1">Beloved son of</p>
    //         <p className="text-gray-600 mb-4">Mr. Rusmaedi & Mrs. Siti Mardilah</p>

    //         {/* {groomInstagram ? (
    //           <a 
    //             href={groomInstagram} 
    //             target="_blank" 
    //             rel="noopener noreferrer"
    //             className="text-rose-600 hover:text-rose-700 flex items-center justify-center gap-2"
    //             aria-label="Instagram Mempelai Pria"
    //           >
    //             <FaInstagram /> @rudi_wl
    //           </a>
    //         ) : (
    //           <div className="text-rose-600 flex items-center justify-center gap-2">
    //             <FaInstagram /> @rudi_wl
    //           </div>
    //         )} */}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      className="relative py-16 px-4 text-slate-800"
      id="couple"
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <img
          src={bgCouple}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div> */}
      <div className="absolute inset-0">
        <img
          src={bgCouple}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <h2 className="font-great-vibes text-4xl text-center text-white mb-12">
          The Bride & Groom
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Bride */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden border-4 border-slate-400 w-48 h-48 mx-auto mb-6 shadow-lg">
              <img
                src={putuft}
                alt="Putu - Mempelai Wanita"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl text-white font-semibold mb-2">Annida Fitria Maruf</h3>
            <p className="text-gray-300 mb-1">Beloved daughter of</p>
            <p className="text-gray-300 mb-4">Mr. Marsinggih & Mrs. Suratmi</p>
          </div>

          {/* Groom */}
          <div className="text-center">
            <div className="rounded-full overflow-hidden border-4 border-slate-400 w-48 h-48 mx-auto mb-6 shadow-lg">
              <img
                src={madeft}
                alt="Rudi - Mempelai Pria"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl text-white font-semibold mb-2">Rudi Wildantoro Lesmana</h3>
            <p className="text-gray-300 mb-1">Beloved son of</p>
            <p className="text-gray-300 mb-4">Mr. Rusmaedi & Mrs. Siti Mardilah</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default CoupleProfile;