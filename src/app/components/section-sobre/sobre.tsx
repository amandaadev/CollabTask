import Image from "next/image";

const SectionSobre = () => {
  return (
    <div className="h-screen bg-[#FFFFFF] flex justify-between p-8 pb-20 gap-16">
      <div className="flex items-center p-28">
        <Image
          src="/img/img-sobre.svg"
          alt="Home Illustration"
          width={580}
          height={360}
          className="pt-32 pl-7 pr-[35px]"
        />
        <div className="flex flex-col max-w-full m-10">
          <h1 className="mb-[15px] text-[#913276] font-archivo-bold font-bold text-[32px]">
            Sobre
          </h1>
          <p className="text-[#5B5858] text-[20px] font-archivo-regular max-w-[560px]">
            O ColabTask é uma plataforma criada para ajudar equipes a
            organizarem suas tarefas de forma prática e colaborativa. Aqui você
            pode adicionar, atualizar e acompanhar o progresso das tarefas em
            tempo real, garantindo que todos estejam na mesma página. Com uma
            interface fácil de usar e visual moderno, o ColabTask é ideal para
            quem busca mais produtividade e organização no dia a dia.
          </p>
        </div>
      </div>
      <div className="mt-20 ml-20"></div>
    </div>
  );
};

export default SectionSobre;
