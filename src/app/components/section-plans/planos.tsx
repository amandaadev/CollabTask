const SectionPlans = () => {
  return (
    <div
      id="planos"
      className="min-h-screen bg-gradient-to-r from-[#a735b5] to-[#b33375] p-4"
    >
      <h1 className="text-center text-[#FFFFFF] font-archivo-bold font-bold text-[42px] sm:pb-40 pt-12 pb-10 ">
        Planos
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full max-w-[260px] h-[360px] bg-[#64183F] flex flex-col rounded-2xl">
          <div className="flex flex-col pt-7 pl-7 flex-grow">
            <h1 className="text-[#FFFFFF] font-archivo-bold text-2xl lg:text-[32px] ">
              Básico
            </h1>
            <p className="text-lg lg:text-xl">Grátis</p>
            <div className="font-archivo-bold font-medium text-[#FFFFFF] flex flex-col justify-center mt-11 text-lg lg:text-xl">
              <p>2 boards</p>
              <p>4 colaboradores</p>
            </div>
          </div>
          <div className="flex justify-center mb-7">
            <button className="bg-[#EFEAEA] text-[#64183F] font-medium lg:h-[40px] lg:w-[190px] h-10 w-32 text-[15px] rounded-full">
              Contratar
            </button>
          </div>
        </div>

        <div className="w-full max-w-[260px] h-[360px] bg-[#64183F] flex flex-col rounded-2xl">
          <div className="flex flex-col pt-7 pl-7 flex-grow">
            <h1 className="text-white font-archivo-bold text-2xl lg:text-[32px]">
              Básico
            </h1>
            <p className="text-lg lg:text-xl">R$169,90</p>
            <div className="font-archivo-bold font-medium text-[#FFFFFF] flex flex-col justify-center mt-11 text-lg lg:text-xl">
              <p>10 boards</p>
              <p>20 colaboradores</p>
            </div>
          </div>
          <div className="flex justify-center mb-7">
            <button className="bg-[#EFEAEA] text-[#64183F] font-medium lg:h-[40px] lg:w-[190px] h-10 w-32 text-[15px] rounded-full">
              Contratar
            </button>
          </div>
        </div>

        <div className="w-full max-w-[260px] h-[360px] bg-[#64183F] flex flex-col rounded-2xl">
          <div className="flex flex-col pt-7 pl-7 flex-grow">
            <h1 className="text-white font-archivo-bold text-2xl lg:text-[32px]">
              Básico
            </h1>
            <p className="text-lg lg:text-xl">R$399,00</p>
            <div className="font-archivo-bold font-medium text-[#FFFFFF] flex flex-col justify-center mt-11 text-lg lg:text-xl">
              <p>Boards ilimitados</p>
              <p>Colaboradores ilimitados</p>
            </div>
          </div>
          <div className="flex justify-center mb-7">
            <button className="bg-[#EFEAEA] text-[#64183F] font-medium lg:h-[40px] lg:w-[190px] h-10 w-32 text-[15px] rounded-full">
              Contratar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPlans;
