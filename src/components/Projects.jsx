import Website from "./Website";

import MY_WORKS from "../assets/myworks"

export default function Projects() {
    return (
        <section id="projects">
            <div className="container px-4 py-5">
                <h2 className="mt-5 pb-2 text-center">PROJECTS</h2>
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 py-5">
                    {MY_WORKS.map((project) => {
                        return (<Website key={project.id} project={project} />)
                    })}
                </div>
                {/* <div className="d-flex  justify-content-end me-5">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-light ">See more</button>
                    </div>
                </div> */}
            </div>

        </section>
    )
}