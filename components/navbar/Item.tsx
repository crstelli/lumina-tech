import Link from "next/link";

interface Props {
  children: string;
  customRef?: string;
}

function Item({ children, customRef }: Props) {
  const ref = customRef || children.toLowerCase();

  return (
    <li className="uppercase font-bold cursor-pointer hover:text-gray-dark">
      <Link href={ref}>{children}</Link>
    </li>
  );
}

export { Item };
