import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping, FaHeartCirclePlus } from "react-icons/fa6";

// import { Badge } from "@/components/ui/badge";

const useNavbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const LogIn = (
    <div className="LogOut  flex items-center">
      <span className="px-2">sign in</span>
      <span>
        <FaUserCircle className="text-lg text-gray-100" />
      </span>
    </div>
  );
  const wishlist = (
    <div className="relative px-2">
      <FaHeartCirclePlus className="text-lg text-gray-100" />
    </div>
  );
  const cart = (
    <div className="relative px-2">
      <FaCartShopping className="text-lg text-gray-100" />
    </div>
  );

  const navigation = [
    { name: "الرئيسية", to: "/", current: true },
    { name: "من نحن", to: "about", current: false }, // قم بتغيير `current` حسب الحاجة
    { name: "خدمتنا", to: "services", current: false }, // قم بتغيير `to` حسب المسار الصحيح
    { name: "أعمالنا", to: "products", current: false },
    { name: "موقعنا", to: "location", current: false },
    { name: "تواصل معنا", to: "contact", current: false },
  ];
  return {
    navigation,
    LogIn,
    wishlist,
    cart,
    scrolling,
    handleScroll,
  };
};

export default useNavbar;
