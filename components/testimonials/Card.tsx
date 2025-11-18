import Image from "next/image";
import { Rating } from "../Rating";

interface Props {
  testimonial: {
    name: string;
    content: string;
    avatar: string;
  };
}

function Card({ testimonial }: Props) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] border border-gray-300 rounded-md shadow-xs p-4 items-center gap-x-4 gap-y-1">
      <div className="size-10 relative">
        <Image
          src={`/testimonials/${testimonial.avatar}`}
          className="rounded-full"
          alt="Avatar of the client"
          fill
        />
      </div>
      <h4 className="font-bold text-lg">{testimonial.name}</h4>
      <Rating />
      <p className="col-start-2 col-span-2 italic">{testimonial.content}</p>
    </div>
  );
}

export { Card };
