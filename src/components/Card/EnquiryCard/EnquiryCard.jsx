import plusIcon from "../../../assets/Images/plus.svg";
import minusIcon from "../../../assets/Images/minus.svg";
import deleteIcon from "../../../assets/Images/delete-1487-svgrepo-com.svg";
import PropTypes from "prop-types";
import "./EnquiryCard.css";
import { useEffect, useState } from "react";

export default function EnquiryCard({
  product_id,
  product_image,
  product_title,
  product_description,
  // product_price,
  wantDeleteIcon,
  wantInputQnt,
  deleteEnquiry,
  wantBtns,
}) {
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    window.localStorage.setItem(`${product_id}_Quantity`, productQuantity);
  }, [productQuantity]);

  const enquiryDeleteHandler = () => {
    deleteEnquiry(product_id);
  };

  const inputQuantityHandler = (e) => {
    const value = parseInt(e.target.value);
    setProductQuantity(value);
  };

  return (
    <>
      <div
        className={`checkoutCard ${wantDeleteIcon ? "" : "checkoutCardModal"}`}
        key={product_id}
      >
        <img src={product_image} alt="Product Image" />
        <article>
          <h1>{product_title}</h1>
          <p>{product_description}</p>
        </article>
        <section>
          <article>
            {wantInputQnt ? (
              <div>
                <input
                  className=" text-black font-bold"
                  type="number"
                  min="1"
                  onChange={inputQuantityHandler}
                  value={productQuantity}
                />
              </div>
            ) : (
              <strong>
                x{window.localStorage.getItem(`${product_id}_Quantity`)}
              </strong>
            )}
            {wantBtns && (
              <div>
                <button
                  onClick={() => {
                    if (productQuantity >= 1) {
                      setProductQuantity(productQuantity + 1);
                    }
                  }}
                >
                  <img src={plusIcon} alt="Plus Icon" />
                </button>
                <button
                  onClick={() => {
                    if (productQuantity > 1) {
                      setProductQuantity(productQuantity - 1);
                    }
                  }}
                >
                  <img src={minusIcon} alt="Minus Icon" />
                </button>
              </div>
            )}
          </article>
          {wantDeleteIcon && (
            <div>
              <img
                src={deleteIcon}
                alt="Delete Icon"
                onClick={enquiryDeleteHandler}
              />
            </div>
          )}
        </section>
      </div>
    </>
  );
}

EnquiryCard.propTypes = {
  product_id: PropTypes.number,
  product_image: PropTypes.string,
  product_title: PropTypes.string,
  product_description: PropTypes.string,
  product_price: PropTypes.number,
  wantDeleteIcon: PropTypes.bool,
  wantInputQnt: PropTypes.bool,
  deleteEnquiry: PropTypes.func,
  wantBtns: PropTypes.bool,
};
