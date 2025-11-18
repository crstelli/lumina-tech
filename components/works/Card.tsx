import Image from "next/image";
import { Button } from "../Button";

interface Props {
  project: {
    title: string;
    tag: string;
    description: string;
    image: string;
  };
  invert?: boolean;
}

function Card({ project, invert = false }: Props) {
  return (
    <div
      className={`grid gap-10 w-[800px] rounded-md border border-gray-200 shadow-lg p-4 ${
        invert ? "self-end grid-cols-[2fr_3fr]" : "grid-cols-[3fr_2fr]"
      }`}
    >
      <div className={`relative aspect-5/3 ${invert && "order-2"}`}>
        <Image
          src={`/${project.image}`}
          className="object-center object-cover rounded-md"
          alt="Image of our work"
          fill
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-2xl">{project.title}</h3>
        <span className="bg-primary-500 mt-1 self-start uppercase font-bold px-3 rounded-full">
          {project.tag}
        </span>
        <p className="text-sm my-auto">{project.description}</p>
        <Button variant="secondary" size="sm" className="mt-auto">
          Maggiori Informazioni &rarr;
        </Button>
      </div>
    </div>
  );
}

export { Card };
