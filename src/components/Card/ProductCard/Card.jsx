import "./Card.css";
import { useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";

export default function Card({
  id,
  product_name,
  product_description,
  product_images,
  product_price,
  dataModalToggle,
  dataModalTarget,
  updateEnquiry,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lensRef = useRef(null);
  const resultRef = useRef(null);
  const imgRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const activeImg = imgRefs.current[activeIndex];
      if (!activeImg) return;

      const rect = activeImg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
        lensRef.current.style.display = "block";
        resultRef.current.style.display = "block";
        imageZoom(activeImg, resultRef.current, lensRef.current, x, y);
      } else {
        lensRef.current.style.display = "none";
        resultRef.current.style.display = "none";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeIndex]);

  const changeSlide = (index) => {
    setActiveIndex(index);
  };

  const addEnquiryHandler = () => {
    updateEnquiry(
      id,
      product_name,
      product_description,
      product_price,
      product_images
    );
  };

  const imageZoom = (img, result, lens, mouseX, mouseY) => {
    const rect = img.getBoundingClientRect();
    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = `url(${img.src})`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

    let lensX = mouseX - lens.offsetWidth / 2;
    let lensY = mouseY - lens.offsetHeight / 2;

    if (lensX < 0) lensX = 0;
    if (lensY < 0) lensY = 0;
    if (lensX > rect.width - lens.offsetWidth)
      lensX = rect.width - lens.offsetWidth;
    if (lensY > rect.height - lens.offsetHeight)
      lensY = rect.height - lens.offsetHeight;

    lens.style.left = `${lensX}px`;
    lens.style.top = `${lensY}px`;
    result.style.backgroundPosition = `-${lensX * cx}px -${lensY * cy}px`;
  };

  return (
    <>
      <div className="productCard_container">
        <div className="slideshow">
          <section>
            <div
              id="slideshow-items-container"
              style={{ position: "relative" }}
            >
              {product_images.map((src, index) => (
                <img
                  key={`slideshow-item-${index}`}
                  src={src}
                  ref={(el) => (imgRefs.current[index] = el)}
                  className={`slideshow-items ${
                    index === activeIndex ? "active" : ""
                  }`}
                  alt={`Slide ${index + 1}`}
                  style={{ display: index === activeIndex ? "block" : "none" }}
                />
              ))}
              <div id="lens" ref={lensRef}></div>
              <div id="result" ref={resultRef}></div>
            </div>
            <div className="row imagesBox">
              {product_images.map((src, index) => (
                <img
                  key={`thumbnail-${index}`}
                  src={src}
                  className={`slideshow-thumbnails ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => changeSlide(index)}
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
            </div>
          </section>
        </div>
        <h1 className="font-semibold">{product_name}</h1>
        <h2 className="font-light">{product_description}</h2>
        <div>
          <strong className=" font-bold">{product_price}</strong>
        </div>
        <div className="btnBox">
          <button onClick={addEnquiryHandler} type="button">
            Add To Enquiry
          </button>
          <button
            onClick={addEnquiryHandler}
            data-modal-target={dataModalTarget}
            data-modal-toggle={dataModalToggle}
            type="button"
          >
            Enquiry Now
          </button>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.any,
  product_name: PropTypes.string,
  product_description: PropTypes.string,
  product_price: PropTypes.number,
  product_images: PropTypes.array,
  dataModalToggle: PropTypes.string,
  dataModalTarget: PropTypes.string,
  updateEnquiry: PropTypes.func,
};
