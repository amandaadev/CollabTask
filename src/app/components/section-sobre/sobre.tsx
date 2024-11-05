import Image from "next/image";

const SectionSobre = () => {
  return (
    <div className="bg-[#FFFFFF] flex-col gap-8 lg:flex-row flex justify-between p-8 pb-20 lg:gap-16">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:p-28">
        <Image
          src="/img/img-sobre.svg"
          alt="Sobre Illustration"
          width={580}
          height={360}
          className="pl-7 lg:pr-[35px] w-full mb-8 lg:mb-0 max-w-[580px]"
        />
        <div className="flex flex-col max-w-full m-10">
          <h1 className="mb-[15px] text-[#913276] font-archivo-bold font-bold text-[32px] ">
            Sobre
          </h1>
          <p className="text-[#5B5858] lg:text-[20px] text-base font-archivo-regular max-w-[560px]">
            O ColabTask é uma plataforma criada para ajudar equipes a
            organizarem suas tarefas de forma prática e colaborativa. Aqui você
            pode adicionar, atualizar e acompanhar o progresso das tarefas em
            tempo real, garantindo que todos estejam na mesma página. Com uma
            interface fácil de usar e visual moderno, o ColabTask é ideal para
            quem busca mais produtividade e organização no dia a dia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionSobre;
