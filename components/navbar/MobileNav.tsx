"use client";

import { useState } from "react";
import { Home, Info, Map, Menu, Phone, User, X } from "lucide-react";
import { Item } from "./Item";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen ? (
        <X
          onClick={handleClose}
          size={45}
          className="absolute text-black top-6 left-8 z-2 lg:hidden"
        />
      ) : (
        <Menu
          onClick={handleOpen}
          size={45}
          className="absolute text-black top-6 left-8 lg:hidden"
        />
      )}

      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed top-0 left-0 w-screen h-screen backdrop-blur-lg backdrop-brightness-70 z-1 lg:hidden"
        >
          <ul className="flex flex-col gap-6 items-center text-2xl sm:text-3xl justify-center h-full">
            <span className="flex items-center gap-2">
              <Home size={30} strokeWidth={2} />
              <Item customRef="/">Home</Item>
            </span>
            <span className="flex items-center gap-2">
              <Info size={30} strokeWidth={2} />
              <Item>About</Item>
            </span>
            <span className="flex items-center gap-2">
              <Map size={30} strokeWidth={2} />
              <Item>Portfolio</Item>
            </span>
            <span className="flex items-center gap-2">
              <User size={30} strokeWidth={2} />
              <Item>Testimonials</Item>
            </span>
            <span className="flex items-center gap-2">
              <Phone size={30} strokeWidth={2} />
              <Item>Contact</Item>
            </span>
          </ul>
        </div>
      )}
    </>
  );
}

export { MobileNav };
