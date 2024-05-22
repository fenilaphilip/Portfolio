import girlImg from "../media/girl.jpg";

export default function HomePage() {
    return (
        <section id="home">
            <div className="container">
                <div className="row p-2 mt-5 ">
                    <div className="col-sm-12 col-lg-6">
                        <img src={girlImg} alt="photo of girl" width="500" height="800" />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <h1>FENILA SOSA PHILIP</h1>
                        <h2>FRONTEND DEVELOPER</h2>
                        <p>
                            I'm a self-taught Front-end Developer based in Berlin with a passion
                            for technology, learning, and solving real-world problems through
                            code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}