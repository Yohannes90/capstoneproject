import React, { useState } from "react";


const BookingForm = (props) => {
    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ date, times, guests, occasion });
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    };

    return (
        <header className="bg-green-50 py-6 flex items-center justify-center min-h-[90]">
            <section className="container mx-auto p-4 md:p-10 bg-white shadow-xl rounded-lg max-w-lg">
                <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Book a Table</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <fieldset className="grid grid-cols-1 gap-5">
                        <div>
                            <label htmlFor="book-date" className="block text-sm font-medium text-gray-700">
                                Choose Date
                            </label>
                            <input
                                id="book-date"
                                value={date}
                                onChange={(e) => handleChange(e.target.value)}
                                type="date"
                                required
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="book-time" className="block text-sm font-medium text-gray-700">
                                Choose Time
                            </label>
                            <select
                                id="book-time"
                                value={times}
                                onChange={(e) => setTimes(e.target.value)}
                                required
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 p-3"
                            >
                                <option value="">Select a Time</option>
                                {props.availableTimes.availableTimes.map((availableTime) => (
                                    <option key={availableTime}>{availableTime}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests" className="block text-sm font-medium text-gray-700">
                                Number of Guests
                            </label>
                            <input
                                id="book-guests"
                                min="1"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                type="number"
                                placeholder="0"
                                max={10}
                                required
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="book-occasion" className="block text-sm font-medium text-gray-700">
                                Occasion
                            </label>
                            <select
                                id="book-occasion"
                                key={occasion}
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                                required
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 p-3"
                            >
                                <option value="">Select an Option</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div>
                            <input
                                aria-label="On Click"
                                type="submit"
                                value="Make Your Reservation"
                                className="w-full py-3 px-6 border border-transparent rounded-md shadow-lg text-base font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer transition-transform duration-200 hover:scale-105"
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
