
// import { twMerge } from "tailwind-merge";


import { ImageSwiper } from './ImageSwiper';




// export const RealEstateCard = () => (
//   <section className="text-neutral-900 ">
//     <div className="w-full mx-auto h-full">
//       <ImageSwiper images={images} />
//     </div>
//   </section>
// );

export const RealEstateCard = ({ image }) => (
  <section className="text-neutral-900">
    <div className="w-full mx-auto h-full">
      <ImageSwiper images={image} /> {/* هنا نمرر الصورة الواحدة فقط */}
    </div>
  </section>
);
