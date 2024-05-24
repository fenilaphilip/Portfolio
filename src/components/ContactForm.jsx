import { useRef } from "react";
import Modal from "./Modal";

export default function ContactForm() {
    const modal = useRef();

    function handleClickContactBtn() {
        modal.current.open();
    }
    return (
        <>
            <Modal ref={modal} >
                <div className="container" id="contact-popup">
                    <h1>FEEL FREE TO CONTACT</h1>
                    <ul className=" col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-body-dark"
                                href="https://github.com/fenilaphilip">
                                Github
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-dark"
                                href="https://www.linkedin.com/in/fenila-philip">
                                Linkedin
                            </a>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_name">Firstname *</label>
                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_lastname">Lastname *</label>
                                <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_email">Email *</label>
                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="form_need">Please specify your need *</label>
                                <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                                    <option value="" selected disabled>--Like to </option>
                                    <option >Hire</option>
                                    <option >Collabrate</option>
                                    <option >Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="form_message">Message *</label>
                                <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea
                                >
                            </div>

                        </div>
                        <div className="col-md-12 ">
                            <input type="submit" className="btn btn-info btn-send mt-5 pt-2 btn-block
                            " value="Send Message" />

                        </div>
                    </div>
                    <form
                        method="dialog"
                        className="mt-4 d-flex justify-content-end"
                    >
                        <div className="btn-group">
                            <button className="btn btn-sm btn-outline-dark me-3">Close</button>
                        </div>

                    </form>
                </div>
            </Modal >
            <button
                type="button"
                className="btn btn-sm btn-outline-light"
                onClick={handleClickContactBtn}
            >
                CONTACT
            </button>
        </>
    );
}