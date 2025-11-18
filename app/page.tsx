import { Statistics } from "@/components/statistics/Statistics";

import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="w-[95%] max-w-[1300px] mx-auto flex flex-col gap-20 mt-15 bg-radial from-primary-500 to-60% to-white">
      <h1 className="text-center text-7xl text-black font-bold mt-20">
        Illuminiamo il futuro,
        <br />
        <span className="text-primary-500">Oggi</span>
      </h1>
      <div className="relative w-[500px] aspect-square m-auto">
        <Image src="/hero.png" fill alt="Image of a light bulb" />
      </div>
      <Link
        href="/services"
        className="bg-primary-500 mx-auto rounded-md text-center text-2xl px-10 py-4 cursor-pointer font-bold uppercase"
      >
        Vedi i nostri Servizi &rarr;
      </Link>
      <h2 className="text-center text-4xl mt-30">Le Nostre Statistiche</h2>
      <Statistics />
    </main>
  );
}
