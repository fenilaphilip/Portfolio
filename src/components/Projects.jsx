import React, { useContext } from "react";
import { LanguageContext } from "../store/LanguageContext";
import Website from "./Website";
import backgroundImg from "../media/background.jpg";
import MY_WORKS from "../assets/myworks"
import Footer from "./Footer";
import { HEADINGS_EN } from "../assets/dataEN";
import { HEADINGS_DE } from "../assets/dataDE";

export default function Projects() {
    const { currentLanguage } = useContext(LanguageContext);
    const HEADINGS = currentLanguage === "EN" ? HEADINGS_EN : HEADINGS_DE;
    return (
        <section id="projects" >
            <div className="container">
                <div style={{ position: "relative", overflow: "hidden" }} className="row">
                    <img src={backgroundImg} alt="" className="img-fluid p-0 project_bgImg" />
                    <div style={{ position: "absolute", top: " 50%", left: "50%", transform: " translate(-50%, -50%)", fontSize: "30px", fontWeight: "bold", textAlign: "center" }} >
                        <h2 className="text-primary m-2 project_bgImgtext"><em> {HEADINGS.project} </em></h2>
                    </div>
                </div>
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 pt-1  bg-secondary">
                    {MY_WORKS.map((project) => {
                        return (<Website key={project.id} project={project} />)
                    })}
                </div>
            </div>
            <Footer copyright={HEADINGS.copyright} />
        </section>
    )
}