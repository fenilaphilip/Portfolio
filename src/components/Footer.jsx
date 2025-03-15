import { CONTACT_INFO } from "../assets/data";

export default function Footer() {
    return (
        <section id="footer">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-light">All rights reserved @ Fenila</span>
                </div>
                <ul className=" col-md-4 justify-content-end list-unstyled d-flex">
                    {
                        CONTACT_INFO.map((contact) => {
                            return (
                                <li className="ms-3" key={contact.name}>
                                    <a className="text-body-light"
                                        href={contact.link}>
                                        {contact.name}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </footer>
        </section>
    )
}