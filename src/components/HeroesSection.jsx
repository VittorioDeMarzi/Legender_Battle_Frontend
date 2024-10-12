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
        <section>
            <h3 className=" text-3xl">Your Heroes:</h3>
            <YourHeroes allHeroes={allHeroes} />
            <AddHero setReload={setReload} />
        </section>
    )
}