import { useState, useEffect } from "react";

export default function TeamInfo() {
  const [teamName, setTeamName] = useState("");
  const [hasTeam, setHasTeam] = useState(false);
  const [wins, setWins] = useState(0);
  const [loses, setLose] = useState(0);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    loadTeamData();
  }, []);

  function loadTeamData() {
    const token = localStorage.getItem("token");

    fetch(import.meta.env.VITE_BACKEND + "/api/v1/legender_battle/team", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setHasTeam(true);
          return response.json();
        } else if (response.status == 404) {
          setHasTeam(false);
          return null;
        }
      })
      .then((data) => {
        if (data) {
          setTeamName(data.teamName);
          setWins(data.wins);
          setLose(data.loses);
        }
      })
      .catch((error) => {
        console.error("Error loading team data:", error);
      });
  }

  function createTeam() {
    const token = localStorage.getItem("token");

    console.log(JSON.stringify(teamName));

    fetch(import.meta.env.VITE_BACKEND + "/api/v1/legender_battle/team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ teamName }),
    }).then((response) => {
      if (response.ok) return response.json();
      return response
        .text()
        .then((text) => {
          // Logga il codice di stato e il messaggio di errore
          throw new Error(`Error ${response.status}: ${text}`);
        })
        .then((data) => {
          setHasTeam(true);
          setTeamName(data.teamName);
          setWins(data.wins);
          setLose(data.loses);
          setReloadData((prev) => !prev);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error creating team:", error);
        });
    });
  }

  return (
    <>
      <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-xl shadow-white text-black col-span-2 w-full flex flex-col justify-around text-center mb-8">
        {hasTeam ? (
          // If User has already a team
          <>
            
            <div className="flex justify-around">
              <p>{teamName}</p>
              <p>wins: {wins}</p>
              <p>loses {loses}</p>
            </div>
          </>
        ) : (
          // If the User doesn't, it is possible to add one
          <div className="grid grid-col gap-4">
            <h1>Create Your Team</h1>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Enter your team name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
            <button className=" hover:bg-orange-400 bg-orange-600 text-white font-bold py-2 rounded mb-5" onClick={createTeam}>Create Team</button>
          </div>
        )}
      </div>
    </>
  );
}
