import Website from "./Website";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container px-4 py-5">
                <h2 className="pb-2 ">PROJECTS</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 py-5">
                    <Website />
                    <Website />
                    <Website />
                    <Website />
                </div>
            </div>
            <div className="d-flex justify-content-center  align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-light">See more</button>
                </div>
            </div>
        </section>
    )
}