import { NavLink } from "react-router";

export default function Navbar() {

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
                            <li className="nav-item p-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <NavLink to="/" className="nav-link active p-0" aria-current="page">
                                    <h5>HOME</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item p-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <NavLink to="/about" className="nav-link p-0">
                                    <h5>ABOUT</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item p-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <NavLink to="/projects" className="nav-link p-0">
                                    <h5>PROJECTS</h5>
                                </NavLink>
                            </li>
                            <li className="nav-item p-2">
                                <div className="language-toggle">
                                    <input type="radio" id="language-toggle-english" name="language" value="EN" checked />
                                    <label className="radio-button" for="language-toggle-english">EN</label>

                                    <input type="radio" id="language-toggle-german" name="language" value="DE" />
                                    <label className="radio-button" for="language-toggle-german"> DE</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}
