import { NAVBAR_ITEM } from "../assets/data";
import { FaCode } from "react-icons/fa";


export default function Navbar() {

    return (
        <nav id="menu" className="navbar navbar-expand-md navbar-dark fixed-top" >
            <div className="container">
                <a className="navbar-brand mx-2 me-3" href="#home">
                    f_<FaCode />_p
                </a>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto  gap-3 mb-2 mb-md-0">
                        {
                            NAVBAR_ITEM.map((item) => {
                                return (
                                    <li className="topnav nav-item" key={item.id}>
                                        <a href={item.link} className="nav-link  p-0 w-100">
                                            <span data-bs-toggle="collapse"
                                                className="w-100 d-block p-2"
                                                data-bs-target=".navbar-collapse.show"
                                            >
                                                {item.title}
                                            </span>
                                        </a>
                                    </li>
                                );
                            })
                        }

                    </ul>

                </div>
            </div>
        </nav >
    );
}