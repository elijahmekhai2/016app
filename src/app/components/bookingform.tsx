"use client";
import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Booking } from "../components/bookinginterface";

const BookingForm = ({ isEng }: { isEng: boolean }) => {
  const [formData, setFormData] = useState<Booking>({
    id: "",
    roomId: "",
    date: "",
    checkInTime: "",
    checkOutTime: "",
    customerName: "",
    email: "",
    status: "pending",
    engPack: true,
    engId: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  /*  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    //  Get a database going for the form
  }; */

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const serializedData = JSON.stringify(formData);
    localStorage.setItem("bookingData", serializedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {isEng && (
        <>
          <div>Welcome to booking!</div>
          <div>
            <label htmlFor="engPack">ENGINEERING PACK:</label>
            <input
              type="radio"
              id="engPack1"
              name="engPack"
              value="1"
              checked={formData.engPack}
              onChange={handleChange}
            />
            <label htmlFor="engPack1">1</label>
          </div>
          <div>
            <input
              type="radio"
              id="engPack2"
              name="engPack"
              value="2"
              checked={formData.engPack}
              onChange={handleChange}
            />
            <label htmlFor="engPack2">2</label>
          </div>
          <div>
            <input
              type="radio"
              id="engPack3"
              name="engPack"
              value="3"
              checked={formData.engPack}
              onChange={handleChange}
            />
            <label htmlFor="engPack3">3</label>
          </div>
        </>
      )}

      <div>
        <label htmlFor="roomId">Room ID:</label>
        <input
          type="text"
          id="roomId"
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="checkInTime">Check In:</label>
        <input
          type="time"
          id="checkInTime"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="checkOutTime">Check Out:</label>
        <input
          type="time"
          id="checkOutTime"
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Booking</button>
    </form>
  );
};

export default BookingForm;
