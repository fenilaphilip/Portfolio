import Website from "./Website";

import MY_WORKS from "../assets/myworks"

export default function Projects() {
    return (
        <section id="projects" >
            <div className="container">
                <h2 className="text-center pt-2">My Works</h2>
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 py-5">
                    {MY_WORKS.map((project) => {
                        return (<Website key={project.id} project={project} />)
                    })}
                </div>
            </div>
        </section>
    )
}