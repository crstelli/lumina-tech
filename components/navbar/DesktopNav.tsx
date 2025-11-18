import { TextLogo } from "../TextLogo";
import { Item } from "./Item";

function DesktopNav() {
  return (
    <nav className="px-4 py-2 hidden lg:flex rounded-md items-center mt-15 mx-auto justify-between w-[90%] max-w-[1300px]">
      <TextLogo />
      <ul className="flex gap-4 text-gray-medium">
        <Item customRef="/">Home</Item>
        <Item>About</Item>
        <Item>Services</Item>
        <Item>Portfolio</Item>
        <Item>Contact</Item>
      </ul>
    </nav>
  );
}

export { DesktopNav };
