import type { LucideIcon } from "lucide-react";

interface Props {
  children: string;
  label: string;
  icon: LucideIcon;
}

function Card({ children, label, icon: Icon }: Props) {
  return (
    <div className="flex flex-col items-center text-center shadow-2xl py-10 border border-gray-300 rounded-lg px-4">
      <span className="bg-orange-100 p-4 rounded-full text-primary-500">
        <Icon size={40} />
      </span>
      <h3 className="text-xl font-bold text-center mt-6">{children} </h3>
      <p className="mt-4 text-gray-600">{label}</p>
    </div>
  );
}

export { Card };
