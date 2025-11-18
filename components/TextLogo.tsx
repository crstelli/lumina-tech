import { Lamp } from "lucide-react";

function TextLogo() {
  return (
    <div className="flex items-center gap-2 cursor-default">
      <Lamp className="text-primary-500" size={40} />
      <span className="text-3xl font-bold first-letter:text-primary-500">
        Lumina Tech
      </span>
    </div>
  );
}

export { TextLogo };
