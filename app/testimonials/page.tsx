import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { Navbar } from "@/components/navbar/Navbar";
import { Container } from "@/components/section/Container";
import { Paragraph } from "@/components/section/Paragraph";
import { Title } from "@/components/section/Title";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Navbar active="Testimonials" />
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
        <Link className="mt-30" href="/contact">
          <Button>Diventa un nostro cliente &rarr;</Button>
        </Link>
      </Container>
    </>
  );
}
