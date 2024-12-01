import CardPlanos from "../components/card-planos/page";
import HeaderDeslogada from "../components/header-deslogada/header";
import SectionFooter from "../components/section-footer/footer";

const Planos = () => {
  return (
    <>
      <div className="h-[1280px] w-full bg-gradient-to-t from-gradient-start to-gradient-end  bg-[#F9FAFB] ">
        <HeaderDeslogada />
        <div className="   flex justify-center">
          <h1 className="text-[#5271ff] text-4xl font-bold mt-[150px] mb-7">
            CollabTas do seu Jeito
          </h1>
        </div>
        <div className="text-[#5B5858] mt-4 flex justify-center text-center">
          <p className="text-xl">
            Aprenda a organizar e priorizar suas tarefas com os planos ColabTask
            e veja como você pode aumentar sua produtividade e organizar o seu
            tempo.
            <br />
            Seja um novo colaborador ou um desenvolvedor que está se adaptando
            ao novo mundo da organização colaborativa.
          </p>
        </div>
        <CardPlanos />
      </div>

      <SectionFooter />
    </>
  );
};

export default Planos;
