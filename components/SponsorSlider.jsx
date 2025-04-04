import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sail from "@/assets/sail.png";
import nhpc from "@/assets/nhpc.png";
import ktmpl from "@/assets/ktmpl.png";
import ieee1 from "@/assets/ieee.png";
import pes1 from "@/assets/pes.jpg";

const SponsorSlider = () => {
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-auto mx-12 sm:mx-4 my-8 m-auto justify-center">
      <h2 className="text-center font-bold mb-8 text-2xl">OUR SPONSORS</h2>
      <Slider {...settings}>
        <div className="justify-center flex flex-col items-center text-center">
             <Image src={sail} className="h-[12rem] w-[auto] sm:h-[8rem] m-auto mt-4" />
        </div>
        <div className="justify-center flex flex-col items-center text-center">
          <Image src={ktmpl} className="h-[12rem] w-[auto] sm:h-[8rem] m-auto mt-4" />
        </div>
        <div className="justify-center flex flex-col items-center text-center">
          <Image src={nhpc} className="h-[12rem] w-[auto] sm:h-[8rem] m-auto mt-4" />
        </div>
        <div className="justify-center flex flex-col items-center text-center">
          <Image src={ieee1} className="h-[12rem] w-[auto] sm:h-[8rem] m-auto mt-4" />
        </div>
        <div className="justify-center flex flex-col items-center text-center">
          <Image src={pes1} className="h-[12rem] w-[auto] sm:h-[8rem] m-auto mt-4" />
        </div>
      </Slider>
    </div>
  );
};

export default SponsorSlider;