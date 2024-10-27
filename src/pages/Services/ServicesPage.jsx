import React from 'react'
import Section from '../Section-Services/Section';

const ServicesPage = () => {
  return <>
     <div className="relative  h-[70vh] bg-cover bg-center bg-service mb-5 bg-fixed" >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50 ">
        <h1 className="text-white text-5xl	font-bold		">خدمتنا</h1>
      </div>
    </div>
    <Section/>
    <div className=" bg-white bg-opacity-20 p-4 ">
            {/* العنصر الرئيسي */}
            <h1 className="text-xl font-bold ">عنوانك هنا</h1>

            {/* شريط قبل العنصر */}
           
        </div>
    </>;
};

export default ServicesPage;