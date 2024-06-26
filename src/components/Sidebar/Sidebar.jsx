import "./Sidebar.css";
import { product_filter } from "../../utils/Constant";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Sidebar({ selectedCategories, onCheckboxChange }) {
  const [localSelectedCategories, setLocalSelectedCategories] =
    useState(selectedCategories);
  useEffect(() => {
    setLocalSelectedCategories(selectedCategories);
  }, [selectedCategories]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const newSelectedCategories = checked
      ? [...localSelectedCategories, value]
      : localSelectedCategories.filter((category) => category !== value);

    setLocalSelectedCategories(newSelectedCategories);
    onCheckboxChange(newSelectedCategories, event);
  };
  return (
    <aside>
      <div>
        <h1>Filter</h1>
      </div>
      <hr />
      <section className=" rounded-lg p-6">
        <div className="mb-4 flex flex-col">
          <label
            htmlFor="price-range"
            className="block text-gray-700 font-bold mb-2"
          >
            Categories
          </label>
          {product_filter.map((i, index) => {
            const lowerCaseType = i.type.toLowerCase();

            return (
              <div key={index} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  value={lowerCaseType}
                  checked={localSelectedCategories.includes(lowerCaseType)}
                  onChange={handleCheckboxChange}
                />
                <label className="ms-2">{i.type}</label>
              </div>
            );
          })}
        </div>
      </section>
      <hr />
    </aside>
  );
}

Sidebar.propTypes = {
  selectedCategories: PropTypes.array,
  onCheckboxChange: PropTypes.func,
};
