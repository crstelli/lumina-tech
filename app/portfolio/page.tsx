import { Button } from "@/components/Button";
import { Navbar } from "@/components/navbar/Navbar";
import { Container } from "@/components/section/Container";
import { Title } from "@/components/section/Title";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Navbar active="Portfolio" />
      <Container>
        <Title>Portfolio</Title>
        <p className="w-[70%] text-center mt-6 italic">
          Una selezione dei progetti che abbiamo realizzato per aziende e
          privati. Dalla consulenza alla progettazione, ogni soluzione è pensata
          per massimizzare efficienza, estetica e tecnologia.
        </p>

        <div className="mt-10">
          <div className="grid grid-cols-2 w-[850px] justify-between">
            <div className="relative aspect-5/3 w-[400px]">
              <Image
                src="/project-1.jpg"
                className="object-center object-cover rounded-md"
                alt="Image of our work"
                fill
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-2xl">TechCorp Headquarters</h3>
              <span className="bg-green-300 mt-1 self-start uppercase font-bold px-2 py-1 rounded-full">
                OFFICE
              </span>
              <p className="text-sm my-auto">
                Installazione completa di sistemi di illuminazione smart per
                uffici open-space, sale riunioni e aree comuni. Controllo
                centralizzato via app e sensori di presenza.
              </p>
              <Button variant="secondary" size="sm" className="mt-auto">
                Maggiori Informazioni &rarr;
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
