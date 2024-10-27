import React from 'react'
import { FaMapMarkerAlt ,FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function LocationPage() {
  const icons = [
    { icon: <FaFacebookF />, color: 'bg-blue-600', tooltip: 'Facebook', link: 'https://www.facebook.com/4thpyramidd/' },
    { icon: <FaTwitter />, color: 'bg-blue-400', tooltip: 'Twitter', link: 'https://twitter.com/4thpyarmid' },
    { icon: <FaInstagram />, color: 'bg-pink-600', tooltip: 'Instagram', link: 'https://www.instagram.com/4th_pyramid1' },
    { icon: <FaYoutube />, color: 'bg-red-600', tooltip: 'YouTube', link: 'https://www.youtube.com/@4thpyramids223' },
    { icon: <FaLinkedinIn />, color: 'bg-blue-700', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/company/4thpyramid/' },
    { icon: <FaTiktok />, color: 'bg-black', tooltip: 'TikTok', link: 'https://www.tiktok.com/@4th.pyramiid' },
];
  return (
    <>
   <section className="w-full   flex items-center justify-center  ">
  <div className="w-full  h-[70vh] rounded-lg overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://maps.google.com/maps?q=%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%20_%D8%AD%D9%8A%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%AF%D9%8A%20%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%20_%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%AD%D9%85%D8%B2%D9%87%20%D8%A8%D9%86%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%85%D8%B7%D9%84%D8%A8&t=m&z=17&output=embed&iwloc=near"
      allowFullScreen=""
      loading="lazy"
      title="مدينة الرياض _حي السويدي الغربي _شارع حمزه بن عبد المطلب"
    ></iframe>
  </div>
</section>
    {/*  */}
    <section className='py-14'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:w-1/2 mx-auto py-5 px-3 gap-5">
        <div className="p-5 flex flex-col items-center justify-center group bg-white border border-gray-300 shadow-md rounded-lg transition-all duration-300 hover:border-[#44c5f0]">
          <FaMapMarkerAlt className="text-2xl font-semibold text-[#44c5f0]" />
          <h4 className="text-black">
            المركز الرئيسي: مدينة الرياض _حي السويدي الغربي _شارع حمزة بن عبد المطلب وفرعه بمحافظة القويعية: شارع الملك عبد العزيز
            مكتب القاهرة: القاهرة-7 عمارات الشرطة-جسر السويس
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 flex flex-col items-center justify-center group bg-white border border-gray-300 shadow-md rounded-lg transition-all duration-300 hover:border-[#44c5f0]">
            <MdOutlinePermPhoneMsg className="text-2xl font-semibold text-[#44c5f0]" />
            <div className="">
              <h4 className="text-black">السعودية: 0554183175</h4>
              <h4 className="text-black">مصر: 01128739311</h4>
              <h4 className="text-black">مصر: 01550822640</h4>
            </div>
          </div>

          <div className="p-5 flex flex-col items-center justify-center group bg-white border border-gray-300 shadow-md rounded-lg transition-all duration-300 hover:border-[#44c5f0]">
            <FaRegEnvelope className="text-2xl font-semibold text-[#44c5f0]" />
            <h4 className="text-black">contact@4thpyarmids.com</h4>
          </div>
        </div>
      </div>
    </section>
{/*  */}

{/*  */}
<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 py-10 border-t-2">
            {icons.map((item, index) => (
                <Link key={index} to={item.link} target="_blank" rel="noopener noreferrer" className="relative group">
                    <div className="absolute bottom-full mb-2 z-10 hidden w-auto p-2 text-white text-sm font-medium bg-black rounded-lg shadow-lg tooltip group-hover:block group-hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
                        {item.tooltip}
                        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-x-4 border-x-transparent border-b-4 border-b-black"></div>
                    </div>
                    <span className={`flex items-center justify-center w-16 h-16 ${item.color} rounded-full shadow-lg transition duration-300 ease-in-out transform group-hover:scale-105 mx-2`}>
                        <div className="text-white text-2xl">{item.icon}</div>
                    </span>
                </Link>
            ))}
        </div>

    </>
  )
}
