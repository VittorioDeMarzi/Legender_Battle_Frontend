import { useEffect, useState } from "react";
import YourHeroes from "./YourHeroes";
import AddHero from "./AddHero"

export default function HeroesSection() {
    const [reload, setReload] = useState(false)
    const [allHeroes, setAllHeroes] = useState([])


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
            })
            .then((data) => setAllHeroes(data));
    }, [reload]);
    
    return (
        <section className="flex flex-col justify-between min-w-28">
            <YourHeroes allHeroes={allHeroes} />
            <AddHero setReload={setReload} />
        </section>
    )
}