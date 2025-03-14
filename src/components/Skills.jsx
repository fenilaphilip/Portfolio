import SKILLS from "../assets/skills.js";
import softskills from "../media/softskills.jpg";
import techskills from "../media/techskills.jpg"

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img src={techskills} className="img-fluid" alt="soft skills" id="softskillspic" />
                    </div>
                    <div className="col-lg-7">
                        <h1 className="text-center text-primary heading"><span>Tools & Technology</span></h1>
                        <div className="row">
                            <div>
                                {SKILLS.map((skill) => <img className="m-1 p-1" src={skill.symbol} width="80" height="80" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}