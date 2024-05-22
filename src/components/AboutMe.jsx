import FenPhoto from "../media/fen.jpg";

export default function AboutMe() {
    return (
        <section>
            <div className="container px-4 py-5">
                <h2 className="pb-2 ">ABOUT ME</h2>
                <div className="row pt-5 mt-5">
                    <div className="col-sm-12 col-lg-6">
                        <img src={FenPhoto} alt="photo of Fenila" width={250} height={300} />
                        <ul className="pt-2 list-unstyled ">
                            <li>
                                <h4>Fenila Sosa Philip</h4>
                            </li>
                            <li>
                                She / Her
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
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-light">RESUME</button>
                            </div>

                        </div>
                    </div>
                    <div class="mt-5 col-lg-6">
                        <p class="pt-5">
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