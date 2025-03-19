import SKILLS from "../assets/skills.js";
import techskills from "../media/techskills.jpg"

export default function Skills({ heading }) {
    return (
        <section id="skills">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <img src={techskills} className="img-fluid" alt="soft skills" id="techskillpic" />
                    </div>
                    <div className="col-lg-8">
                        <h1 className="text-center text-primary heading"><span>{heading}</span></h1>
                        <div className="row pt-3">
                            <div>
                                {SKILLS.map((skill) => <img className="m-1 p-1" src={skill.symbol} alt={skill.name} width="60" height="60" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}