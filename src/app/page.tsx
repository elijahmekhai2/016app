"use client";
import Button from "../components/Button";
import "./style.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-serif text-sm lg:flex">
        <div className="container">
          <div>Welcome to 016!</div>
          <div className="basis-1/3">
            <Button title="Home" path="/" />
          </div>
          <div className="basis-1/3">
            <Button title="Info" path="/info" />
          </div>
          <div className="basis-1/3">
            <Button title="Book" path="/booking" />
          </div>
        </div>
      </div>
    </main>
  );
}
