import { useEffect, useState } from "react";
import YourHeroes from "./YourHeroes";
import AddHero from "./AddHero";

export default function HeroesSection() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(import.meta.env.VITE_BACKEND + "/api/v1/legender_battle/hero/list", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        else console.log()
      })
      .then((data) => setAllHeroes(data));
  }, [reload]);

  return (
    <section className="flex flex-col justify-between">
      <YourHeroes allHeroes={allHeroes} />
      <AddHero setReload={setReload}/>
      
    </section>
  );
}
