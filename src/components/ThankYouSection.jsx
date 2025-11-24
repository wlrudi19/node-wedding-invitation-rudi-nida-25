import { motion } from "framer-motion";
import thankBg from "../assets/images/bersama-4.jpg"; // bisa pakai background yang sama

const ThankYouSection = () => {
  const params = new URLSearchParams(window.location.search);
  const invitedName = params.get("to") || "Tamu Undangan";

  return (
    <section
      id="ThankYou"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
    >
      {/* Background Image */}
      <img
        src={thankBg}
        alt="Thank You Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-base italic"
        >
          With our warmest gratitude
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-great-vibes text-5xl text-white mt-3 drop-shadow-xl"
        >
          {invitedName}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white text-lg mt-4 leading-relaxed"
        >
          Thank you for taking the time to open our wedding invitation.  
          We truly hope you can join us on our special day and share the joy
          as we begin this new chapter of life together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-xl font-semibold mt-8 tracking-wide"
        >
          We look forward to seeing you.
        </motion.p>
      </div>
    </section>
  );
};

export default ThankYouSection;