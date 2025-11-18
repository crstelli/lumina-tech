import Image from "next/image";

interface Props {
  testimonial: {
    name: string;
    content: string;
    avatar: string;
  };
}

function Card({ testimonial }: Props) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4">
      <div className="size-10 relative">
        <Image
          src={`/testimonials/${testimonial.avatar}`}
          className="rounded-full"
          alt="Avatar of the client"
          fill
        />
      </div>
      <h4 className="font-bold text-lg">{testimonial.name}</h4>
      <p className="col-2 italic">{testimonial.content}</p>
    </div>
  );
}

export { Card };
