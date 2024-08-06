import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  const image = [
    "https://m.media-amazon.com/images/I/71lxl+ppCvL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/717cN4n3dSL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61aMg7NF6YL._SX3000_.jpg",
  ];

  return (
    <div className="relative">
      <div className="absolute w-full h-32 " />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {image.map((img) => (
          <div>
            <img loading="lazy" src={img} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
