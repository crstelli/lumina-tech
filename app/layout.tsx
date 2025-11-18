import "@/app/globals.css";
import { Footer } from "@/components/Footer";
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
      <body className="grid grid-rows-[1fr_auto] text-gray-dark">
        <div className="min-h-screen">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
