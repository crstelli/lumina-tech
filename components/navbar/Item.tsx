import Link from "next/link";

interface Props {
  children: string;
  active: boolean;
  customRef?: string;
}

function Item({ children, active, customRef }: Props) {
  const ref = customRef || children.toLowerCase();

  return (
    <li>
      <Link
        className={`uppercase text-lg cursor-pointer hover:text-gray-dark" ${
          active && "text-primary-500 font-bold"
        }`}
        href={ref}
      >
        {children}
      </Link>
    </li>
  );
}

export { Item };
