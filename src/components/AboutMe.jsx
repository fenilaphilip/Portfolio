import { PROFILE } from "../assets/data"
import Skills from "./Skills";
import Footer from "./Footer";
import softskills from "../media/softskills.jpg"

export default function AboutMe() {

    return (
        <section id="about">
            <div className="container">
                <div className="row align-items-center mt-5">
                    <div className="col-lg-7">
                        <h1 className="text-primary heading"> <span>About Me</span></h1>
                        <p className="mb-5">
                            {PROFILE.about.map(para => {
                                return (
                                    <p className="p-2">
                                        {para}
                                    </p>
                                )
                            })}
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <img src={softskills} className="img-fluid" alt="my photo" />
                    </div>
                </div>
            </div>
            <Skills />
            <Footer />
        </section>
    )
}