import Website from "./Website";
import backgroundImg from "../media/background.jpg";
import MY_WORKS from "../assets/myworks"
import Footer from "./Footer";

export default function Projects() {
    return (
        <section id="projects" >
            <div className="container">
                <div style={{ position: "relative", overflow: "hidden" }} className="row">
                    <img src={backgroundImg} alt="" className="img-fluid p-0" />
                    <div style={{ position: "absolute", top: " 50%", left: "50%", transform: " translate(-50%, -50%)", fontSize: "24px", fontWeight: "bold", textAlign: "center" }} >
                        <h2 className="text-primary"><em> Discover some of My works & Experiments </em></h2>
                    </div>
                </div>
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 pt-1  bg-secondary">
                    {MY_WORKS.map((project) => {
                        return (<Website key={project.id} project={project} />)
                    })}
                </div>
            </div>
            <Footer />
        </section>
    )
}