import Card from "../components/Card/ProductCard/Card";
import Slider from "../components/Slider/Slider";
import "../styles/Home.css";
import { ourCollection, product_filter } from "../utils/Constant";
import InputField from "../components/InputField/InputField";
import EnquiryCard from "../components/Card/EnquiryCard/EnquiryCard";
import PropTypes from "prop-types";
import crossIcon from "../assets/Images/cross-svgrepo-com.svg";

import { useState, useEffect } from "react";

export default function Home({ filteredProducts, onCategoryChange }) {
  const [localSelectedCategories, setLocalSelectedCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openPanel, setOpenPanel] = useState(false);
  const [enquiryList, setEnquiryList] = useState([]);
  const [resetForm, setResetForm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
  });

  const updateEnquiry = (
    product_id,
    product_title,
    product_description,
    product_price,
    product_images
  ) => {
    const filteredArray = enquiryList.filter(
      (item) => item.product_id !== product_id
    );
    const updatedArray = [
      ...filteredArray,

      {
        product_id: product_id,
        product_title: product_title,
        product_description: product_description,
        product_price: product_price,
        product_image: product_images[0],
      },
    ];

    setEnquiryList(updatedArray);
  };

  const deleteEnquiry = (id) => {
    let updatedEnquiryList = enquiryList.filter((i) => i.product_id !== id);
    console.log(updatedEnquiryList);
    setEnquiryList(updatedEnquiryList);
  };

  useEffect(() => {
    setLocalSelectedCategories(selectedCategories);
  }, [selectedCategories]);

  // const handleCheckboxChange = (event) => {
  //   const { value, checked } = event.target;
  //   const newSelectedCategories = checked
  //     ? [...localSelectedCategories, value]
  //     : localSelectedCategories.filter((category) => category !== value);

  //   setLocalSelectedCategories(newSelectedCategories);
  //   setSelectedCategories(newSelectedCategories);
  //   onCategoryChange(newSelectedCategories);
  // };

  const getInputValue = (inputName, inputData) => {
    setFormData((prev) => ({ ...prev, [inputName]: inputData }));
  };

  const formHandler = (e) => {
    setResetForm(true);
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  useEffect(() => {
    setLocalSelectedCategories(selectedCategories);
  }, [selectedCategories]);

  const handleButtonClick = (event) => {
    const value = event.target.value;
    const newSelectedCategories = localSelectedCategories.includes(value)
      ? localSelectedCategories.filter((category) => category !== value)
      : [...localSelectedCategories, value];

    setLocalSelectedCategories(newSelectedCategories);
    setSelectedCategories(newSelectedCategories);
    onCategoryChange(newSelectedCategories, event);
  };

  return (
    <div className="relative">
      <div className="sliderContainer ">
        <Slider />
      </div>

      <div className="seeEnquiryBtn" onClick={() => setOpenPanel(!openPanel)}>
        <button className={`${openPanel ? "hidden" : ""} ps-3`}>
          See Enquiry
        </button>
      </div>

      <aside className={`enquiryListContainer ${openPanel ? "" : "hidden"}`}>
        <div>
          <p>Enquiry List</p>
          <img
            src={crossIcon}
            alt="Cross Icon"
            onClick={() => {
              setOpenPanel(false);
            }}
          />
        </div>
        <div>
          {enquiryList.map((i) => {
            return (
              <>
                <EnquiryCard
                  deleteEnquiry={deleteEnquiry}
                  key={i.id}
                  wantDeleteIcon={true}
                  wantInputQnt={true}
                  product_id={i.product_id}
                  product_title={i.product_title}
                  product_description={i.product_description}
                  product_image={i.product_image}
                  wantBtns={true}
                />
                <hr />
              </>
            );
          })}
        </div>
        <div>
          <button
            data-modal-target="static-modal"
            data-modal-toggle="static-modal"
            type="button"
            onClick={() => {
              setOpenPanel(false);
            }}
          >
            Go to Enquiry
          </button>
        </div>
      </aside>

      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full mt-[8rem]">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Enquiry Form
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-[#715925] hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="static-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="flex flex-col justify-between ">
              <div className="enquiryContainer">
                <section>
                  <article>
                    <form action="" onSubmit={formHandler}>
                      <div>
                        <InputField
                          inputType="textfield"
                          inputName="fullName"
                          placeholder="Full Name"
                          resetForm={resetForm}
                          getInputValue={getInputValue}
                        />
                      </div>
                      <div>
                        <InputField
                          inputType="textfield"
                          placeholder="email"
                          resetForm={resetForm}
                          inputName="email"
                          getInputValue={getInputValue}
                        />
                      </div>
                      <div>
                        <InputField
                          inputType="textfield"
                          inputName="mobileNo"
                          placeholder="Mobile No."
                          resetForm={resetForm}
                          maxLength={10}
                          minLength={10}
                          getInputValue={getInputValue}
                        />
                      </div>
                      <button type="submit" className="submitEnquiryBtn">
                        Submit Enquiry
                      </button>
                    </form>
                  </article>
                </section>

                <section>
                  {enquiryList.map((i) => {
                    return (
                      <EnquiryCard
                        key={i.product_id}
                        product_id={i.product_id}
                        product_title={i.product_title}
                        product_description={i.product_description}
                        product_image={i.product_image}
                        wantDeleteIcon={false}
                        wantInputQnt={false}
                        wantBtns={false}
                      />
                    );
                  })}
                </section>
              </div>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t rounded-b "></div>
          </div>
        </div>
      </div>

      <article className="py-[4%]">
        <p className="text-center text-2xl">Every Handicraft Has A Story...</p>
        <p className=" text-center text-md font-light my-2">
          The grandness of the art is, every time you see it you will find
          something new.
        </p>
      </article>
      <section className="collection_container">
        {ourCollection.map((i, index) => {
          return (
            <figure key={index}>
              <img src={i.image} alt="Gifting" />
              <div className="overlay">
                <h2>
                  <strong>{i.title}</strong>
                </h2>
                <p>{i.description}</p>
              </div>
            </figure>
          );
        })}
      </section>
      <aside className="filterSection">
        <div>
          <h1>Filter By Categories</h1>
        </div>
        <div className="flex items-center ml-5">
          {product_filter.map((i, index) => {
            const lowerCaseType = i.type.toLowerCase();
            const isActive = localSelectedCategories.includes(lowerCaseType);
            return (
              <div key={index}>
                <button
                  className={`ms-2 ${
                    isActive
                      ? "bg-[#715925] text-white"
                      : "bg-white text-[#715925]"
                  }`}
                  value={lowerCaseType}
                  onClick={handleButtonClick}
                >
                  {i.type}
                </button>
              </div>
            );
          })}
        </div>
      </aside>
      <section className="itemsContainer mb-[5%]">
        <main>
          {filteredProducts.map((i) => {
            return (
              <Card
                updateEnquiry={updateEnquiry}
                key={i.id}
                id={i.id}
                dataModalTarget="static-modal"
                dataModalToggle="static-modal"
                product_name={i.product_name}
                product_description={i.product_description}
                product_images={i.product_images}
                product_price={i.product_price}
              />
            );
          })}
        </main>
      </section>
    </div>
  );
}

Home.propTypes = {
  filteredProducts: PropTypes.array,
  onCategoryChange: PropTypes.func,
};
