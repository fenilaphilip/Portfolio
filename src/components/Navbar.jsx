import React, { useState } from "react";
import { NavLink } from "react-router";
import { LanguageContext } from "../store/LanguageContext";
import { NAVIGATION_EN } from "../assets/dataEN.js";
import { NAVIGATION_DE } from "../assets/dataDE.js";

export default function Navbar() {
    const [ENchecked, setENChecked] = useState(true);
    const { currentLanguage, toggleLanguage } = React.useContext(LanguageContext);
    const NAVIGATION = currentLanguage === "EN" ? NAVIGATION_EN : NAVIGATION_DE;

    function handleToggle(lang) {
        toggleLanguage(lang);
        setENChecked(!ENchecked);
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-primary">
                <div className="container">
                    <h5 className="navbar-brand text-secondary">PORTFOLIO</h5>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-target="#navmenu"
                        aria-controls="navmenu"
                        data-bs-toggle="collapse"

                    >
                        <span className="navbar-toggler-icon text-secondary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto" >
                            {NAVIGATION.map((item) => {
                                return (
                                    <li key={item.name} className="nav-item p-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                        <NavLink to={item.link} className="nav-link active p-0" aria-current="page">
                                            <h5>{item.name} </h5>
                                        </NavLink>
                                    </li>
                                )
                            })}
                            <li key="languageToggle" className="nav-item p-2">
                                <div className="language-toggle">
                                    <input
                                        type="radio"
                                        id="language-toggle-english"
                                        name="language"
                                        value="EN"
                                        onChange={(event) => handleToggle(event.target.value)}
                                        checked={ENchecked}
                                    />
                                    <label className="radio-button" htmlFor="language-toggle-english">EN</label>
                                    <input
                                        type="radio"
                                        id="language-toggle-german"
                                        name="language"
                                        value="DE"
                                        onChange={(event) => handleToggle(event.target.value)}
                                        checked={!ENchecked}
                                    />
                                    <label className="radio-button" htmlFor="language-toggle-german">DE</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}
