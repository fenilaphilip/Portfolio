import { PROFILE } from "../assets/data"

export default function AboutMe() {
    return (
        <section id="about">
            <div className="container px-4 py-5">
                <h2 className="mt-5 pb-2 text-center text-dark">ABOUT ME</h2>
                <div className="row pt-3">
                    <div className="col-sm-12 col-lg-3">
                        <img src={PROFILE.photo} alt="photo of Fenila" width={250} height={300} />
                        <ul className="pt-2 list-unstyled text-dark ">
                            <li>
                                <h4>Fenila Sosa Philip</h4>
                            </li>
                            <li>
                                Frontend Developer
                            </li>
                            <li>
                                &
                            </li>
                            <li>
                                Civil Engineer
                            </li>
                        </ul>
                        <div className="d-flex justify-content-between align-items-center">
                            <a href={PROFILE.resume} className="btn btn-sm btn-outline-dark me-3" target="_blank" download>RESUME</a>
                        </div>
                    </div>
                    <div className="mt-5 col-lg-8 text-dark">
                        <p className="p-2">
                            Amet justo donec enim diam vulputate ut pharetra sit. Nulla facilisi cras fermentum odio eu. Suspendisse sed nisi lacus sed viverra tellus in hac. Nulla aliquet porttitor lacus luctus accumsan. Pulvinar etiam non quam lacus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. A lacus vestibulum sed arcu non. Cras fermentum odio eu feugiat
                        </p>
                        <hr />
                        <h4>Back story</h4>
                        <p>
                            Amet justo donec enim diam vulputate ut pharetra sit. Nulla facilisi cras fermentum odio eu. Suspendisse sed nisi lacus sed viverra tellus in hac. Nulla aliquet porttitor lacus luctus accumsan. Pulvinar etiam non quam lacus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. A lacus vestibulum sed arcu non. Cras fermentum odio eu feugiat
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}