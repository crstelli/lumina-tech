interface Props {
  children: string;
}

function Item({ children }: Props) {
  return (
    <li className="uppercase font-bold cursor-pointer hover:text-gray-dark">
      {children}
    </li>
  );
}

export { Item };
