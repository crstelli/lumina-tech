import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { Container } from "@/components/section/Container";
import { Paragraph } from "@/components/section/Paragraph";
import { Title } from "@/components/section/Title";
import { Check } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Container>
        <Title>Testimonials</Title>
        <Paragraph classes="mt-6">
          Le opinioni dei nostri clienti riflettono l&apos;impatto reale delle
          soluzioni che realizziamo. Collaboriamo con aziende e privati che
          cercano un&apos;illuminazione più intelligente, affidabile e
          sostenibile, e i loro feedback confermano la qualità e
          l&apos;efficacia del nostro lavoro.
        </Paragraph>

        <Carousel />

        <h3 className="mt-30 font-bold text-3xl bg-clip-text bg-linear-to-r from-orange-500 to-primary-500 text-transparent">
          Ci sei quasi!
        </h3>
        <div className="mt-10 min-[570px]:text-lg grid text-center grid-cols-3 gap-10 relative">
          <div className="w-full h-1 bg-linear-to-r from-green-500 to-primary-500 absolute top-6"></div>
          <div className="flex flex-col items-center">
            <span className="bg-green-200 z-1 p-2 rounded-full">
              <Check className="text-green-500 size-10" />
            </span>
            <h5 className="mt-4 font-bold text-green-400">
              Scopri la nostra azienda
            </h5>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-gray-200 z-1 p-2 rounded-full">
              <span className="size-10 font-bold flex items-center justify-center text-2xl">
                2
              </span>
            </span>
            <h5 className="mt-4 font-bold">Contattaci ora</h5>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-gray-200 z-1 p-2 rounded-full">
              <span className="size-10 flex text-gray-500 items-center justify-center text-2xl">
                3
              </span>
            </span>
            <h5 className="mt-4 text-gray-500">Diventa nostro cliente</h5>
          </div>
        </div>
        <Link className="mt-20" href="/contact">
          <Button>Diventa un nostro cliente &rarr;</Button>
        </Link>
      </Container>
    </>
  );
}
