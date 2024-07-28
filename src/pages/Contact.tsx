import { FunctionComponent } from "react";
import Form from "../components/ContactForm";
import "./Contact.css";

const ContactUs: FunctionComponent = () => {
  return (
    <>
      {/* <TopNav /> */}
      <div className="background">
        <div className="content">
          <div className="header">
            <h1 className="contact-us">Contact Us</h1>
            <div className="we-are-here">{`We are here to help you make a first move to greener choice. `}</div>
          </div>
          <form className="form-wrapper">
            <Form />
            <button className="button">
              <div className="button1">Submit</div>
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ContactUs;
