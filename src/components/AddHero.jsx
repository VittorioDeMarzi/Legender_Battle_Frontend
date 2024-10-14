import { useState } from "react";

export default function AddHero({ setReload }) {
  const [name, setName] = useState("");
  const [heroTypeId, setHeroTypeId] = useState("0");

  const handleChange = (event) => {
    setHeroTypeId(event.target.value);
  };

  function addHero() {
    const token = localStorage.getItem("token");

    fetch(import.meta.env.VITE_BACKEND + "/api/v1/legender_battle/hero", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, heroTypeId }),
    }).then((response) => {
      console.log(response.status, response.statusText); // Logga lo status della risposta
      if (response.ok) setReload((old) => !old);
      else console.error("Error:", response.statusText);
    });
  }

  return (
    <>
      <div className="flex justify-around flex-col bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-96">
        <div className="flex flex-col">
          <label htmlFor="" className="block text-gray-700">Hero Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="type-select" className="block text-gray-700">Type:</label>
          <select id="type-select" value={heroTypeId} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded">
            <option value="" disabled>
              --Please choose an option--
            </option>
            <option value="1">Rookie (1-10)</option>
            <option value="2">Normal (11-30)</option>
            <option value="3">Veteran (31-50)</option>
            <option value="4">Legender (51-80)</option>
          </select>
        </div>
        <button onClick={addHero} className="bg-orange-600 text-white font-bold p-2 rounded">
          Add Hero
        </button>
      </div>
    </>
  );
}
