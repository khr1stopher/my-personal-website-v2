import React, { useState } from "react";

export const NavBar = () => {
    const [mode, setmode] = useState(true)

    const toggleMode = () => {
        setmode(!mode);
    };

    return <header className="nav-bar p-4 border-b">
        <div className="contenedor flex items-center justify-between px-2 max-w-7xl m-auto ">
            <a href="/" className="nav-bar title font-bold">
                Khristopher
            </a>
            <div className="menus">
                <button onClick={toggleMode}> {mode ? '🌙' : '🌞'} </button>
            </div>
        </div>
    </header>
}