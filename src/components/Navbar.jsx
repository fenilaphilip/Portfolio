import NavButton from "./NavButton";

export default function Navbar() {
    return (
        <section>
            <header className="p-3">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
                    >
                        <ul
                            className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
                        >
                            <NavButton link="#" buttonName="Home" />
                            <NavButton link="#" buttonName="Skills" />
                            <NavButton link="#" buttonName="Projects" />
                            <NavButton link="#" buttonName="About" />
                            <NavButton link="#" buttonName="Contact" />
                        </ul>
                    </div>
                </div>
            </header>
        </section>
    )
}