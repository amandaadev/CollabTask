import Image from "next/image";

const SectionFaq = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex-col gap-8 lg:flex-row flex justify-between p-8 pb-20 lg:gap-16">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:p-28">
        {/* <Image
          src="/img/img-sobre.svg"
          alt="Home Illustration"
          width={580}
          height={360}
          className="pl-7 lg:pr-[35px] w-full mb-8 lg:mb-0 max-w-[580px]"
        /> */}
        <div className="flex flex-col max-w-full m-10">
          <h1 className="mb-[15px] text-[#913276] font-archivo-bold font-bold text-[32px] ">
            Precisa de Ajuda?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionFaq;
