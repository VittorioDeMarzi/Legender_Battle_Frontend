export default function YourHeroes({ allHeroes }) {
  return (
    <>
      <section className="flex flex-col justify-center text-center min-h-40 mb-9 text-black bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-96 mx-auto">
        <h3 className="text-3xl text-red-700 mb-6">Your Heroes:</h3>
        <section className="flex flex-col w-60 text-center mx-auto">
          {allHeroes.length === 0 ? (
            <p>No Heroes.</p> 
          ) : (
            allHeroes.map((hero) => (
              <div key={hero.name} className="flex justify-between">
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
