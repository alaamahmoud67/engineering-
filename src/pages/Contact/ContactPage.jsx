import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "5fe64383-22c0-4cf8-b10f-602c30089a6f",
        ...formData
      })
    });
    if (response.ok) {
      setStatus("تم إرسال الرسالة بنجاح!");
      setFormData({ name: "", email: "", phone: "", message: "" }); 
    } else {
      setStatus("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    }
  
   
};
  return <>
    <div className="relative  h-[80vh] bg-cover bg-center bg-About mb-5 bg-fixed" >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl	font-bold		">تواصل معنا</h1>
      </div>
    </div>
    {/*  */}
   <div className=" py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="border p-8 rounded-md">
  <h3 className="text-lg font-bold text-black mb-6">PHONE</h3>
  <div className="flex items-center mb-4">
    <FaPhoneAlt className="text-[#44c5f0] mx-2" />
    <p className="text-black">0554183175</p>
  </div>

  <h3 className="text-lg font-bold text-black mb-6">E-MAIL</h3>
  <div className="flex items-center mb-4">
    <FaEnvelope className="text-[#44c5f0] mx-2" />
    <p className="text-black">contact@4thpyarmids.com</p>
  </div>

  <h3 className="text-lg font-bold text-black mb-6">ADDRESS</h3>
  <div className="flex items-center">
    <div>
    <FaMapMarkerAlt className="text-[#44c5f0] mx-2" />

    </div>
    <p className="text-black">المركز الرئيسي : مدينة الرياض _حي السويدي الغربي _شارع حمزه بن عبد المطلب وفرعه بمحافظة القويعيه :شارع الملك عبد العزيز مكتب القاهره : القاهره-7 عمارات الشرطه-جسر السويس</p>
  </div>
</div>
    <div className="flex flex-col justify-center">
      <section>
      

       
        {/* Contact form */}
        <form onSubmit={handleSubmit} className=" p-6  space-y-4">
  <input
    type="text"
    name="name"
    placeholder="الاسم"
    value={formData.name}
    onChange={handleChange}
    required
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="email"
    name="email"
    placeholder="البريد الإلكتروني"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="number"
    name="phone"
    placeholder="رقم الهاتف"
    value={formData.phone}
    onChange={handleChange}
    required
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <textarea
    name="message"
    placeholder="الرسالة"
    value={formData.message}
    onChange={handleChange}
    required
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    rows="4"
  />
 <button 
  type="submit" 
  className="lg:w-auto sm:w-full px-6 py-3 bg-[#44c5f0] text-white font-semibold rounded-lg transition duration-300 hover:bg-[#38b0e0] hover:shadow-lg"
>
  إرسال
</button>
  {status && <p className="text-center text-green-500 font-semibold mt-4">{status}</p>}
</form>

      </section>
    </div>
   
  </div>
</div>
{/*  */}
<section className="w-full h-screen  flex items-center justify-center pt-9 bg-[#1f2937]">
  <div className="w-full lg:w-3/4 h-[90vh] rounded-lg overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://maps.google.com/maps?q=%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%20_%D8%AD%D9%8A%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%AF%D9%8A%20%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%20_%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%AD%D9%85%D8%B2%D9%87%20%D8%A8%D9%86%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%85%D8%B7%D9%84%D8%A8&t=m&z=17&output=embed&iwloc=near"
      allowFullScreen=""
      loading="lazy"
      title="مدينة الرياض _حي السويدي الغربي _شارع حمزه بن عبد المطلب"
    ></iframe>
  </div>
</section>
    </>;
}

export default ContactPage
