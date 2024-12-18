"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-screen bg-[#F9FAFB] flex items-center justify-between p-8 pb-20 gap-16">
      <div
        className="flex-col justify-center ml-56
      "
      >
        <h1 className="text-[#5271ff] font-archivo-bold font-bold text-5xl">
          ColabTask é o hub de tarefas
          <br /> ideal para o seu time
        </h1>
        <div className="flex-col justify-center mt-6">
          <input
            className="flex h-[49px] w-[393px] rounded-lg p-2 mt-20 border-2 border-[#EBF0FF]  focus:outline-none text-[#5271ff]"
            type="email"
            name="e-mail"
            placeholder="E-mail"
          />
          <Link
            href="/cadastro"
            className="flex justify-center h-[49px] w-[330px] rounded-lg  bg-[#5271ff] text-[#FFFFFF] mt-6 p-2 text-xl"
          >
            Faça sua inscrição. É grátis
          </Link>
        </div>
      </div>
      <div className="mt-20 mr-56">
        <Image
          src="/img/img-home-blue.svg"
          alt="Home Illustration"
          width={480}
          height={360}
        />
      </div>
    </div>
  );
};

export default HeroSection;
