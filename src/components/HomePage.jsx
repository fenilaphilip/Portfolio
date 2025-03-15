import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { PROFILE } from "../assets/data";
import { CONTACT_INFO } from "../assets/data";
import programmingGirl from "../media/programmingGirl.jpg"

export default function HomePage() {
    const textRef = useRef(null);

    useEffect(() => {
        // Initialize Typed.js once the component is mounted
        const toRotate = ["rontend Developer"];
        const options = {
            strings: toRotate,
            typeSpeed: 140, // typing speed in milliseconds
            backSpeed: 25, // backspacing speed in milliseconds
            startDelay: 100, // delay before typing starts in milliseconds
            backDelay: 1000, // delay before backspacing starts in milliseconds
            loop: true, // loop the animation indefinitely
            showCursor: false,
        };

        const typed = new Typed(textRef.current, options);

        // Cleanup function
        return () => {
            typed.destroy(); // destroy Typed.js instance when the component unmounts
        };
    }, [])
    return (
        <section id="home" >
            <div className="container">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-primary">{PROFILE.name}</h1>
                        <br />
                        <h4 className="text-primary">F<span ref={textRef} ></span></h4>
                        <hr />
                        <p className="lead">
                            {PROFILE.intro}
                        </p>
                        <br />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <a href={PROFILE.resume} className="btn btn-sm btn-outline-primary me-3" target="_blank" download> DOWNLOAD RESUME</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden pt-0" id="homepageImg">
                        <img className="img-fluid rounded-lg-3" src={programmingGirl} alt="" width="720" />
                    </div>
                </div>
                <div className="d-block px-5 m-2 p-2">
                    {
                        CONTACT_INFO.map((contact) => {
                            return (
                                <span className="ms-3" key={contact.name}>
                                    <a className="text-body-light"
                                        href={contact.link}>
                                        <img />{contact.name}
                                    </a>
                                </span>
                            );
                        })
                    }
                </div>
            </div>
        </section >
    )
}