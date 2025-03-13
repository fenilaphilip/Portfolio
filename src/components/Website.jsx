import { useState } from "react"

export default function Website({ project }) {
    const [toggleCard, setToggleCard] = useState(false);
    function flipCard(event) {
        event.preventDefault();
        setToggleCard(!toggleCard);
    }

    return (
        <div className="p-3" key={project.id}>
            {!toggleCard && (
                <div className="card shadow-sm p-2">
                    <img src={project.img} alt={project.img_alt} width="100%" height="220" />
                    <div className="card-body">
                        <h3>{project.caption}</h3>
                        <p className="card-text">
                            Tech stack
                        </p>
                        <div className="d-flex justify-content-between align-items-center ">
                            <div className="btn-group">
                                <a href="" target="_blank" className="btn btn-sm  btn-outline-dark" onClick={flipCard}>Read me</a>
                            </div>

                            <div className="btn-group">
                                <a href={project.link} target="_blank" className="btn btn-sm  btn-outline-dark">Open site</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {toggleCard && (
                <div className="card shadow-sm p-2">
                    <div className="card-body">
                        <h3>{project.caption}</h3>
                        <p className="card-text">
                            {project.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <a href={project.link} target="_blank" className="btn btn-sm  btn-outline-dark">Open site</a>
                            </div>
                            <div className="btn-group">
                                <a href="" onClick={flipCard} className="btn btn-sm  btn-outline-dark">Go Back</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}