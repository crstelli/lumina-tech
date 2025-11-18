interface Props {
  children: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: React.ComponentProps<"div">["className"];
}

function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: Props) {
  const baseClasses = "rounded-md cursor-pointer font-bold uppercase";

  const variants = {
    primary: "bg-primary-500",
    secondary: "bg-gray-300",
  };

  const sizes = {
    sm: "px-2 py-1",
    md: "px-6 py-2 text-lg",
    lg: "px-10 py-4 text-2xl",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export { Button };
