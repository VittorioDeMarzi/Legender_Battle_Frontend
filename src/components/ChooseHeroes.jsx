import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function ChooseHeroes() {
  const [rookies, setRookies] = useState([]);
  const [normals, setNormals] = useState([]);
  const [veterans, setVeterans] = useState([]);
    const [legends, setLegends] = useState([]);
    const navigate = useNavigate()
  const [selectedHeroes, setSelectedHeroes] = useState({
    rookie: "",
    normal1: "",
    normal2: "",
    veteran: "",
    legendary: "",
  });

  function fillSelect(heroTypeId, setHeroList) {
    const token = localStorage.getItem("token");

    fetch(
      `${
        import.meta.env.VITE_BACKEND
      }/api/v1/legender_battle/hero/getHeroList?heroTypeId=${heroTypeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error(`HTTP error! Status: ${response.status}`);
      })
      .then((res) => {
        setHeroList(res);
      })
      .catch((error) => {
        console.error("Error fetching heroes:", error);
      });
  }

  const handleSelectChange = (event, role) => {
    setSelectedHeroes((prev) => ({
      ...prev,
      [role]: event.target.value,
    }));
  };

  function submitHeroes() {
    const token = localStorage.getItem("token");
    const heroIds = {
      hero1Id: Number(selectedHeroes.rookie),
      hero2Id: Number(selectedHeroes.normal1),
      hero3Id: Number(selectedHeroes.normal2),
      hero4Id: Number(selectedHeroes.veteran),
      hero5Id: Number(selectedHeroes.legendary),
    };

    console.log(heroIds);
    console.log(selectedHeroes);
    fetch(
      `${
        import.meta.env.VITE_BACKEND
      }/api/v1/legender_battle/hero/setFightTeam`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(heroIds), // Send hero IDs
      }
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        console.log(response);
        return null;
      })
        .then(navigate("/choose-opponent"))
      .catch((error) => {
        console.error("Error selecting heroes:", error);
      });
  }

  useEffect(() => {
    fillSelect(1, setRookies);
    fillSelect(2, setNormals);
    fillSelect(2, setNormals);
    fillSelect(3, setVeterans);
    fillSelect(4, setLegends);
  }, []);
    
  return (
    <>
      <section className="col-span-2 bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-96 text-black grid grid-cols-1 gap-4">
        <h2>Choose here your Team for the fight </h2>
        <label>
          Rookie:
          <select
            id="rookieSelect"
            onChange={(e) => handleSelectChange(e, "rookie")}
          >
            <option value="" disabled selected>
              Select an Hero
            </option>
            {rookies.map((hero) => (
              <option key={hero.id} value={hero.id}>
                {hero.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Normal 1:
          <select
            id="normalSelect1"
            onChange={(e) => handleSelectChange(e, "normal1")}
          >
            <option value="" disabled selected>
              Select an Hero
            </option>
            {normals.map((hero) => (
              <option key={hero.id} value={hero.id}>
                {hero.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Normal 2:
          <select
            id="normalSelect2"
            onChange={(e) => handleSelectChange(e, "normal2")}
          >
            <option value="" disabled selected>
              Select an Hero
            </option>
            {normals.map((hero) => (
              <option key={hero.id} value={hero.id}>
                {hero.name}
              </option>
            ))}
          </select>
        </label>

        <label className="text-black">
          Veteran:
          <select
            id="veteranSelect"
            onChange={(e) => handleSelectChange(e, "veteran")}
          >
            <option value="" disabled selected>
              Select an Hero
            </option>
            {veterans.map((hero) => (
              <option key={hero.id} value={hero.id}>
                {hero.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Legendär:
          <select
            id="legendSelect"
            onChange={(e) => handleSelectChange(e, "legendary")}
          >
            <option value="" disabled selected>
              Select an Hero
            </option>
            {legends.map((hero) => (
              <option key={hero.id} value={hero.id}>
                {hero.name}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={submitHeroes}
          className="bg-orange-600 text-white font-bold p-2 rounded"
        >
          Choose Heroes
        </button>
      </section>
    </>
  );
}
