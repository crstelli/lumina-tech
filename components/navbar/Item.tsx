"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: string;
  customRef?: string;
}

function Item({ children, customRef }: Props) {
  const pathname = usePathname();
  const ref = customRef || `/${children.toLowerCase()}`;

  const active = ref === `${pathname}`;

  return (
    <li>
      <Link
        className={`uppercase cursor-pointer hover:text-gray-dark" ${
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
