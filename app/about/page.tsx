import { Navbar } from "@/components/navbar/Navbar";
import { Quote } from "lucide-react";

export default function page() {
  return (
    <>
      <Navbar active="About" />
      <main className="flex flex-col items-center mt-15">
        <h2 className="text-4xl uppercase font-bold">About us</h2>
        <p className="mt-10 text-2xl italic border grid grid-cols-[auto_1fr] gap-x-2 text-gray-700 py-4 px-8 border-gray-200 shadow-md rounded-t-xl rounded-l-xl">
          <Quote size={30} className="text-primary-500" strokeWidth={2} />
          <span className="row-2 col-2">
            Da soli possiamo fare così <strong>poco</strong>;
            <br />
            insieme possiamo fare così <strong>tanto</strong>.
          </span>
          <span className="col-2 row-3 justify-self-end mt-5 text-lg text-gray-500">
            - Hellen Keller
          </span>
        </p>
      </main>
    </>
  );
}
