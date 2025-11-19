interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <main className="flex flex-col items-center mt-15 px-4">{children}</main>
  );
}

export { Container };
