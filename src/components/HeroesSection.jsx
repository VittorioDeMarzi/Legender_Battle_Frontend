import { useEffect, useState } from "react";
import YourHeroes from "./YourHeroes";
import AddHero from "./AddHero";

export default function HeroesSection() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchHeroes = async () => {
      const response = await fetch(
        import.meta.env.VITE_BACKEND + "/api/v1/legender_battle/hero/list",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setAllHeroes(data);
    };
    fetchHeroes();
  }, [reload]);

  return (
    <section className="flex flex-col justify-between">
      <YourHeroes allHeroes={allHeroes} />
      <AddHero setReload={setReload} />
    </section>
  );
}
