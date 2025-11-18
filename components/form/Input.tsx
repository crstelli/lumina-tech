function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`border rounded-md px-4 py-2 border-gray-300 focus:outline-none focus:ring-1 focus:shadow-2xl focus:shadow-primary-500 focus:border-primary-500 focus:ring-primary-500 ${className}`}
      {...props}
    />
  );
}

export { Input };
