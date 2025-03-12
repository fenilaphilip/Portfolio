import girlImg from "../media/girl.jpg";
import { PROFILE } from "../assets/data";
import ContactForm from "./ContactForm";

export default function HomePage() {

    return (
        <section id="home" >
            <div className="container my-5 mt-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">{PROFILE.name}</h1>
                        <p className="lead">{PROFILE.job}</p>
                        <hr />
                        <p className="lead">
                            {PROFILE.intro}
                        </p>
                        <p className="lead">{PROFILE.dream} </p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <ContactForm />

                        </div>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg pt-0">
                        <img class="rounded-lg-3" src={girlImg} alt="" width="720" height="770" />
                    </div>
                </div>
            </div>

        </section >
    )
}