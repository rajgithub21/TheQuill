import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.pp2}
              alt="logo"
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-5xl text-black font-black">TheQuill</h1>
          </div>
          <p className="max-w-[410px] mt-6">
            TheQuill is a modern blogging platform designed to give writers a
            voice and readers a place to discover meaningful stories. With a
            clean, intuitive interface, it makes sharing ideas effortless while
            creating a space where creativity meets community.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © TheQuill- All Right Reserved.
      </p>
      <h1 className="font-semibold text-4xl mb-10 text-center mt-5 text-[#920E0C]">
        Created And Developed by Raj Mishra
      </h1>
    </div>
  );
}

export default Footer
