import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

interface Props {
  active: string;
}

function Navbar({ active }: Props) {
  return (
    <>
      <DesktopNav active={active} />
    </>
  );
}

export { Navbar };
