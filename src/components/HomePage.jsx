import girlImg from "../media/girl.jpg";
import { PROFILE } from "../assets/data";

export default function HomePage() {
    return (
        <section id="home">
            <div className="container">
                <div className="row p-2 mt-5 ">
                    <div id="introImg" className="col-sm-12 col-lg-6">
                        <img src={girlImg} alt="photo of girl" width="500" height="700" />
                        <div id="fenPhoto">
                            <img src={PROFILE.photo} alt="photo of Fenila" width="250" height="300" />
                        </div>
                    </div>
                    <div id="intro" className="pt-5 col-sm-12 col-lg-6">
                        <div id="myPhoto">
                            <img src={PROFILE.photo} alt="photo of Fenila" width="250" height="300" />
                        </div>
                        <h1 className="mt-5">FENILA SOSA PHILIP</h1>
                        <h2>FRONTEND DEVELOPER</h2>
                        <p>
                            {PROFILE.intro}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <a href={PROFILE.resume} className="btn btn-sm btn-outline-light me-3" target="_blank" download>RESUME</a>
                                <button type="button" className="btn btn-sm btn-outline-light">CONTACT</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}