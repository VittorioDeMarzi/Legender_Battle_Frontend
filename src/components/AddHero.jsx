import { useState } from "react";

export default function AddHero({ setReload }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

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
      if (response.ok) setReload(old = !old);
    });
  }

  return (
    <>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered"
          type="text"
        />

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Hero Type
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => setType("Rookie")}>Rookie (1-10)</a>
            </li>
            <li>
              <a onClick={() => setType("Normal")}>Normal (11-30)</a>
            </li>
            <li>
              <a onClick={() => setType("Veteran")}>Veteran (31-50)</a>
            </li>
            <li>
              <a onClick={() => setType("Legender")}>Legender (51-80)</a>
            </li>
          </ul>
        </div>
        <button onClick={addHero} className="btn btn-secondary">
          Add Hero
        </button>
      </div>
    </>
  );
}
