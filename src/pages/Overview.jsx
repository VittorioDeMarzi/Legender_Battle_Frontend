import HeroesSection from "../components/HeroesSection";
import Navbar from "../components/Navbar";
import TeamInfo from "../components/TeamInfo";
import YourHeroes from "../components/YourHeroes";
import { useState } from "react";
import AddHero from "../components/AddHero";
import ChooseHeroes from "../components/ChooseHeroes";

export default function Overview() {


  return (

    <>
      <Navbar />
      <section className="grid grid-cols-1 gap-4 p-8">
        <TeamInfo />
        <HeroesSection />
        <ChooseHeroes className=" text-center" />  
      </section>
    </>
  );
}
