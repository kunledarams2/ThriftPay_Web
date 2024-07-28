import { FunctionComponent } from "react";
import "./ContactInputText.css";

export type InputTextType = {
  className?: string;
  label?: string;
  inputPlaceholder?: string;
};

const InputText: FunctionComponent<InputTextType> = ({
  className = "",
  label,
  inputPlaceholder,
}) => {
  return (
    <div className={`inputtext ${className}`}>
      <div className="label">{label}</div>
      <div className="field">
        <input className="input" placeholder={inputPlaceholder} type="text" />
      </div>
    </div>
  );
};

export default InputText;
