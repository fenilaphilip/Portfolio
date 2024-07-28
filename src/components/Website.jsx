import MY_WORKS from "../assets/myworks"

export default function Website() {
    return (
        <>
            {
                MY_WORKS.map((project) => {
                    return (
                        <div className="p-3" key={project.id}>
                            <div className="card shadow-sm p-2">
                                <img src={project.img} alt={project.img_alt} width="100%" />
                                <div className="card-body ">
                                    <h3>{project.caption}</h3>
                                    <p className="card-text">{project.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <a href={project.link} target="_blank" className="btn btn-sm btn-outline-dark">Live View</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}