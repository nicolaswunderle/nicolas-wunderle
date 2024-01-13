import Slider from "react-slick";
import PropTypes from "prop-types";
import config from "../config/config.json";

const MainCarousel = ({ clients }) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slickOne text-center px-2 pt-8">
      <Slider {...settings}>
        {clients.map((item, index) => {
          return (
            <div key={index}>
              <img
                className="!max-w-full !w-auto !h-auto overflow-hidden text-center"
                src={config.site.base + item}
                alt="brand icon"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

MainCarousel.propTypes = {
  clients: PropTypes.array,
};

export default MainCarousel;
