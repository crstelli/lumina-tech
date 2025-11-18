import { Button } from "@/components/Button";
import { Container } from "@/components/section/Container";
import { Paragraph } from "@/components/section/Paragraph";
import { Title } from "@/components/section/Title";
import { Card } from "@/components/works/Card";
import Link from "next/link";

const projects = [
  {
    title: "TechCorp Headquarters",
    description:
      "Installazione completa di sistemi di illuminazione smart per uffici open-space, sale riunioni e aree comuni. Controllo centralizzato via app e sensori di presenza.",
    tag: "Office",
    image: "project-1.jpg",
  },

  {
    title: "Casa Moderna",
    description:
      "Integrazione di lampadine intelligenti, luci a striscia LED e automazioni per illuminazione notturna e scenari personalizzati.",
    tag: "Residence",
    image: "project-2.jpg",
  },

  {
    title: "Showroom Verde",
    description:
      "Design sostenibile con luci LED a basso consumo, regolabili in intensità e colore per valorizzare prodotti e spazi.",
    tag: "Activity",
    image: "project-3.jpg",
  },

  {
    title: "Ristorante Lumière",
    description:
      "Sistema di illuminazione dinamica che cambia colore e intensità per creare atmosfere diverse durante il giorno e la sera.",
    tag: "Activity",
    image: "project-4.jpg",
  },

  {
    title: "Fabbrica SmartLight",
    description:
      "Upgrade dell'illuminazione industriale con LED intelligenti e sensori di movimento per ottimizzare consumi e sicurezza dei lavoratori.",
    tag: "Business",
    image: "project-5.jpg",
  },

  {
    title: "Hotel Aurora",
    description:
      "Sistema di gestione luci per camere e hall, integrato con app per personalizzare l’esperienza degli ospiti e ridurre sprechi energetici.",
    tag: "Activity",
    image: "project-6.jpg",
  },
];

export default function page() {
  return (
    <>
      <Container>
        <Title>Portfolio</Title>
        <Paragraph classes="mt-6">
          Una selezione dei progetti che abbiamo realizzato per aziende e
          privati. Dalla consulenza alla progettazione, ogni soluzione è pensata
          per massimizzare efficienza, estetica e tecnologia.
        </Paragraph>

        <div className="mt-10 flex flex-col gap-12 w-[90%]">
          {projects.map((pr, i) => (
            <Card project={pr} invert={i % 2 === 1} key={i} />
          ))}
        </div>

        <Paragraph classes="mt-20">
          Ogni progetto rappresenta un passo verso un&apos;illuminazione più
          efficiente, moderna e sostenibile. Continuiamo a sperimentare,
          migliorare e costruire soluzioni che uniscono tecnologia e design per
          offrire risultati concreti e duraturi ai nostri clienti.
        </Paragraph>

        <Link className="mx-auto mt-20" href="/testimonials">
          <Button>Cosa dicono di noi &rarr;</Button>
        </Link>
      </Container>
    </>
  );
}
