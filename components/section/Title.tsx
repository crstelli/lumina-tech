interface Props {
  children: string;
}

function Title({ children }: Props) {
  return <h2 className="text-4xl uppercase font-bold">{children}</h2>;
}

export { Title };
