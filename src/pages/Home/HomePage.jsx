import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import aboutImg from "../../assets/about/about.png";
import { Link } from "react-router-dom";
import Cell from "./../../components/ui/Cell";
import { ArrowRight } from "lucide-react";
import {
  MultilayerCardV_1,
  CardBody,
} from "../../components/ui/MultilayerCard";
import { Button } from "@/components/ui/button";
import { cardIcons } from "../../hooks/useHomePage/cardIcons";
import {
  cells,
  cardTitles,
  slideVariants,
} from "../../hooks/useHomePage/useHome";
import "swiper/css";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="home-cover py-5  flex items-center justify-center p-6">
        <div className="container max-w-6xl md:px-10 mx-auto py-10">
          <div className="py-6 px-14 text-center">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white py-4">
              شَرِكَةُ
              <span className="text-primary px-5">الْهَرَمِ الرَّابِعِ</span>
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary py-8 ms-10 md:ms-28 lg:ms-28 shadow-3d">
              لِلِاسْتِشَارَاتِ الْهَنْدَسِيَّةِ
            </h2>
          </div>
          <div className="mt-2 px-14 w-full text-center">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={2000}
              modules={[Autoplay]}>
              <SwiperSlide>
                <motion.p
                  className="text-lg"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={slideVariants}
                  transition={{ duration: 1 }}>
                  فريقنا يصنع المستحيل ويبتكر المستقبل
                </motion.p>
              </SwiperSlide>
              <SwiperSlide>
                <motion.p
                  className="text-lg"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={slideVariants}
                  transition={{ duration: 1 }}>
                  نحن هنا لمساعدتك على بناء حلمك باحترافية
                </motion.p>
              </SwiperSlide>
              <SwiperSlide>
                <motion.p
                  className="text-lg"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={slideVariants}
                  transition={{ duration: 1 }}>
                  نحن ملتزمون بتحويل أحلامك إلى حقيقة. نحن ندرك أن رؤيتك لمشروعك
                  فريدة وشخصية
                </motion.p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="py-16 home-about bg-gray-100">
        <div className="container max-w-6xl mx-auto md:px-10 sm:px-20">
          {/* صف يحتوي على عمودين */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* العمود الأول : النص */}
            <div className="flex flex-col justify-center">
              <h4 className="px-4">
                نبذة عن الخبرة الكبيرة في الاستشارات البنائية
              </h4>
              <h3 className="text-4xl px-4 my-3 font-bold">
                حلول للمنازل والصناعات
              </h3>
              <p className="my-5 px-4 py-6 bg-neutral-200 border-l-2 border-orange-500">
                مع أكثر من عقدين من الخبرة في الصناعة وفريق متنوع من المقاولين
                المهرة، تتمتع شركة الهرم الرابع بمكانة فريدة.
              </p>
              <p className="my-5 ps-4">
                تتمتع شركة الهرم الرابع بترخيص وتأمين كاملين وتعمل بكل نزاهة، مع
                التركيز القوي على بناء علاقات قوية طويلة الأمد مع العملاء بينما
                نحول أحلام البناء الخاصة بك إلى حقيقة.
              </p>
            </div>

            {/* العمود الثاني: الصورة */}
            <div className="flex items-center justify-center bg-red-300">
              <Link to="/about" className="w-full h-full">
                <img
                  src={aboutImg}
                  alt="about img"
                  className="w-full h-auto md:h-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 home-services bg-zinc-300">
        <div className="container max-w-6xl mx-auto md:px-10 sm:px-20">
          <div>
            <h5 className="text-2xl font-bold text-center my-8">خدماتنا</h5>
            <h2 className="text-4xl font-bold text-center my-8 ">
              خدمات البناء للقطاعات السكنية والصناعية
            </h2>
          </div>
          <div>
            {/* الشبكة التي تحتوي على 3 صفوف، وكل صف يحتوي على 3 أعمدة */}
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {cardTitles.map((title, index) => (
                <div key={index} className={`col-span-1 md:col-span-1 `}>
                  <MultilayerCardV_1>
                    <CardBody
                      title={title}
                      icon={cardIcons[index]}
                      className="px-6 my-0 py-10 relative mx-auto rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl text-center"
                    />
                  </MultilayerCardV_1>
                </div>
              ))}
            </div>
            <div className="text-center my-2">
              <Button
                onClick={() => navigate("/services")}
                className="py-6 px-6 bg-cyan-500 hover:bg-cyan-600 Amiri-font text-white text-xl font-bold">
                <ArrowRight /> المزيد من التفاصيل
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features1 py-10 bg-gray-100">
        <div className="container max-w-6xl max-h-full mx-auto md:px-18">
          <div className="py-6 features1-text text-center ">
            <h3 className="text-1xl font-bold">مشاريعنا الأخيرة</h3>
            <p className="text-xl font-bold text-center mt-4 ">
              أولاً وقبل كل شيء، نحن بناة. لقد قامت المواهب المشتركة لفريقنا
              ببناء أكثر من 500 مشروع .
            </p>
          </div>

          <div className="py-6">
            <div className="grid md:grid-cols-4 gap-1">
              {cells.map((cell, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-1 rounded-lg h-2/3",
                    i == 1 && "md:col-span-2 md:h-full md:row-span-2",
                    i == 4 && "md:col-start-4 "
                  )}>
                  <Cell content={cell.content} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
