import React from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    const base = import.meta.env.BASE_URL;
    return (
        <header>
            <nav>
                <img src={`${base}logo.svg`} alt="Apple Logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex-center gap-3">
                    <button>
                        <img src={`${base}search.svg`} alt="Search" />
                    </button>
                    <button>
                        <img src={`${base}cart.svg`} alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;