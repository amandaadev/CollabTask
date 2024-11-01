import Image from "next/image";
import HeaderDeslogada from "./components/header-deslogada/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeaderDeslogada></HeaderDeslogada>
      <div className="h-screen bg-gradient-to-r from-[#a735b5] to-[#b33375] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex justify-between items-center mt-20">
          <div className="flex-col justify-center">
            <h1 className="text-[#FFFFFF] font-sans text-5xl">
              ColabTask é o hub de tarefas
              <br /> ideal para o seu time
            </h1>
            <div className="flex-col justify-center mt-6">
              <input
                className="flex h-[49px] w-[393px] rounded-lg p-2 mt-20 focus:outline-none text-[#64183F]"
                type="email"
                name="e-mail"
                id=""
                placeholder="E-mail"
              />
              <Link
                href="/cadastro"
                className="flex justify-center h-[49px] w-[330px] rounded-lg bg-[#64183F] text-[#FFFFFF] mt-6 p-2 text-xl"
              >
                Faça sua inscrição. É grátis
              </Link>
            </div>
          </div>
          <div className="mt-20 ml-20">
            <Image
              src="/img/img-home.svg"
              alt="Home Illustration"
              width={480}
              height={360}
            />
          </div>
        </div>
      </div>
    </>
  );
}
