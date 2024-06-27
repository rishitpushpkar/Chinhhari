import "./InputField.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function InputField({
  inputType = null,
  label = null,
  placeholder = null,
  isRequired = false,
  isDisabled = false,
  maxLength = Infinity,
  minLength = Infinity,
  inputName = null,
  validate,
  prefixIcon = null,
  maxWidth,
  getInputValue,
  resetForm,
}) {
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const textField = document.getElementById("textField");
    if (textField) {
      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      };
      textField.addEventListener("keydown", handleKeyDown);
      return () => {
        textField.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  const inputChangeHandler = (event) => {
    let newValue = event.target.value;

    if (inputType.toLowerCase() == "number") {
      newValue = newValue.replace(/[^0-9]/g, "");
      console.log(newValue);
    }

    setInputValue(newValue);

    if (validate) {
      setHasError(!validate(newValue));
    }
    getInputValue(event.target.name, event.target.value);
  };

  return (
    <>
      {/* --------------------------------------------------------------------------TextArea/TextField--------------------------------------------------------------------- */}
      {(inputType.toLowerCase() == "textfield" ||
        inputType.toLowerCase() == "textarea" ||
        inputType.toLowerCase() == "number") && (
        <section className={`textField_container max-w-[${maxWidth}]`}>
          <label
            htmlFor={inputType}
            className={`subtitle_small ${label ? "" : "lableRemoved"}`}
          >
            {label}
          </label>
          <div>
            {prefixIcon && <img src={prefixIcon} alt="SearchIcon" />}
            <textarea
              required={isRequired}
              maxLength={maxLength}
              minLength={minLength}
              name={inputName}
              disabled={isDisabled}
              id="textField"
              className={`subtitle_medium
            ${inputType.toLowerCase()}
               inputField ${hasError ? "errorStyle" : ""} ${
                isDisabled ? "disableStyle" : ""
              } `}
              label={label}
              style={prefixIcon ? { paddingLeft: "4.5rem" } : {}}
              value={resetForm ? "" : inputValue}
              placeholder={placeholder}
              onChange={inputChangeHandler}
            />
            <span className={`body_small ${hasError ? "" : "dNone"} errorMsg `}>
              Error
            </span>
          </div>
        </section>
      )}
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    </>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  maxWidth: PropTypes.string,
  validate: PropTypes.func,
  isDisabled: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  prefixIcon: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  getInputValue: PropTypes.func,
  resetForm: PropTypes.bool,
};
