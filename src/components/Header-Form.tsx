"use client"

import { useState } from "react"

export function HeaderForm() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white shadow-md">
            <div className="max-w-5xl mx-auto flex items-center justify-between p-4 sm:p-2">
                <h1 className="text-lg font-semibold">Mon Portfolio</h1>

                {/* Bouton burger mobile */}
                <button onClick={toggleMenu} className="sm:hidden">
                    {isOpen ? (
                        // Croix (fermer)
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Menu (burger)
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Liens desktop */}
                <nav className="hidden sm:flex gap-4">
                    <a href="#presentation" className="hover:underline">Présentation</a>
                    <a href="#technos" className="hover:underline">Technologies</a>
                    <a href="#projets" className="hover:underline">Projets</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
            </div>

            {/* Liens mobile */}
            {isOpen && (
                <nav className="sm:hidden flex flex-col items-center gap-2 pb-4">
                    <a href="#presentation" className="hover:underline" onClick={toggleMenu}>Présentation</a>
                    <a href="#technos" className="hover:underline" onClick={toggleMenu}>Technologies</a>
                    <a href="#projets" className="hover:underline" onClick={toggleMenu}>Projets</a>
                    <a href="#contact" className="hover:underline" onClick={toggleMenu}>Contact</a>
                </nav>
            )}
        </header>
    )
}
