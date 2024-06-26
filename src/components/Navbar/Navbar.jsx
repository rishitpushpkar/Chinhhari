import "./Navbar.css";
import userCircle from "./../../assets/Images/user-circle.svg";
import searchIcon from "../../assets/Images/search.svg";
import chinariLogo from "../../assets/Images/LOGO_10-01_200x.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ onSearchChange, isEnquiryPage }) {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <>
      <nav className={`${isEnquiryPage ? "border" : ""}`}>
        <div></div>
        <div className="brandlogoBox">
          <Link to="/">
            <img src={chinariLogo} alt="Chinari Logo" className="brand-logo" />
          </Link>
        </div>

        <div className="endNavSection">
          <div className={`searchBox ${isEnquiryPage ? "hidden" : ""}`}>
            <img src={searchIcon} alt="Search Icon" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  isEnquiryPage: PropTypes.bool,
  onSearchChange: PropTypes.func,
};
