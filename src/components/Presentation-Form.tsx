"use client"

export function PresentationForm() {
    return (
        <div id="presentation" className="scroll-mt-16 bg-gray-700 text-white p-6">
            <img src="/image/pp.jpeg" alt="Photo de profil" className="w-32 h-32 rounded-full mx-auto my-4" />
            <h1 className="text-2xl font-bold text-center">Alex Valauney</h1>
            <p className="text-center mt-1 text-sm">
                DÉVELOPPEUR FULL-STACK<br />
                EN RECHERCHE D'ALTERNANCE
            </p>
            <h2 className="text-xl font-semibold mt-6">Présentation :</h2>
            <p className="mt-2">
                Ancien dessinateur industriel de 23 ans, je me réoriente vers le développement web,
                un domaine qui me passionne depuis l’enfance. Mon objectif : créer des solutions numériques
                accessibles pour les personnes en situation de handicap et les seniors.
            </p>
        </div>
    )
}
