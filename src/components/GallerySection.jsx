"use client";

import { motion } from "framer-motion";

import img2 from "../assets/images/bersama-8.jpg";
import img3 from "../assets/images/bersama-10.jpg";
import img4 from "../assets/images/bersama-9.jpg";
import img5 from "../assets/images/bersama-6.jpg";
import img6 from "../assets/images/bersama-7.jpg";
import img7 from "../assets/images/bersama-5.jpg";

const galleryImages = [img2, img3, img4, img5, img6, img7];

const GallerySection = ({ theme = {} }) => {
    const bgClass = theme.bg || "bg-white";
    const textClass = theme.text || "text-gray-800";
    const primaryClass = theme.primary || "text-rose-600";

    return (
        <section className={`${theme.bg} py-16 px-4`}>
            <div className="max-w-6xl mx-auto">
                <h2 className="font-great-vibes text-4xl text-center text-violet-600 mb-12">Memories & Moments</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                           <div className="overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square">
  <img
    src={img}
    alt={`Couple moment ${index + 1}`}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
  />
</div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;