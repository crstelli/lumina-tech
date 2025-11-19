import Link from "next/link";
import { TextLogo } from "../TextLogo";
import { Item } from "./Item";

function DesktopNav() {
  return (
    <nav className="px-4 py-2 hidden lg:flex rounded-md items-center mt-15 mx-auto justify-between">
      <Link href="/">
        <TextLogo />
      </Link>
      <ul className="flex gap-4 text-lg text-gray-500">
        <Item customRef="/">Home</Item>
        <Item>About</Item>
        <Item>Portfolio</Item>
        <Item>Testimonials</Item>
        <Item>Contact</Item>
      </ul>
    </nav>
  );
}

export { DesktopNav };
