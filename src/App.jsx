import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <section className=" flex flex-col justify-center items-center absolute inset-0">
        <h1 className=" font-bold text-8xl p-9 text-center">Are you ready to fight?</h1>
        <Link to="/login">
          <h1>
            <button className="bg-orange-600 text-white font-bold py-2 rounded p-10">
              GO TO THE BATTLE
            </button>
          </h1>
        </Link>
      </section>
    </>
  );
}
