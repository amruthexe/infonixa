"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full h-16 bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Icons.icon className="w-6 text-blue-400" />
              <span className="text-xl font-semibold hidden lg:block text-white">
                Infonixa
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 relative">
            <ul className="flex items-center gap-8">
              
            </ul>
          </div>

          {/* Request a Quote button & Mobile menu */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:block">
              <Button variant="blue">Request a Quote</Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
