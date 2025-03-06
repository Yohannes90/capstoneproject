import React from "react";


const ConfirmedBooking = () => {
  return (
    <header className="bg-green-100 py-20 flex items-center justify-center min-h-[88vh]">
      <section className="bg-white shadow-xl rounded-lg p-8 md:p-22 text-center max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          We look forward to seeing you soon.
        </p>
      </section>
    </header>
  );
};

export default ConfirmedBooking;
