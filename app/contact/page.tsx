import { Button } from "@/components/Button";
import { Input } from "@/components/form/Input";
import { Container } from "@/components/section/Container";
import { Paragraph } from "@/components/section/Paragraph";
import { Title } from "@/components/section/Title";
import { Mail, MapPin, Phone } from "lucide-react";

export default function page() {
  return (
    <Container>
      <Title>Contact</Title>
      <Paragraph classes="mt-6">
        Siamo qui per aiutarti a trasformare i tuoi spazi con soluzioni di
        illuminazione smart, efficienti e su misura. Che tu abbia bisogno di una
        consulenza, un preventivo o semplici informazioni, il nostro team è
        pronto a rispondere in modo rapido e diretto.
      </Paragraph>

      <form className="mt-20 px-4 py-6 rounded-md shadow-[0_1px_20px_rgba(0,0,0,0.15)] flex flex-col sm:grid grid-cols-2 w-[90%] gap-y-3 sm:gap-y-6 gap-x-4 max-w-[700px]">
        <h2 className="sm:col-span-2 mb-10 text-center text-2xl font-bold">
          Non perdere altro tempo, scrivici!
        </h2>
        <Input placeholder="Nome" type="text" />
        <Input placeholder="Cognome" type="text" />
        <Input placeholder="Indirizzo Email" type="email" />
        <Input placeholder="Cellulare" type="tel" />
        <textarea
          maxLength={1000}
          rows={5}
          className="sm:col-span-2 resize-none border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:shadow-2xl focus:shadow-primary-500/50 focus:border-primary-500 focus:ring-primary-500"
          placeholder="Raccontaci di piú..."
        />
        <Button className="col-span-2 mt-4" type="submit">
          Send Message
        </Button>
      </form>

      <div className="flex flex-col gap-10 mt-30">
        <h3 className="text-2xl text-center font-bold">I nostri contatti</h3>
        <div className="flex flex-col sm:grid grid-cols-3 gap-15">
          <div className="flex flex-col gap-2 text-lg italic items-center">
            <span className="bg-orange-100 p-4 rounded-full">
              <Phone className="text-primary-500 size-7" />
            </span>
            <span>+39 080 102 9002</span>
          </div>
          <div className="flex flex-col gap-2 text-lg italic items-center">
            <span className="bg-orange-100 p-4 rounded-full">
              <Mail className="text-primary-500 size-7" />
            </span>
            <span>info@luminatech.it</span>
          </div>
          <div className="flex flex-col gap-2 text-lg italic items-center">
            <span className="bg-orange-100 p-4 rounded-full">
              <MapPin className="text-primary-500 size-7" />
            </span>
            <span>Via Porpora 52, Milano MI</span>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mt-40 border border-gray-200 rounded-md overflow-hidden w-full aspect-square sm:aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.194344586345!2d9.220513076823401!3d45.486031031981014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6e501994ef9%3A0x319d3add3f65262a!2sVia%20Nicola%20Antonio%20Porpora%2C%2056-62%2C%2020131%20Milano%20MI!5e0!3m2!1sen!2sit!4v1763489112078!5m2!1sen!2sit"
          className="border-0 w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

      <h4 className="mt-30 italic text-4xl pb-3 text-center text-gray-700">
        Illuminiamo <span className="text-primary-500">insieme</span> il futuro.
      </h4>
    </Container>
  );
}
