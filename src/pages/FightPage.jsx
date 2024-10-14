import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function FightPage() {
  const { userId } = useParams();
  const [pointsAttacker, setPointsAttacker] = useState(0);
  const [pointsOpponent, setPointsOpponent] = useState(0);

  const [battleMessage, setBattleMessage] = useState("");

  const [url, setUrl] = useState("");

  useEffect(() => {
    const fight = async () => {
      const token = localStorage.getItem("token");
      console.log(`${userId}`);
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND
        }/api/v1/legender_battle/fight?userId=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setPointsAttacker(data.pointsAttacker);
      setPointsOpponent(data.pointsOpponent);
      setBattleMessage(data.battleMessage);
    };
    fight();
  }, [userId]);

  return (
    <>
        <Navbar />
      <section className="flex justify-center flex-col items-center gap-9 text-white">
        {pointsAttacker > pointsOpponent ? (
          <>
              <h2 className="text-xl ">You Win</h2>
            <div>
              <iframe
                src="https://giphy.com/embed/q9IQ8mjuXWNADp9ldB"
              ></iframe>
            </div>
          </>
        ) : (
          <>
            <h2>You Lose</h2>
              <div >
                <iframe src="https://giphy.com/embed/l3q2J7KgtglQ5GQH6"></iframe>
            
            </div>

          </>
        )}
        <p>Your points: {pointsAttacker}</p>
        <p>Opponents points: {pointsOpponent}</p>
        <p>{battleMessage}</p>
      </section>
    </>
  );
}
