import { NAVBAR_ITEM } from "../../data";

export default function Navbar() {
    return (
        <nav id="menu" className="fixed-top">
            <div
                className="container p-3 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
            >
                <ul
                    className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0 gap-3"
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
        </nav>
    )
}