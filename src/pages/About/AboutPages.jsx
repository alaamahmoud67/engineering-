import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
import { FaLinkedin  } from "react-icons/fa6";

import aboutImg from "../../assets/about/about.png";
import aboutcounter from '../../assets/about/decor.png'
import team from '../../assets/about/about-img.jpg'
const AboutPages = () => {
  return <> 

<div className="relative  h-[70vh] bg-cover bg-center bg-About mb-5 bg-fixed" >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50 ">
        <h1 className="text-white text-5xl	font-bold		">خدمتنا</h1>
      </div>
    </div>
   
    {/*  */}
    <section className="py-16 home-about bg-gray-100">
        <div className="container max-w-6xl mx-auto md:px-10 sm:px-20">
          {/* صف يحتوي على عمودين */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* العمود الأول : النص */}
            <div className="flex flex-col justify-center">
              
              <h3 className="px-4 font-bold text-4xl ">ماذا عن الهرم الرابـــع</h3>
              <p className='my-3 '>قامت شركة 4TH.PYRAMID للتصميم والاستشارات الهندسية، المملكة العربية السعودية، بتصميم والإشراف على العديد من الهياكل والمباني والجسور.  وتتوزع هذه في جميع أنحاء مصر ومنطقة الخليج العربي وأفريقيا.</p>
              <p className='my-3 px-4 py-6 bg-neutral-200 border-l-2 border-orange-500'>لقد أدى طموحنا في ابتكار الأنظمة إلى تعزيز سمعة المملكة العربية السعودية لتحقيق إنجازات ملحوظة في الهندسة الإنشائية.</p>
              <p>على مدار 20 عامًا، واصلنا استكمال التصميمات الاقتصادية والمتفوقة.  نحن نضمن أن يعمل مهندسونا الإنشائيون بشكل وثيق مع العملاء والمتعاونين ويظلون على اطلاع دائم حتى يتمكنوا من الابتكار استجابة للتحديات والقيود.</p>

             
             
            </div>

            {/* العمود الثاني: الصورة */}
            <div className="flex items-center justify-center bg-red-300">
             <div className='w-full h-full'>
             <img
                  src={aboutImg}
                  alt="about img"
                  className="w-full h-auto md:h-full object-cover"
                />
             </div>
               
              
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-[#1f2937] py-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="relative w-3/4 mx-auto text-center group">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold transition-transform duration-300 group-hover:-translate-y-6">
        46
      </div>
      <img
        src={aboutcounter}
        alt="Award"
        className="w-full h-auto mx-auto opacity-75"
      />
      <p className="my-4 text-white text-lg font-bold">عدد الموظفين</p>
    </div>
    <div className="relative w-3/4 mx-auto text-center group">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold transition-transform duration-300 group-hover:-translate-y-6">
        24
      </div>
      <img
      src={aboutcounter}
        alt="Project"
        className="w-full h-auto mx-auto opacity-75"
      />
      <p className="my-4 text-white text-lg font-bold">مشاريع جارية</p>
    </div>
    <div className="relative w-3/4 mx-auto text-center group">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold transition-transform duration-300 group-hover:-translate-y-6">
        20
      </div>
      <img
        src={aboutcounter}
        alt="Staff"
        className="w-full h-auto mx-auto opacity-75"
      />
      <p className="my-4 text-white text-lg font-bold">سنوات الخبرة</p>
    </div>
    <div className="relative w-3/4 mx-auto text-center group">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold transition-transform duration-300 group-hover:-translate-y-6">
        512
      </div>
      <img
       src={aboutcounter}
        alt="Projects"
        className="w-full h-auto mx-auto opacity-75"
      />
      <p className="my-4 text-white text-lg font-bold">مشاريعنا</p>
    </div>
  </div>
</section>
{/* Team Member */}
<section className='py-5'>
<div className='container mx-auto p-6'>
  <h2></h2>
  <h3 className="px-4 font-bold text-4xl ">أعضاء الفريق</h3>

<div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-5 '>
  <div>
  <div className="max-w-2xl mx-auto">
  <div className="bg-white shadow-md border border-gray-200    p-3 max-w-sm  ">
    
    <div className="relative">
    <img
          className="rounded-t-[20px] rounded-tr-[60px] rounded-br-[40px] rounded-bl-[80px] p-3"
          src={team}
          alt=""
        />

      {/* icon hover*/}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-[20px] rounded-tr-[60px] rounded-br-[40px] rounded-bl-[80px] p-3">
        
        <Link to="https://www.linkedin.com/in/menna-mohab-631525216/">
        <FaLinkedin className="text-white text-6xl" />

        </Link>
      </div>
    </div>

    <div className="p-5">
    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
    Menna Mohab
        </h5>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
        Electrical Engineer

      </p>
    </div>
  </div>
</div>

  </div>
{/* team2 */}
<div>
  <div className="max-w-2xl mx-auto">
  <div className="bg-white shadow-md border border-gray-200  p-3 max-w-sm ">
    
    <div className="relative">
    <img
          className="rounded-t-[20px] rounded-tr-[60px] rounded-br-[40px] rounded-bl-[80px] p-3"
          src={team}
          alt=""
        />

      {/* icon hover*/}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-[20px] rounded-tr-[60px] rounded-br-[40px] rounded-bl-[80px] p-3">
        
        <Link to="https://www.linkedin.com/in/fatma-helal-4a93901b3/">
        <FaLinkedin className="text-white text-6xl" />

        </Link>
      </div>
    </div>

    <div className="p-5">
    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
    Fatma Helal
    </h5>
        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
        Technical Office Engineer

      </p>
    </div>
  </div>
</div>

  </div>
</div>
</div>
</section>
{/*  */}
<div className="relative h-[50vh] bg-cover bg-center bg-About-banner mb-5">
  <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 space-y-4 text-center">
    <h3 className="px-4 font-bold text-4xl text-[#44c5f0]">ماذا عن الهرم الرابـــع</h3>
    <p className="text-white">مع أكثر من عقدين من الخبرة في الصناعة</p>
    <p className="text-white">وفريق متنوع من المقاولين المهرة، تتمتع شركة الهرم الرابع بمكانة فريدة.</p>
    <Link to="/contact">
      <button className="bg-[#44c5f0] hover:bg-[#38b0e0] hover:shadow-lg text-white font-bold py-2 px-4 rounded">
        تواصل معنا
      </button>
    </Link>
  </div>
</div>
  </>;
}

export default AboutPages;
