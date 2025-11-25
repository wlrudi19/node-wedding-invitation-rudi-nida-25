import { FaClock, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const EventDetail = () => {
  const events = [
    {
      title: "Wedding Ceremony & Reception",
      date: "Saturday, 13 December 2025",
      time: "08:00 - 15:00 WIB",
      location: "Bride’s Residence, Banjarnegara, Jawa Tengah"
    },
    {
      title: "Guest Arrival & Greeting (Terima Tamu)",
      date: "Thursday - Friday, 11 - 12 December 2025",
      time: "09:00 - 20:00 WIB",
      location: "Bride’s Residence, Banjarnegara, Central Java"
    }
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-great-vibes text-4xl text-center text-slate-600 mb-12">Event Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-slate-600 mb-4">{event.title}</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="text-slate-400 mt-1 flex-shrink-0" />
                  <p>{event.date}</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaClock className="text-slate-400 mt-1 flex-shrink-0" />
                  <p>{event.time}</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-slate-400 mt-1 flex-shrink-0" />
                  <p>{event.location}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open("https://maps.app.goo.gl/uEModFVSvyyqNzqMA", "_blank");
                  }
                }}
                className="mt-6 px-4 py-2 bg-slate-600 text-white rounded-full hover:bg-slate-700 transition-all flex items-center gap-2 mx-auto"
              >
                <FaMapMarkerAlt /> View Location
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="Lokasi Pernikahan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.735596968656!2d109.7404431!3d-7.3834994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa9ed31947f35%3A0xec5de9add513f1d1!2sPerumahan%20Selagara!5e0!3m2!1sen!2sid!4v1763992704256!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;