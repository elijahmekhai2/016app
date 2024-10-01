"use client";
import Button from "../components/Button";
import Header from "../components/Navbar";

export default function Info() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full h-screen max-w-5xl items-center justify-between font-Serif text-sm lg:flex">
        <h1>info</h1>
        <h2>Artist</h2>
        <Button title="Jay53" path="/artist/jay53" />
        <Button title="aro" path="/artist/aro" />
        <Button title="mxmxnt" path="/artist/mxmxnt" />
        <Button title="Prod. by EOTW" path="/artist/prodbyeotw" />
      </div>
    </main>
  );
}
