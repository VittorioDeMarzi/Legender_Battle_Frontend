export default function YourHeroes({allHeroes}) {

  return (
    <>
      <section>
              <h3 className=" text-3xl">Your Heroes:</h3>
              <section>
                  {allHeroes.map(hero => <div><p>{hero.name}</p><p>{hero.heroType}</p></div>)}
              </section>
      </section>
    </>
  );
}
