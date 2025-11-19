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
      className={`grid gap-4 min-[950px]:gap-10 grid-cols-1 max-w-[500px] min-[950px]:grid-cols-2 min-[950px]:max-w-[800px] rounded-md border border-gray-200 shadow-lg p-4 ${
        invert ? "lg:self-end lg:grid-cols-[3fr_4fr]" : "lg:grid-cols-[4fr_3fr]"
      }`}
    >
      <div
        className={`relative aspect-5/3 ${invert ? "min-[950px]:order-2" : ""}`}
      >
        <Image
          src={`/${project.image}`}
          className="object-center object-cover rounded-md"
          alt="Image of our work"
          fill
        />
      </div>
      <div className="flex flex-col max-[950px]:gap-2">
        <h3 className="font-bold text-2xl min-[950px]:text-nowrap">
          {project.title}
        </h3>
        <span className="bg-primary-500 max-[950px]:-order-1 mt-1 self-start uppercase font-bold px-3 rounded-full">
          {project.tag}
        </span>
        <p className="text-sm my-auto max-[950px]:mt-2">
          {project.description}
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="max-[950px]:mt-4 mt-auto"
        >
          Maggiori Informazioni &rarr;
        </Button>
      </div>
    </div>
  );
}

export { Card };
