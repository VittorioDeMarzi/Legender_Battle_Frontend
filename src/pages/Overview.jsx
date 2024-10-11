import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Overview() {
  const [teamName, setTeamName] = useState("");
  const [hasTeam, setHasTeam] = useState(false);
  const [wins, setWins] = useState(0);
  const [loses, setLose] = useState(0);

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
      .then((data) => {
        loadTeamData();
      });
  }

  function createTeam() {
    const token = localStorage.getItem("token");

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
        })
        .catch((error) => {
          console.error("Error creating team:", error);
        });
    });
  }

  return (
    <>
      <div>
        {hasTeam ? (
          // Se l'utente ha già un team, lo mostri
          <div>
            <h1>Your Team</h1>
            <p>Team Name: {teamName}</p>
            <p>wins: {wins}</p>
            <p>loses {loses}</p>
          </div>
        ) : (
          // Se l'utente non ha un team, permetti di crearne uno
          <div>
            <h1>Create Your Team</h1>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Enter your team name"
            />
            <button onClick={createTeam}>Create Team</button>
          </div>
        )}
      </div>
    </>
  );
}
