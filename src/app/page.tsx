import Image from "next/image";
import HeaderDeslogada from "./components/header-deslogada/header";

export default function Home() {
  return (
    <>
      <div>
        <HeaderDeslogada></HeaderDeslogada>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="bg-red-400">TESTE</h1>
      </div>
    </>
  );
}
