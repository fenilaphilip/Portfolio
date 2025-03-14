import SKILLS from "../assets/skills.js";
import softskills from "../media/softskills.jpg"

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img src={softskills} className="img-fluid" alt="soft skills" id="softskillspic" />
                    </div>
                    <div className="col-lg-7">
                        <h1 className="text-center text-primary heading"><span>Tools & Technology</span></h1>
                        <div className="row">
                            <div className="d-flex">
                                {SKILLS.map((skill) => <img className="m-1 p-1" src={skill.symbol} width="80" height="80" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}


{/* <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {
                        SKILLS.map((item) => {
                            return (
                                <div className="col" key={item.title}>
                                    <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg">
                                        <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
                                            <h3>{item.title}</h3>
                                            <ul>
                                                {item.skills.map((skill) => {
                                                    return (
                                                        <li key={skill.name} >
                                                            {skill.name}
                                                        </li>
                                                    )
                                                }

                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div> */}

{/* <div className="col-lg-7">
                         <img src="https://skillicons.dev/icons?i=ts,js,php,html,css,react,redux,bootstrap,materialui,tailwind,nextjs,jquery,git,npm,nodejs,express,vscode,jest,cypress,babel,github,postgres,mongodb,mysql,postman,vite,figma,sass,vim,&theme=dark" />
                    </div> */}