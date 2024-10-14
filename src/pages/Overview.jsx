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
      <section className="items-center p-8 flex flex-col item-centre gap-16">
      <TeamInfo />
        <HeroesSection />
      <ChooseHeroes />
      </section>
    </>
  );
}
