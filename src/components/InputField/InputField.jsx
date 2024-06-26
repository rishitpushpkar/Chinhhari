import "./InputField.css";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import downArrowIcon from "./../../assets/Images/dropdown-arrow-svgrepo-com.svg";

export default function InputField({
  inputType = "",
  label = "",
  placeholder = "",
  isRequired = false,
  isDisabled = false,
  maxLength = Infinity,
  minLength = Infinity,
  validate,
  options,
  prefixIcon = "",
  maxWidth,
}) {
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option) => {
    setSelected(option.label);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

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

  const handleClickOutside = (event) => {
    if (!isDisabled) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
  };

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
  };

  return (
    <>
      {/* --------------------------------------------------------------------------------Dropdown------------------------------------------------------------------------- */}
      {inputType.toLowerCase() == "dropdown" && (
        <div
          className={`custom-dropdown dropdown_container max-w-[${maxWidth}]`}
          ref={dropdownRef}
        >
          <div>
            {prefixIcon && <img src={prefixIcon} alt="SearchIcon" />}

            <button
              className={`subtitle_medium custom-dropdown-button  ${
                isDisabled ? "disableStyle" : ""
              } `}
              style={prefixIcon ? { paddingLeft: "4.5rem" } : {}}
              onClick={toggleDropdown}
            >
              {
                <span className={isDisabled ? "disableColor" : ""}>
                  {selected ? selected : placeholder}
                </span>
              }

              <img
                className={`arrow ${isOpen ? "open" : ""}`}
                src={downArrowIcon}
                alt="Dropdown Icon"
              />
            </button>
          </div>
          {!isDisabled && isOpen && (
            <ul className="custom-dropdown-menu">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="custom-dropdown-item subtitle_medium"
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------TextArea/TextField--------------------------------------------------------------------- */}
      {(inputType.toLowerCase() == "textfield" ||
        inputType.toLowerCase() == "textarea" ||
        inputType.toLowerCase() == "number") && (
        <section className={`textField_container max-w-[${maxWidth}]`}>
          <label
            htmlFor={inputType}
            className={`subtitle_small ${!label ? "lableRemoved" : ""}`}
          >
            {label}
          </label>
          <div>
            {prefixIcon && <img src={prefixIcon} alt="SearchIcon" />}
            <textarea
              required={isRequired}
              maxLength={maxLength}
              minLength={minLength}
              name={label}
              disabled={isDisabled}
              id="textField"
              className={`subtitle_medium
            ${inputType.toLowerCase()}
               inputField ${hasError ? "errorStyle" : ""} ${
                isDisabled ? "disableStyle" : ""
              } `}
              label={label}
              style={prefixIcon ? { paddingLeft: "4.5rem" } : {}}
              value={inputValue}
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
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  textArea: PropTypes.bool,
  isRequired: PropTypes.bool,
  maxWidth: PropTypes.string,
  validate: PropTypes.func,
  isDisabled: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  prefixIcon: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      variant: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
};
