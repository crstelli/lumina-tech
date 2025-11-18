import { Card } from "./Card";
import { Map, User, Zap } from "lucide-react";

function Statistics() {
  return (
    <div className="grid grid-cols-3 w-[1000px] gap-30 mx-auto justify-between">
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
