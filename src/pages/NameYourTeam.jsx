import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NameZourTeam() {
  const [teamName, setTeamName] = useState("");

  function submitName() {
      const name = teamName;
      const token = localStorage.getItem('token');

    fetch(
      import.meta.env.VITE_BACKEND + "/api/v1/legender_battle/auth/team",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          },
        body: JSON.stringify({"teamName": teamName})
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Error");
      })
      .then(navigate("/userhome"));
  }

  return (
    <section className="flex flex-col justify-center items-center absolute inset-0 ">
      <h1 className="font-bold text-8xl p-9 text-center">
        Name your legendary team
      </h1>
      <input
        type="text"
        onChange={(e) => setTeamName(e.target.value)}
        required
        placeholder="Write here"
        className="mt-1 block p-2 border border-gray-300 rounded w-1/2 mb-9"
      />
      <button
        onClick={submitName}
        className="p-11 bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 rounded mb-5"
      >
        Enter
      </button>
    </section>
  );
}
