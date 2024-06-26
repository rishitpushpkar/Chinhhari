import Slider from "react-slick";
import img1 from "../../assets/Images/chin-01.jpg";
import img2 from "../../assets/Images/5338656.jpg";
import img3 from "../../assets/Images/7591470.jpg";
import "./Slider.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <img src={img1} alt="" />

        <img src={img2} alt="" />

        <img src={img3} alt="" />
      </Slider>
    </div>
  );
}

export default SimpleSlider;
