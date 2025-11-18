import { Button } from "@/components/Button";
import { Statistics } from "@/components/statistics/Statistics";

import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <main className="flex flex-col gap-20 mt-15 bg-radial from-primary-500 to-60% to-white">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-gray-900 font-bold mt-20">
          Illuminiamo il futuro,
          <br />
          <span className="text-primary-500">Oggi</span>
        </h1>
        <div className="relative w-full max-w-[500px] aspect-square m-auto">
          <Image src="/hero.png" fill alt="Image of a light bulb" />
        </div>
        <Link href="/contact" className="mx-auto">
          <Button size="lg">Richiedi un preventivo &rarr;</Button>
        </Link>
      </main>
      <div className="flex flex-col gap-20">
        <h2 className="text-center text-4xl mt-30 md:mt-50">
          Le Nostre Statistiche
        </h2>
        <Statistics />
        <Link
          href="/about"
          className="mx-auto shadow-xl/50 shadow-primary-500 mt-20 cursor-pointer"
        >
          <Button>Scopri il nostro team &rarr;</Button>
        </Link>
      </div>
    </>
  );
}
