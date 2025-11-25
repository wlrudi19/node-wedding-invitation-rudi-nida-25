"use client";

import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import Toast from "./Toast";

const Gift = () => {
  const [toast, setToast] = useState(false);

  const bankAccounts = [
    {
      bank: "SeaBank",
      logo: `${process.env.PUBLIC_URL}/seabank.png`,
      name: "Annida Fitria Maruf",
      number: "901238960509",
    },
    {
      bank: "Mandiri",
      logo: `${process.env.PUBLIC_URL}/mandiri.png`,
      name: "Rudi Wildantoro Lesmana",
      number: "1340022612864",
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ""));
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-great-vibes text-4xl text-center text-violet-600 mb-6">
          Digital Envelope
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Your warm wishes are more than enough, but if you would like to share a token of love, here are the details:
        </p>

        <div className="space-y-6">
          {bankAccounts.map((account, index) => (
            <div key={index} className="bg-violet-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={account.logo}
                  alt={account.bank}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-xl font-semibold text-violet-600">{account.bank}</h3>
              </div>

              <div className="space-y-2">
                <p>
                  Account Holder:{" "}
                  <span className="font-medium">{account.name}</span>
                </p>

                <div className="flex justify-between items-center">
                  <p>
                    Account Number:{" "}
                    <span className="font-medium">{account.number}</span>
                  </p>

                  <button
                    onClick={() => copyToClipboard(account.number)}
                    className="text-violet-600 hover:text-violet-700 flex items-center gap-1 text-sm"
                  >
                    <FaCopy /> Copy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Toast message="Account number copied!" show={toast} />
      </div>
    </section>
  );
};

export default Gift;