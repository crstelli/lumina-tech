function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 gap-1 mt-40 flex max-sm:flex-col items-center justify-center py-10">
      <span>
        Made by{" "}
        <a href="https://www.github.com/crstelli" target="blank">
          crstelli
        </a>
      </span>
      <span className="max-sm:hidden px-2">-</span>
      <span>&copy; 2025 All right reserved</span>
    </footer>
  );
}

export { Footer };
