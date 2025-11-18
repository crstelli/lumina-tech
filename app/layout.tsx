import "@/app/globals.css";
import { Footer } from "@/components/Footer";

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
        <div className="min-h-screen w-[95%] max-w-[1300px] mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
