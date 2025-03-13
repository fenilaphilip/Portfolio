import { PROFILE } from "../assets/data";
import ContactForm from "./ContactForm";
import { CONTACT_INFO } from "../assets/data";
import programmingGirl from "../media/programmingGirl.jpg"

export default function HomePage() {

    return (
        <section id="home" >
            <div className="container">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-primary">{PROFILE.name}</h1>
                        <br />
                        <h4 >{PROFILE.job}</h4>
                        <hr />
                        <p className="lead">
                            {PROFILE.intro}
                        </p>
                        <br />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <ContactForm />
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden pt-0" id="homepageImg">
                        <img className="img-fluid rounded-lg-3" src={programmingGirl} alt="" width="720" />
                    </div>
                </div>
                <div className="d-flex px-5 m-2">
                    <h5><stong>Connect:</stong></h5>
                    {
                        CONTACT_INFO.map((contact) => {
                            return (
                                <span className="ms-3" key={contact.name}>
                                    <a className="text-body-light"
                                        href={contact.link}>
                                        <img /> {contact.name}
                                    </a>
                                </span>
                            );
                        })
                    }
                </div>
            </div>
            <div className="bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
        </section >
    )
}