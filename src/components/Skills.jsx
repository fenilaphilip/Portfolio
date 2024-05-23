import { SKILLS } from "../../data.js";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-4 py-5">
                <h2 className="mt-5 pb-2 text-center">SKILLS</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {
                        SKILLS.map((item) => {
                            return (
                                <div className="col">
                                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                            <h3>{item.title}</h3>
                                            <ul>
                                                {item.names.map((name) => <li key={name}>{name}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>

        </section>

    )
}