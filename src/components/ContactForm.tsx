import { FunctionComponent } from "react";
import InputText from "./ContactInputText";
import "./ContactForm.css";

export type FormType = {
  className?: string;
};

const Form: FunctionComponent<FormType> = ({ className = "" }) => {
  return (
    <div className={`form ${className}`}>
      <InputText label="Full name" inputPlaceholder="Enter full name" />
      <InputText label="Email Address" inputPlaceholder="Enter email address" />
      <InputText
        label="Phone Number (Optional)"
        inputPlaceholder="Enter Phone number"
      />
      <div className="inputtext1">
        <div className="label1">Your Message</div>
        <div className="field1">
          <div className="input1">johndoe @example.com</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
