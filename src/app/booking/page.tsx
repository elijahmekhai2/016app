import React, { useState } from "react";

const BookingForm = ({ onSave }: { onSave: (booking: Booking) => void }) => {
  const [formData, setFormData] = useState<Booking>({
    id: "",
    roomId: "",
    date: "",
    checkInTime: "",
    checkOutTime: "",
    customerName: "",
    email: "",
    status: "pending",
    engPack: false,
    engId: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*       
      <div>
        <label htmlFor="">:</label>
        <input type="" id="" name="" value={formData.roomId} onChange={handleChange} />
      </div>
      */}
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
          value={formData.roomId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="checkOutTime">Check Out:</label>
        <input
          type="time"
          id="checkOutTime"
          name="checkOutTime"
          value={formData.roomId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.roomId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.roomId}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Booking</button>
    </form>
  );
};
