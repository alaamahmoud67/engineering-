import React from 'react'
import { Link } from 'react-router-dom';
import footer1 from '../../assets/footer/instagram1.jpg'
import footer2 from '../../assets/footer/instagram2.jpg'
import footer3 from '../../assets/footer/instagram3.jpg'
import footer4 from '../../assets/footer/instagram4.jpg'
import footer5 from '../../assets/footer/instagram5.jpg'
import footer6 from '../../assets/footer/instagram6.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
export default function Footer() {
  return (
    <>
 <footer className="bg-[#e5e7eb] text-black py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
    
    {/* قسم Constructiva */}
    <div className="text-center md:text-left space-y-4 md:ml-6 order-1 md:order-none mb-6">
      <h3 className="text-lg font-bold lg:text-start text-[#44c5f0]">تصاميم هندسية</h3>
      <p className="text-sm my-3">شركة الهرم لرابع للاستشارات الهندسية</p>
      <div className="flex justify-center md:justify-start space-x-4 mt-4">
  {/* رابط الفيسبوك */}
  <Link to="https://www.facebook.com/4thpyramidd/" className="text-black hover:text-[#44c5f0] mx-2">
    <FaFacebookF size={24} />
  </Link>

  {/* رابط تويتر */}
  <Link to="https://twitter.com/4thpyramidd/" className="text-black hover:text-[#44c5f0] mx-2">
    <FaTwitter size={24} />
  </Link>

  {/* رابط لينكد إن */}
  <Link to="https://www.linkedin.com/company/4thpyramidd/" className="text-black hover:text-[#44c5f0] mx-2">
    <FaLinkedinIn size={24} />
  </Link>

  {/* رابط انستغرام */}
  <Link to="https://www.instagram.com/4thpyramidd/" className="text-black hover:text-[#44c5f0] mx-2">
    <FaInstagram size={24} />
  </Link>
</div>
    </div>

   

    {/* قسم الخدمات */}
    <div className="space-y-4 mb-6 md:mb-0 order-3 md:order-none relative ">
      <h3 className="text-lg font-bold text-[#44c5f0] ">Our Services</h3>
      <div className="absolute right-0 lg:left-0  top-4 w-24 h-0.5 bg-transparent border-b-2 border-gray-300"></div>


<div className="absolute right-0 lg:left-0 top-4 w-14 h-0.5 bg-[#2e829e]"></div>
      <ul className="text-sm space-y-2">
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">Building</Link></li>
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">Construction</Link></li>
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">Meeting Room</Link></li>
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">Event Space</Link></li>
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">Creative Studio</Link></li>
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">Custom Room</Link></li>
      </ul>
    </div>

    {/* قسم الروابط المفيدة */}
    <div className="space-y-4 mb-6 md:mb-0 order-4 md:order-none relative ">
      <h3 className="text-lg font-bold text-[#44c5f0]">Useful Links</h3>
      <div className="absolute right-0 lg:left-0  top-4 w-24 h-0.5 bg-transparent border-b-2 border-gray-300"></div>


<div className="absolute right-0 lg:left-0 top-4 w-14 h-0.5 bg-[#2e829e]"></div>
      <ul className="text-sm space-y-2">
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">About Construction</Link></li>
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">Special Features</Link></li>
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">Our Team</Link></li>
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">FAQ</Link></li>
        <li><Link to="#" className="text-black hover:text-[#44c5f0]">Project</Link></li>
      </ul>
    </div>
     {/* قسم Instagram */}
     <div className="space-y-4 mb-6 md:mb-0 order-2 md:order-none">
      <h3 className="text-lg font-bold text-[#44c5f0]">Instagram</h3>
      <div className="grid grid-cols-3 gap-2">
        <Link to="#" className="block">
          <img src={footer1} alt="Instagram Image 1" className="w-20 h-auto" />
        </Link>
        <Link to="#" className="block">
          <img src={footer2} alt="Instagram Image 2" className="w-20 h-auto" />
        </Link>
        <Link to="#" className="block">
          <img src={footer3} alt="Instagram Image 3" className="w-20 h-auto" />
        </Link>
        <Link to="#" className="block">
          <img src={footer4} alt="Instagram Image 4" className="w-20 h-auto" />
        </Link>
        <Link to="#" className="block">
          <img src={footer5} alt="Instagram Image 5" className="w-20 h-auto" />
        </Link>
        <Link to="#" className="block">
          <img src={footer6} alt="Instagram Image 6" className="w-20 h-auto" />
        </Link>
      </div>
    </div>
  </div>

  {/* القسم السفلي */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
    <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      <div className="text-sm text-black mb-2 sm:mb-0">
        <Link to="#" className="hover:text-[#44c5f0]">Privacy Policy</Link> | 
        <Link to="#" className="hover:text-[#44c5f0]">Terms of Policy</Link>
      </div>
      <div className="text-sm text-black">
        Copyright © 2023 Constructiva. All rights reserved.
      </div>
    </div>
  </div>
</footer>

    
    
    </>
  )
}
