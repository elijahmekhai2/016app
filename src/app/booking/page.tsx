"use client";
import BookingForm from "../components/bookingform";
import Button from "../components/Button";

export default function Booking() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-serif text-sm lg:flex">
        <BookingForm isEng={false} />
        <div></div>
      </div>
    </main>
  );
}
