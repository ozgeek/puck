import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Section} from "../Section";

const Header = ({ editMode }: { editMode: boolean }) => (
    <Section>
        <div className="bg-white lg:pb-12">
            <div className="mx-auto px-4 md:px-8">
                <header className="flex items-center justify-between py-4 md:py-8">
                    <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                       aria-label="logo">
                        Foutapro
                    </a>

                    <nav className="hidden gap-12 lg:flex">
                        <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Accueil</a>
                        <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Nos produits</a>
                        <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Nos services</a>
                    </nav>

                    <div
                        className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                        <a href="#"
                           className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base">A propos</a>

                        <a href="#"
                           className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Contactez-nous</a>
                    </div>

                    <button type="button"
                            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"/>
                        </svg>

                        Menu
                    </button>
                </header>
            </div>
        </div>
    </Section>
)

export {Header}