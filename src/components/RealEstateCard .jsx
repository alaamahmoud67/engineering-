// RealEstateCard.jsx
import imgPrj1 from "../assets/project1/prj1-1.jpg";
import imgPrj1_2 from "../assets/project1/prj1-2.jpg";
import imgPrj1_3 from "../assets/project1/prj1-3.jpg";
import imgPrj1_4 from "../assets/project1/prj1-4.jpg";
import imgPrj1_5 from "../assets/project1/prj1-5.jpg";
import imgPrj1_6 from "../assets/project1/prj1-6.jpg";
// import { ImageSwiper } from "./ui/ImageSwiper";
import "@fontsource/inter";
import { AlternativeImageSlider } from './ui/AlternativeImageSlider';
const images = [imgPrj1, imgPrj1_2, imgPrj1_3, imgPrj1_4, imgPrj1_5, imgPrj1_6];

export const RealEstateCard = () => (
  <section className="">
    <div className="max-w-[600px]">
      <AlternativeImageSlider images={images} className="your-custom-class" />
    </div>
  </section>);