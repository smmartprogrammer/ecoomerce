import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "./index";
import Logo from "@/public/Logo.webp";
import { link } from "fs";

const Footer = () => {
  return (




<div className="flex   mt-44 border-t border-gray-100  gap-4">
      <div className="flex  justify-center items-center gap-6 ">
        <Image src={Logo} alt="logo" className="object-contain"  />
        <p className="mt-6 font-normal text-[#976866] text-lg flex flex-wrap">
          
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
      </div>
      <div className="flex gap-12    ">
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h3 className="mt-6 font-bold text-[#666666] text-xl">
              {link.title}{" "}
            </h3>
            {link.links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="mt-4 font-normal text-[#976866] text-lg  flex items-center "
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
