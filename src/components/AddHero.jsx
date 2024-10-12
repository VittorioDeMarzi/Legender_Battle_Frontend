import { useState } from "react";

export default function AddHero({ setReload }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("0");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  function addHero() {
    const token = localStorage.getItem("token");

    fetch(import.meta.env.VITE_BACKEND + "api/v1/legender_battle/hero", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, type }),
    }).then((response) => {
      if (response.ok) setReload((old = !old));
    });
  }

  return (
    <>
      <div className="flex justify-between">
        <input
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered text-black"
          type="text"
        />

        <div>
          <label htmlFor="type-select">Type:</label>
          <select id="type-select" value={type} onChange={handleChange}>
            <option value="" disabled>--Please choose an option--</option>
            <option value="1">Rookie (1-10)</option>
            <option value="2">Normal (11-30)</option>
            <option value="3">Veteran (31-50)</option>
            <option value="4">Legender (51-80)</option>
          </select>

          {/* Optionally, display the selected type */}
          {type && <p>Selected Type: {type}</p>}
        </div>
        <button onClick={addHero} className="btn btn-secondary">
          Add Hero
        </button>
      </div>
    </>
  );
}
