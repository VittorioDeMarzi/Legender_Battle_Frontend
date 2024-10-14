import { useEffect } from "react";
import Navbar from "../components/Navbar";
import TeamInfo from "../components/TeamInfo";
import OpponentList from "../components/OpponentList";

export default function ChooseOpponentPage() {


  return(
    <>
      <Navbar />
      <section className="grid grid-cols-1 gap-4 p-8">
        <TeamInfo />
        <OpponentList />
      </section>
    </>
  );
}
