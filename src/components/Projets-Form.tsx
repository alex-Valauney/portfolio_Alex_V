"use client"

export function ProjetsForm() {
    return (
        <div id="projets" className="scroll-mt-16 bg-gray-500 text-white p-6 space-y-6">
            <h2 className="text-xl font-bold mb-4">
                Différents projets de groupe réalisés avec Zone01 :
            </h2>

            {/* Projet Go */}
            <h3 className="text-lg font-semibold mb-2">Projet Go :</h3>
            <div className="bg-gray-700 p-4 rounded shadow-md max-w-max flex flex-wrap gap-4">
                <a className="flex flex-col items-center gap-2" href="https://github.com/alex-Valauney/groupie-tracker" target="_blank">
                    <img
                        src="/image/groupieTracker.png"
                        width="250"
                        alt="Groupie Tracker"
                        className="rounded border border-white"
                    />
                    <span className="text-center font-medium">Groupie Tracker</span>
                </a>
                <a className="flex flex-col items-center gap-2" href="https://github.com/alex-Valauney/lem-in" target="_blank">
                    <img
                        src="/image/LemIn.png"
                        width="250"
                        alt="Lem-in"
                        className="rounded border border-white"
                    />
                    <span className="text-center font-medium">Lem-in</span>
                </a>
            </div>

            {/* Projet JavaScript */}
            <h3 className="text-lg font-semibold mb-2">Projet JavaScript :</h3>
            <div className="bg-gray-700 p-4 rounded shadow-md max-w-max flex flex-wrap gap-4">
                <a className="flex flex-col items-center gap-2" href="https://github.com/alex-Valauney/make-your-game" target="_blank">
                    <img
                        src="/image/makeYourGame.png"
                        width="250"
                        alt="Make Your Game"
                        className="rounded border border-white"
                    />
                    <span className="text-center font-medium">Make Your Game</span>
                </a>
                <a className="flex flex-col items-center gap-2" href="https://github.com/alex-Valauney/real-time-forum" target="_blank">
                    <img
                        src="/image/RTF.png"
                        width="250"
                        alt="Real Time Forum"
                        className="rounded border border-white"
                    />
                    <span className="text-center font-medium">Real Time Forum</span>
                </a>
            </div>
        </div>
    )
}
