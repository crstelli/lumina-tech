interface Props {
  children: string;
}

function Title({ children }: Props) {
  return <h1 className="text-4xl uppercase font-bold">{children}</h1>;
}

export { Title };
