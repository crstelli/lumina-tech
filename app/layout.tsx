import "@/app/globals.css";

import { Navbar } from "@/components/navbar/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex flex-col text-gray-dark">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
