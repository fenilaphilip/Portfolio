export default function Skills() {
    return (
        <section>
            <div className="container px-4 py-5">
                <h2 className="pb-2 ">SKILLS</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3>Languages</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3>Framework / Libraries</h3>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>JQuery</li>
                                    <li>React</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3>Tools</h3>
                                <ul>
                                    <li>VS code</li>
                                    <li>Git</li>
                                    <li>Github</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}