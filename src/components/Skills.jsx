import SKILLS from "../assets/skills.js";
import techskills from "../media/techskills.jpg"

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <img src={techskills} className="img-fluid" alt="soft skills" id="techskillpic" />
                    </div>
                    <div className="col-lg-8">
                        <h1 className="text-center text-primary heading"><span>Tools & Technology</span></h1>
                        <div className="row">
                            <div>
                                {SKILLS.map((skill) => <img className="m-1 p-1" src={skill.symbol} alt={skill.name} width="80" height="80" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}