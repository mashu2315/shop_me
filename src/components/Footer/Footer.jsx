import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { FaMapLocationDot } from 'react-icons/fa6'
import { FaFacebook ,FaInstagram, FaLinkedin} from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { FaRegCopyright } from "react-icons/fa";

const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];
  

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
        <div className="container">
            <div className="grid md:grid-cols-3 pb-44 pt-5" >
                {/* company details */}
                <div className="py-8 px-4">
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1'>
                        <FiShoppingBag size={30}/>
                        ShopMe
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam doloribus architecto suscipit maxime.
                    </p>
                </div>

                {/* Footer Links  */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                    <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                           Importants Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                    <li
                                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                    key={link.title}
                                    >
                                    <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                            Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                    <li
                                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                    key={link.title}
                                    >
                                    <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* social links  */}
                    <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                            <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                            <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                            <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                        <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaMapLocationDot />
                  <p>Gorakhpur,Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoCall />
                  <p>+91 123456789</p>
                </div>
              </div>

                    </div>
                </div>
            </div>
            <div className='border-t-2 flex items-center justify-center px-2  border-white'>
        <FaRegCopyright />
                                <h1 className='mx-2'>All Rights are reserves to XYZ.</h1>
        </div>
        </div>
       
    </div>
  )
}

export default Footer