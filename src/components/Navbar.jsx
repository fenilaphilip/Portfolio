import { NAVBAR_ITEM } from "../assets/data";
import { FaCode } from "react-icons/fa";


export default function Navbar() {
    return (
        <nav id="menu" className="navbar navbar-expand-md navbar-dark fixed-top" >
            <div className="container">
                <a className="navbar-brand mx-2" href="#">
                    <FaCode /> e-nila <FaCode />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto  gap-3 mb-2 mb-md-0">
                        {
                            NAVBAR_ITEM.map((item) => {
                                return (
                                    <li className="topnav nav-item" key={item.id}>
                                        <a href={item.link} className="nav-link  px-2">
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })
                        }

                    </ul>

                </div>
            </div>
        </nav>
    );
}