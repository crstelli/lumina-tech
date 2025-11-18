import { Navbar } from "@/components/navbar/Navbar";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Navbar active="About" />
      <main className="flex flex-col items-center mt-15">
        <h2 className="text-4xl uppercase font-bold">About us</h2>

        <div className="grid grid-cols-2 gap-x-20 items-center mt-20">
          <div className="w-full aspect-3/2 relative rounded-md overflow-hidden">
            <Image
              src="/about.jpg"
              alt="Image of people working together"
              className="object-cover object-center"
              fill
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              We are a <span className="text-primary-500">strong</span> team
            </h1>
            <p className="mt-10 text-lg">
              LuminaTech nasce dall&apos;idea di un team di ingegneri e designer
              con la passione per la tecnologia sostenibile. Crediamo che ogni
              ambiente meriti la giusta luce senza compromettere
              l&apos;ambiente.
            </p>
            <p className="mt-10 text-lg">
              Per questo sviluppiamo soluzioni che uniscono efficienza,
              innovazione e design, rendendo l&apos;illuminazione smart
              accessibile a tutti. La nostra priorità è creare prodotti
              affidabili che migliorano la vita quotidiana e riducono al minimo
              l&apos;impatto ambientale.
            </p>
          </div>
        </div>
        <p className="mt-30 text-xl italic border grid grid-cols-[auto_1fr] gap-x-2 text-gray-700 py-4 px-8 border-orange-200 shadow-md rounded-t-xl rounded-l-xl">
          <Quote size={30} className="text-primary-500" strokeWidth={2} />
          <span className="row-2 col-2">
            Da soli possiamo fare così <strong>poco</strong>;
            <br />
            insieme possiamo fare così <strong>tanto</strong>.
          </span>
          <span className="col-2 row-3 justify-self-end mt-5 text-lg text-gray-500">
            - Hellen Keller
          </span>
        </p>
      </main>
    </>
  );
}
