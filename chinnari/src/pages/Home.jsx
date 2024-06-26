import Card from "../components/Card/ProductCard/Card";
import Slider from "../components/Slider/Slider";
import "../styles/Home.css";
import leftArrow from "../assets/Images/left-arrow-svgrepo-com.svg";
import { products, product_filter, ourCollection } from "../utils/Constant";
import InputField from "../components/InputField/InputField";
import "../styles/Enquiry.css";
import EnquiryCard from "../components/Card/EnquiryCard/EnquiryCard";

import SlidingPanel from "react-sliding-side-panel";
import crossIcon from "../assets/Images/cross-svgrepo-com.svg";

import { useState } from "react";

export default function Home() {
  const [openPanel, setOpenPanel] = useState(false);
  const [enquiryList, setEnquiryList] = useState([]);

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

  console.log("myenquiry", enquiryList);

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
                  key={i.product_id}
                  wantDeleteIcon={true}
                  wantInputQnt={true}
                  product_id={i.product_id}
                  product_title={i.product_title}
                  product_description={i.product_description}
                  product_image={i.product_image}
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
        <div className="relative p-4 w-full max-w-2xl max-h-full mt-[10%]">
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
            <div className="flex flex-col justify-between">
              <div className="enquiryContainer">
                <section>
                  <article>
                    <div>
                      <InputField
                        inputType="textfield"
                        placeholder="Full Name"
                        maxLength={10}
                        minLength={10}
                      />
                    </div>
                    <div>
                      <InputField inputType="textfield" placeholder="Email" />
                    </div>
                    <div>
                      <InputField
                        inputType="textfield"
                        placeholder="Mobile No."
                        maxLength={10}
                        minLength={10}
                      />
                    </div>
                    <button className="submitEnquiryBtn">Submit Enquiry</button>
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
                      />
                    );
                  })}
                </section>
              </div>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t rounded-b ">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-white bg-[#715925] hover:bg-[#916a18] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                I accept
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-[#715925] focus:outline-none bg-white rounded-lg border border-[#715925] hover:text-[#916a18] hover:border-[#916a18] focus:z-10  "
              >
                Decline
              </button>
            </div>
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
      <section className="itemsContainer mb-[5%]">
        <aside>
          <div>
            <h1>Filter</h1>
            <img src={leftArrow} alt="Left Arrow" />
          </div>
          <hr />
          <section className=" rounded-lg p-6 w-full max-w-md">
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="price-range"
                className="block text-gray-700 font-bold mb-2"
              >
                Categories
              </label>
              {product_filter.map((i, index) => {
                return (
                  <div key={index} className="flex mb-1">
                    <input type="checkbox" name="" id="" />
                    <p className="ms-2">{i.type}</p>
                  </div>
                );
              })}
            </div>
          </section>
          <hr />
        </aside>

        <main>
          {products.map((i, index) => {
            return (
              <Card
                updateEnquiry={updateEnquiry}
                key={index}
                id={index}
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
