import NAVBAR_ITEM from "../../data";

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

                            {
                                NAVBAR_ITEM.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a href={item.link} className="nav-link px-2 text-white">
                                                {item.title}
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </header>
        </section>
    )
}