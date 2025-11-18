interface Props {
  children: string;
  classes?: React.ComponentProps<"div">["className"];
}

function Paragraph({ children, classes }: Props) {
  return <p className={`w-[70%] text-center italic ${classes}`}>{children}</p>;
}

export { Paragraph };
