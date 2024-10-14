import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamCard from "./TeamCard";

export default function OpponentList() {
  const navigate = useNavigate();
  const [allPublicTeams, setAllPublicTeams] = useState([]);

  useEffect(() => {
    const LoadUsersTeams = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND +
            "/api/v1/legender_battle/team/anotherTeams",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setAllPublicTeams(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    LoadUsersTeams();
  }, []);

  const handleTeamClick = (userId) => {
    navigate(`/fight/${userId}`);
  };

  return (
    <section className="grid grid-cols-2">
      {allPublicTeams.map((team, index) => (
        <TeamCard
          key={index}
          team={team}
          onClick={() => handleTeamClick(team.userId)}
        />
      ))}
    </section>
  );
}
