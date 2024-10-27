import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoDark from "../../assets/logo.png"; // الصورة الأساسية
import logoLight from "../../assets/logoLight.png"; // الصورة التي ستظهر عند التمرير
import useNavbar from "./../../hooks/useNavbar";

import "./Navbar.css";

const Navbar = () => {
  const { navigation } = useNavbar();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full top-0 transition-colors duration-300 h-24 z-50 ${
        scrolling ? "bg-gray-200" : "bg-gray-800"
      }`}>
      {({ open }) => (
        <>
          <div className="mx-auto lg:px-6">
            <div className="relative flex items-center justify-between h-full">
              {/* Mobile menu button centered vertically */}
              <div className="absolute inset-y-0 right-4 flex justify-center items-center md:hidden h-full">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-between w-full">
                {/* Navigation Links on the right */}
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex items-center space-x-8 py-2">
                    {navigation.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? scrolling
                                ? "font-bold active text-black activeScroll"
                                : "text-white font-bold active border-white"
                              : scrolling
                              ? "text-black "
                              : "text-white"
                          } px-4 mx-8 py-2 text-md transition duration-200`
                        }
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                        {item.icon}
                      </NavLink>
                    ))}
                  </div>
                </div>

                {/* Logo on the left */}
                <div className="flex-shrink-0 ms-auto">
                  <Link
                    className="space-x-1 flex justify-center items-center navbar-brand logoimg"
                    to="/">
                    <img
                      src={scrolling ? logoDark : logoLight} // تغيير الشعار بناءً على التمرير
                      alt="logo"
                      className={`transition-all duration-300 h-24`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div
              className={`space-y-1 py-2 px-2 w-full ${
                scrolling ? "bg-gray-200" : "bg-gray-800"
              }`}>
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? scrolling
                          ? "text-orange-600 font-bold activeScroll"
                          : "text-white active font-bold"
                        : scrolling
                        ? "text-black "
                        : "text-white"
                    } block w-full px-4 py-2 text-md transition duration-200`
                  }
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                  {item.icon}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
