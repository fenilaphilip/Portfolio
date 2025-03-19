import React, { useContext } from "react";
import { LanguageContext } from "../store/LanguageContext";
import { PROFILE_EN, HEADINGS_EN } from "../assets/dataEN"
import { PROFILE_DE, HEADINGS_DE } from "../assets/dataDE"
import Skills from "./Skills";
import Footer from "./Footer";
import softskills from "../media/skills.png"

export default function AboutMe() {
    const { currentLanguage } = useContext(LanguageContext);
    const PROFILE = currentLanguage === "EN" ? PROFILE_EN : PROFILE_DE;
    const HEADINGS = currentLanguage === "EN" ? HEADINGS_EN : HEADINGS_DE;

    return (
        <section id="about">
            <div className="container">
                <div className="row align-items-center mt-5">
                    <div className="col-lg-7">
                        <h1 className="text-primary heading"> <span>{HEADINGS.aboutMe}</span></h1>
                        <p>
                            {PROFILE.about.map(para => {
                                return (
                                    <p className="p-2">
                                        {para}
                                    </p>
                                )
                            })}
                            <div className="p-2"><span className="text-primary">{HEADINGS.lang}</span> {PROFILE.lang.map((lang) => lang)}</div>
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <img src={softskills} className="img-fluid" alt="my photo" />
                    </div>
                </div>
            </div>
            <Skills heading={HEADINGS.skills} />
            <Footer copyright={HEADINGS.copyright} />
        </section>
    )
}