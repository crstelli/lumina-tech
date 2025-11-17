"use client";

import { useState } from "react";

import { TextLogo } from "../TextLogo";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Item } from "./Item";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav className="flex lg:hidden justify-center mx-auto mt-15 w-[90%] max-w-[1300px]">
        <PanelLeftOpen
          onClick={handleOpen}
          className="size-8 absolute left-5 top-5"
        />
        <TextLogo />
      </nav>
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur-xs backdrop-brightness-70">
          <div className="absolute h-screen px-10">
            <PanelLeftClose
              onClick={handleClose}
              className="absolute top-10 right-2 size-8"
            />
            <ul className="mt-30 flex flex-col gap-5 justify-center">
              <Item>Home</Item>
              <Item>About</Item>
              <Item>Services</Item>
              <Item>Portfolio</Item>
              <Item>Contact</Item>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export { MobileNav };
