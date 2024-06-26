// import deleteIcon from "../../../assets/Images/deleteIcon.svg";
// import productImg from "../../../assets/Images/product1.webp";
import plusIcon from "../../../assets/Images/plus.svg";
import minusIcon from "../../../assets/Images/minus.svg";
import deleteIcon from "../../../assets/Images/delete-1487-svgrepo-com.svg";
import PropTypes from "prop-types";
import "./EnquiryCard.css";

export default function EnquiryCard({
  product_id,
  product_image,
  product_title,
  product_description,
  product_price,
  wantDeleteIcon,
  wantInputQnt,
  deleteEnquiry,
}) {
  const enquiryDeleteHandler = () => {
    deleteEnquiry(product_id);
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
                <input type="text" />
              </div>
            ) : (
              <strong>10</strong>
            )}

            <div>
              <button>
                <img src={plusIcon} alt="Plus Icon" />
              </button>
              <button>
                <img src={minusIcon} alt="Minus Icon" />
              </button>
            </div>
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
};
