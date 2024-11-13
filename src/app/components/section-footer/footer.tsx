import Image from "next/image";

const SectionFooter = () => {
  return (
    <footer className="bg-[#5271ff] px-8 sm:px-16 lg:px-40 py-16 font-archivo-bold">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">
        <div className="flex flex-col w-full max-w-[245px] lg:max-w-[245px] leading-5">
          <Image
            src="/img/colab-task-blue.png"
            alt="Logo"
            width={200}
            height={25}
            className="mb-4 object-contain"
          />
          <p className="text-[#FFFFFF] text-sm sm:text-base">
            O ColabTask é uma plataforma prática para equipes gerenciarem
            tarefas juntas, com atualização em tempo real e interface moderna
            para mais produtividade e organização.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:max-h-[308px] lg:min-w-[360px]">
          <ul className="flex flex-col gap-6">
            <li>
              <a
                href="#"
                className="text-[#FFFFFF] hover:text-[#AFC2FF]  text-sm sm:text-base"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="text-[#FFFFFF] hover:text-[#AFC2FF]  text-sm sm:text-base"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#planos"
                className="text-[#FFFFFF] hover:text-[#AFC2FF]  text-sm sm:text-base"
              >
                Planos
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="text-[#FFFFFF] hover:text-[#AFC2FF]  text-sm sm:text-base"
              >
                Avaliações
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-[#FFFFFF] hover:text-[#AFC2FF]  text-sm sm:text-base"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/ajuda"
                className="text-[#FFFFFF] hover:text-[#AFC2FF] text-sm sm:text-base"
              >
                Ajuda
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start gap-4 sm:gap-6 lg:items-start">
          <div className="flex items-center gap-2 sm:gap-4 justify-start">
            <p className="text-[#FFFFFF] text-xl">Siga: </p>
            <a href="" target="_blank" aria-label="Instagram">
              <Image
                src="/img/img-instagram.svg"
                alt="Instagram"
                width={45}
                height={45}
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
            <a href="" target="_blank" aria-label="Linkedin">
              <Image
                src="/img/img-linkedin.svg"
                alt="LinkedIn"
                width={45}
                height={45}
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-[#FFFFFF] mt-20 flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start lg:justify-between justify-start">
        <p className="text-left text-sm sm:text-base">
          Política de privacidade
        </p>
        <p className="text-left text-[#FFFFFF] text-sm sm:text-base">
          © Copyright 2000-2024 ColabTask
        </p>
      </div>
    </footer>
  );
};

export default SectionFooter;
