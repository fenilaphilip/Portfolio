import { PROFILE } from "../assets/data"
import Skills from "./Skills";
import Footer from "./Footer";
import softskills from "../media/skills.png"

export default function AboutMe() {

    return (
        <section id="about">
            <div className="container">
                <div className="row align-items-center mt-5">
                    <div className="col-lg-7">
                        <h1 className="text-primary heading"> <span>About Me</span></h1>
                        <p>
                            {PROFILE.about.map(para => {
                                return (
                                    <p className="p-2">
                                        {para}
                                    </p>
                                )
                            })}
                            <div className="p-2"><span className="text-primary">Languages spoken :</span> German, English</div>
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