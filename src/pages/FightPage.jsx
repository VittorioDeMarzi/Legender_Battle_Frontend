import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function FightPage() {
  const { userId } = useParams();
  const [url, setUrl] = "";

  const fight = async () => {
    const token = localStorage.getItem("token");

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
  };
  fight();

  return (
    <>
      <Navbar />
      <div>fight</div>
    </>
  );
}
