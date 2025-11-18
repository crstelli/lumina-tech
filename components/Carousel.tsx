"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Card } from "./testimonials/Card";

const testimonials = [
  {
    name: "Marco R.",
    avatar: "person-1.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },

  {
    name: "Lucia B.",
    avatar: "person-2.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },

  {
    name: "Giovanni F.",
    avatar: "person-3.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },

  {
    name: "Elena S.",
    avatar: "person-4.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },

  {
    name: "Alessandro M.",
    avatar: "person-5.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },
];

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, startDelay: 0 }),
  ]);

  return (
    <div className="embla w-[700px] mt-20" ref={emblaRef}>
      <div className="embla__container">
        {testimonials.map((test) => (
          <div className="embla__slide" key={test.name}>
            <Card testimonial={test} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Carousel };
