import { Star } from "lucide-react";

function Rating() {
  return (
    <div className="flex gap-1">
      <Star className="text-yellow-500 fill-yellow-500" />
      <Star className="text-yellow-500 fill-yellow-500" />
      <Star className="text-yellow-500 fill-yellow-500" />
      <Star className="text-yellow-500 fill-yellow-500" />
      <Star className="text-yellow-500 fill-yellow-500" />
    </div>
  );
}

export { Rating };
