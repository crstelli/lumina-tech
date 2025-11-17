import { TextLogo } from "../TextLogo";
import { Item } from "./Item";

function Navbar() {
  return (
    <nav className="px-4 py-2 rounded-md items-center mt-15 mx-auto flex justify-between w-[90%] max-w-[1300px]">
      <TextLogo />
      <ul className="flex gap-4">
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Services</Item>
        <Item>Portfolio</Item>
        <Item>Contact</Item>
      </ul>
    </nav>
  );
}

export { Navbar };
