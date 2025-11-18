"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "./testimonials/Card";

const testimonials = [
  {
    name: "Marco R., CEO di TechCorp",
    avatar: "person-1.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },

  {
    name: "Lucia B., cliente residenziale",
    avatar: "person-2.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },

  {
    name: "Giovanni F., proprietario Ristorante Lumière",
    avatar: "person-3.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },

  {
    name: "Elena S., responsabile Hotel Aurora",
    avatar: "person-4.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },

  {
    name: "Alessandro M., responsabile Fabbrica SmartLight",
    avatar: "person-5.jfif",
    content:
      "Grazie a LuminaTech, il nostro ufficio è più luminoso e abbiamo ridotto i costi energetici del 40%. La gestione centralizzata delle luci è semplice e intuitiva.",
  },
];

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla w-[500px] mt-20" ref={emblaRef}>
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
