import Link from "next/link";
import { TextLogo } from "../TextLogo";
import { Item } from "./Item";

interface Props {
  active: string;
}

function DesktopNav({ active }: Props) {
  return (
    <nav className="px-4 py-2 hidden lg:flex rounded-md items-center mt-15 mx-auto justify-between">
      <Link href="/">
        <TextLogo />
      </Link>
      <ul className="flex gap-4 text-gray-500">
        <Item customRef="/" active={active === "Home"}>
          Home
        </Item>
        <Item active={active === "About"}>About</Item>
        <Item active={active === "Portfolio"}>Portfolio</Item>
        <Item active={active === "Testimonials"}>Testimonials</Item>
        <Item active={active === "Contact"}>Contact</Item>
      </ul>
    </nav>
  );
}

export { DesktopNav };
