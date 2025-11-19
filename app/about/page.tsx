import { Button } from "@/components/Button";
import { Container } from "@/components/section/Container";
import { Title } from "@/components/section/Title";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Container>
        <Title>About us</Title>

        <div className="flex flex-col md:grid grid-cols-2 gap-x-20 items-center mt-20">
          <div className="w-full aspect-3/2 max-md:max-w-[400px] relative rounded-md overflow-hidden">
            <Image
              src="/about.jpg"
              alt="Image of people working together"
              className="object-cover object-center"
              fill
            />
          </div>
          <div className="max-md:text-center">
            <h2 className="text-3xl max-md:mt-10 lg:text-4xl font-bold">
              We are a <span className="text-primary-500">strong</span> team
            </h2>
            <p className="mt-10 lg:text-lg">
              LuminaTech nasce dall&apos;idea di un team di ingegneri e designer
              con la passione per la tecnologia sostenibile. Crediamo che ogni
              ambiente meriti la giusta luce senza compromettere
              l&apos;ambiente.
            </p>
            <p className="mt-10 lg:text-lg">
              Per questo sviluppiamo soluzioni che uniscono efficienza,
              innovazione e design, rendendo l&apos;illuminazione smart
              accessibile a tutti. La nostra priorità è creare prodotti
              affidabili che migliorano la vita quotidiana e riducono al minimo
              l&apos;impatto ambientale.
            </p>
          </div>
        </div>
        <p className="mt-30 text-xl italic grid grid-cols-[auto_1fr] gap-x-2 text-gray-700 py-4 px-8 shadow-sm rounded-t-xl rounded-l-xl">
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

        <h3 className="mt-40 text-4xl text-center">
          Faces of{" "}
          <span className="bg-linear-to-l text-transparent bg-clip-text font-black from-primary-500 to-orange-500">
            innovation
          </span>
        </h3>
        <div className="mt-20 grid grid-cols-1 min-[830px]:grid-cols-3 max-w-[1000px] w-full gap-10 justify-between">
          <div className="flex flex-col max-w-[300px] mx-auto gap-2 shadow-lg border border-gray-300 rounded-md">
            <div className="relative w-full aspect-square">
              <Image
                src="/person-1.jpg"
                alt="Person of our team"
                className="object-cover object-center"
                fill
              />
            </div>
            <div className="p-4 grid grid-cols-2 items-center gap-y-2">
              <h4 className="font-bold text-lg col-span-2">Josh Armen</h4>
              <span className="text-gray-500 text-lg">CEO</span>
              <span className="justify-self-end text-gray-500">
                - Since 2019
              </span>
            </div>
          </div>
          <div className="flex flex-col max-w-[300px] mx-auto gap-2 shadow-lg border border-gray-300 rounded-md">
            <div className="relative w-full aspect-square">
              <Image
                src="/person-2.jpg"
                alt="Person of our team"
                className="object-cover object-center"
                fill
              />
            </div>
            <div className="p-4 grid grid-cols-2 items-center gap-y-2">
              <h4 className="font-bold text-lg col-span-2">Lucy Keller</h4>
              <span className="text-gray-500 text-lg">Architect</span>
              <span className="justify-self-end text-gray-500">
                - Since 2021
              </span>
            </div>
          </div>
          <div className="flex flex-col max-w-[300px] mx-auto gap-2 shadow-lg border border-gray-300 rounded-md">
            <div className="relative w-full aspect-square">
              <Image
                src="/person-3.jpg"
                alt="Person of our team"
                className="object-cover object-top"
                fill
              />
            </div>
            <div className="p-4 grid grid-cols-2 items-center gap-y-2">
              <h4 className="font-bold text-lg col-span-2">Carl Monternat</h4>
              <span className="text-gray-500 text-lg">Manager</span>
              <span className="justify-self-end text-gray-500">
                - Since 2020
              </span>
            </div>
          </div>
        </div>
        <Link href="/portfolio" className="mt-25">
          <Button>I nostri progetti &rarr;</Button>
        </Link>
      </Container>
    </>
  );
}
