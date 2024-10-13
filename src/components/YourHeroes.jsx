export default function YourHeroes({ allHeroes }) {
  return (
    <>
      <section className=" col-span-1  min-h-40 mb-9">
        <h3 className="text-3xl">Your Heroes:</h3>
        <section>
          {allHeroes.length === 0 ? (
            <p>No Heroes.</p> 
          ) : (
            allHeroes.map((hero) => (
              <div key={hero.name} className="flex gap-7">
                <p>{hero.name}</p>
                <p>{hero.heroType}</p>
              </div>
            ))
          )}
        </section>
      </section>
    </>
  );
}
