"use client";

import { useState, useEffect } from "react";
import { Range } from "react-date-range";

import apiService from "@/app/services/apiService";
import useLoginModal from "@/app/hooks/useLoginModal";

import { PropertyType } from "./PropertyList";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface ReservationSidebarProps {
  userId: string | null;
  property: PropertyType;
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  userId,
  property,
}) => {
  const loginModal = useLoginModal();

  const [fee, setFee] = useState(0);
  const [nights, setNights] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState("1");
  const guestsRange = Array.from({ length: property.guests }, (_, i) => i + 1);

  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">${property.price_per_night} per night</h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2 block font-bold text-xs">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full text-xm bg-transparent"
        >
          {guestsRange.map((guest) => (
            <option key={guest} value={guest}>
              {guest}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full mb-6 py-4 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
        Reserve
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>${property.price_per_night} * {nights} nights</p>
        <p>${property.price_per_night * nights}</p>
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>Travelbnb service fee</p>
        <p>${fee}</p>
      </div>
      <hr />
      <div className="mt-4 flex justify-between align-center font-bold">
        <p>Total ${totalPrice}</p>
      </div>
    </aside>
  );
};

export default ReservationSidebar;
