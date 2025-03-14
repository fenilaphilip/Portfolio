import Website from "./Website";
import backgroundImg from "../media/background.jpg";
import MY_WORKS from "../assets/myworks"

export default function Projects() {
    return (
        <section id="projects" className="bg-secondary" >
            <div className="container">
                <div style={{ position: "relative" }} >
                    <img src={backgroundImg} alt="" className="img-fluid m-0 p-0" />
                    <div style={{ position: "absolute", top: " 50%", left: "50%", transform: " translate(-50%, -50%)", color: "black", fontSize: "24px", fontWeight: "bold", textAlign: "center" }} >
                        <h2 className="text-primary">  <em> Discover some of My works & Experiments</em></h2>
                    </div>
                </div>
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 pt-1">
                    {MY_WORKS.map((project) => {
                        return (<Website key={project.id} project={project} />)
                    })}
                </div>
            </div>
        </section>
    )
}