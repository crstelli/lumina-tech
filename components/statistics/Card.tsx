import type { LucideIcon } from "lucide-react";

interface Props {
  children: string;
  label: string;
  icon: LucideIcon;
}

function Card({ children, label, icon: Icon }: Props) {
  return (
    <div className="flex flex-col items-center text-center shadow-lg py-6 border border-gray-200 rounded-lg px-6">
      <span className="bg-orange-100 p-4 rounded-full text-primary-500">
        <Icon size={40} />
      </span>
      <h3 className="text-xl font-bold text-center mt-10">{children} </h3>
      <p className="mt-4 text-gray-600">{label}</p>
    </div>
  );
}

export { Card };
