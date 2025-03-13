import { PROFILE } from "../assets/data"
import Skills from "./Skills"

export default function AboutMe() {
    return (
        <section id="about">
            <div className="container">
                <div className="row justify-content-center align-items-center mx-2 pt-3">
                    <div className="col-9 col-lg-3">
                        <div className="about_img p-4">
                            <img src={PROFILE.photo} alt="idea-images" />
                        </div>
                        {/* <div className="d-flex justify-content-between align-items-center">
                            <a href={PROFILE.resume} className="btn btn-sm btn-outline-dark me-3" target="_blank" download>RESUME</a>
                        </div> */}
                    </div>
                    <div className="content col-12 col-lg-6 p-4">
                        <div className="text-center">
                            <h1>About</h1>
                            <p className="mb-5">{PROFILE.about.map(para => {
                                return (
                                    <p className="p-2">
                                        {para}
                                    </p>
                                )
                            })}</p>

                        </div>
                    </div>
                </div>
            </div>
            <Skills />
        </section>
    )
}