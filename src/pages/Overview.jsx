import HeroesSection from "../components/HeroesSection";
import Navbar from "../components/Navbar";
import TeamInfo from "../components/TeamInfo";
import YourHeroes from "../components/YourHeroes";

export default function Overview() {
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-3 gap-4">
              <TeamInfo />
              <HeroesSection />
      </section>
    </>
  );
}
