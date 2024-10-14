export default function TeamCard({ team, onClick }) {

    return (
        <div className="w-96 bg-white bg-opacity-75 p-6 rounded-lg shadow-xl shadow-white text-black">
            <div className="">
                <h2 className="">{team.teamName}</h2>
                <p>wins: {team.wins}</p>
                <p>loses: {team.loses}</p>
                <div className="justify-end">
                    <button  onClick={onClick} className="bg-orange-600 text-white font-bold p-2 rounded">FIGHT NOW</button>
                </div>
            </div>
        </div>
    )
}