import { Card } from "./Card";
import { Map, User, Zap } from "lucide-react";

function Statistics() {
  return (
    <div className="grid grid-cols-1 max-w-[350px] lg:grid-cols-3 lg:max-w-[1000px] w-[90%] gap-15 lg:gap-6 mx-auto justify-between">
      <Card icon={Map} label="tra aziende e privati, negli ultimi 3 anni">
        Oltre 120 progetti completati
      </Card>
      <Card
        icon={Zap}
        label="grazie ai sistemi di illuminazione smart installati"
      >
        50% di consumo energetico ridotto
      </Card>
      <Card icon={User} label="misurato tramite feedback post-installazione">
        98% di clienti soddisfatti
      </Card>
    </div>
  );
}

export { Statistics };
