"use client"

export function ContactForm() {
    return (
        <div id="contact" className="scroll-mt-16 bg-gray-400 text-black p-6">
            <h2 className="text-lg font-semibold mb-2">Mes coordonnées :</h2>
            <ul>
                <li>
                    <a className="flex items-center gap-2" href="mailto:alex.valauney01@gmail.com">
                        <img src="/logo/mail.svg" width="25" height="25" alt="Mail" />
                        alex.valauney01@gmail.com
                    </a>
                    <a className="flex items-center gap-2" href="https://www.linkedin.com/in/alex-valauney-5b6467201/">
                        <img src="/logo/linkedin.svg" width="25" height="25" alt="LinkedIn" />
                        Linkedin
                    </a>
                    <a className="flex items-center gap-2" href="https://github.com/alex-Valauney">
                        <img src="/logo/github.svg" width="25" height="25" alt="GitHub" />
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
    )
}
