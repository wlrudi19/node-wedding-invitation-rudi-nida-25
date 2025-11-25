import { motion } from "framer-motion";
import heroBg from "../assets/images/bersama-3.jpg";

const Hero = ({ playMusic }) => {
  const params = new URLSearchParams(window.location.search);
  const invitedName = params.get("to") || "Tamu Undangan";

  const handleOpen = () => {
    playMusic();          // 🔥 auto play music when clicking
    document.querySelector("#Couple")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="Hero"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
    >
      <img
        src={heroBg}
        alt="Wedding Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center px-4 max-w-2xl">

        {invitedName && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 text-center"
          >
            <p className="text-white text-base italic">
              To our beloved guest
            </p>

            <p className="text-white font-great-vibes text-5xl mt-2 drop-shadow-lg">
              {invitedName}
            </p>

            <p className="text-white text-base italic mt-1">
              you are warmly invited to our wedding.
            </p>
          </motion.div>
        )}

        <motion.button
          onClick={handleOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block px-8 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-all shadow-xl font-semibold"
        >
          Open Invitation
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
