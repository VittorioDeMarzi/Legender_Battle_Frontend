export default function YourHeroes({ allHeroes }) {
  return (
    <>
      <section>
        <h3 className="text-3xl min-h-8">Your Heroes:</h3>
        <section>
          {allHeroes.length === 0 ? (
            <p>No Heroes.</p> // Messaggio quando non ci sono eroi
          ) : (
            allHeroes.map((hero) => (
              <div className="flex gap-7">
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
