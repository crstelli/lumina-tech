import { Button } from "@/components/Button";
import { Navbar } from "@/components/navbar/Navbar";
import { Statistics } from "@/components/statistics/Statistics";

import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Navbar active="Home" />
      <main className="flex flex-col gap-20 mt-15 bg-radial from-primary-500 to-60% to-white">
        <h1 className="text-center text-7xl text-gray-900 font-bold mt-20">
          Illuminiamo il futuro,
          <br />
          <span className="text-primary-500">Oggi</span>
        </h1>
        <div className="relative w-[500px] aspect-square m-auto">
          <Image src="/hero.png" fill alt="Image of a light bulb" />
        </div>
        <Link href="/services" className="mx-auto">
          <Button size="lg">Vedi i nostri Servizi &rarr;</Button>
        </Link>
      </main>
      <div className="flex flex-col gap-20">
        <h2 className="text-center text-4xl mt-50">Le Nostre Statistiche</h2>
        <Statistics />
        <Link
          href="/services"
          className="mx-auto shadow-xl/50 shadow-primary-500 mt-20 cursor-pointer"
        >
          <Button>Richiedi un preventivo &rarr;</Button>
        </Link>
      </div>
    </>
  );
}
