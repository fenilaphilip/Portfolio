

export default function Website({ project }) {
    return (
        <div className="p-1" key={project.id} >
            <div className="card shadow-sm p-2">
                <div className="row">
                    <div className="col-10">
                        <h4 className="text-primary">{project.caption}</h4>
                    </div>
                    <div className="col-2">
                        <a href={project.gitrepo} target="_blank">
                            <img src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" width={30} />
                        </a>
                    </div>
                </div>
                <div className="border border-primary rounded p-3">
                    <a href={project.link} target="_blank">
                        <img src={project.img} alt={project.img_alt} width="100%" height="220" className="rounded" />
                    </a>
                </div>
                <div className="mt-2">
                    {project.techStack.map((tech) => {
                        return <img src={tech.src} alt={tech.alt} className="p-1 rounded img-fluid" />
                    })}
                </div>
            </div>
        </div >
    )
}