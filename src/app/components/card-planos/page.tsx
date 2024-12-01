"use client";
import Link from "next/link";
import { useState } from "react";

const CardPlanos = () => {
  const [activeCard, setActiveCard] = useState<string>(""); // Armazena o card ativo
  const [usuarios, setUsuarios] = useState(50); // Quantidade inicial de usuários para o card "Empresa"

  const precoAnualMin = 528.5;
  const precoAnualMax = 1254.06;

  // Calcula o preço anual por usuário com base na quantidade de usuários
  const calcularPrecoAnual = () => {
    const escala = (usuarios - 50) / (5000 - 50); // Escala proporcional
    return precoAnualMax - escala * (precoAnualMax - precoAnualMin);
  };

  // Calcula o valor mensal por usuário
  const calcularPrecoMensal = () => (calcularPrecoAnual() / 12).toFixed(2);

  // Função para definir o card ativo
  const handleCardClick = (cardName: string) => {
    setActiveCard(cardName);
  };

  return (
    <div className="h-screen w-full p-8 pb-20 flex flex-col items-center mt-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl w-full">
        {/* Card Livre */}
        <div
          className={`bg-white rounded-sm p-6 border-2 cursor-pointer flex flex-col h-full ${
            activeCard === "livre" ? "border-[#5271ff]" : "border-gray-300"
          }`}
          onClick={() => handleCardClick("livre")}
        >
          <h2 className="text-xl font-bold text-[#5B5858]">LIVRE</h2>
          <p className="text-3xl font-bold mt-4 text-[#5B5858]">R$ 0</p>
          <p className="text-[12px] text-[#6b7280]">
            Gratuito para até 10 colaboradores por Workspace
          </p>
          <p className="text-sm text-[#4b5563] mt-2 mb-6">
            Para indivíduos ou equipes que buscam organizar qualquer projeto.
          </p>
          <Link
            href="/cadastro"
            className="px-4 mt-6 w-full border-2 border-[#5271ff] text-[#5271ff] py-2 rounded-sm hover:bg-[#5271ff] hover:text-white transition"
          >
            Começar
          </Link>
          <ul className="mt-6 space-y-2 text-[#5B5858]">
            <li>✔️ Quadros ilimitados</li>
            <li>✔️ Até 10 quadros por espaço de trabalho</li>
            <li>✔️ Power-Ups ilimitados por quadro</li>
            <li>✔️ Permissões básicas</li>
          </ul>
        </div>

        {/* Card Padrão */}
        <div
          className={`bg-white rounded-sm p-6 border-2 cursor-pointer flex flex-col h-full ${
            activeCard === "padrao" ? "border-[#5271ff]" : "border-gray-300"
          }`}
          onClick={() => handleCardClick("padrao")}
        >
          <h2 className="text-xl font-bold text-[#5B5858]">PADRÃO</h2>
          <p className="text-3xl font-bold mt-4 text-[#5B5858]">R$ 29,99</p>
          <p className="text-[12px] text-[#6b7280]">
            Por usuário/mês se cobrado anualmente (R$ 44,99 cobrados
            mensalmente)
          </p>
          <p className="text-sm text-gray-600 mt-2 mb-6">
            Para pequenas equipes que precisam gerenciar trabalho e escalar
            colaboração.
          </p>
          <Link
            href="/cadastro"
            className="w-full border-2 border-[#5271ff] text-[#5271ff] px-4 py-2 rounded-sm hover:bg-[#5271ff] hover:text-white transition"
          >
            Inscreva-se agora
          </Link>
          <ul className="mt-6 space-y-2 text-[#5B5858]">
            <li>✔️ Quadros ilimitados</li>
            <li>✔️ Permissões avançadas</li>
            <li>✔️ Visualizações: Calendário, Timeline</li>
            <li>✔️ Checklists avançados</li>
            <li>✔️ Campos personalizados</li>
            <li>✔️ Comandos ilimitados por espaço de trabalho</li>
          </ul>
          {/* <Link
            href="/saiba-mais-padrao"
            className="mt-auto block text-blue-600 text-sm hover:underline"
          >
            Saiba mais sobre o Padrão
          </Link> */}
        </div>

        {/* Card Prêmio */}
        <div
          className={`bg-white rounded-sm p-6 border-2 cursor-pointer flex flex-col h-full ${
            activeCard === "premio" ? "border-[#5271ff]" : "border-gray-300"
          }`}
          onClick={() => handleCardClick("premio")}
        >
          <h2 className="text-xl font-bold text-[#5B5858]">PRÊMIO</h2>
          <p className="text-3xl font-bold mt-4 text-[#5B5858]">R$ 59,99</p>
          <p className="text-sm text-[#6b7280] mt-2 mb-6">
            Por usuário/mês se cobrado anualmente (R$ 74,99 cobrado mensalmente)
          </p>
          <p className="text-sm text-gray-600 mt-2 mb-6">
            Para equipes que precisam rastrear e visualizar vários projetos de
            diversas maneiras.
          </p>
          <Link
            href="/cadastro"
            className="w-full border-2 border-[#5271ff] text-[#5271ff] px-4 py-2 rounded-sm hover:bg-[#5271ff] hover:text-white transition"
          >
            Experimente grátis
          </Link>
          <ul className="mt-6 space-y-2 text-[#5B5858]">
            <li>✔️ Visualizações: Calendário, Timeline</li>
            <li>✔️ Visualizações de espaço de trabalho: Tabela e Calendário</li>
            <li>✔️ Power-Ups ilimitados por quadro</li>
            <li>✔️ Permissões de anexos</li>
            <li>✔️ Gerenciamento de quadros públicos</li>
            <li>✔️ Permissões avançadas de administração</li>
          </ul>
          {/* <Link
            href="/saiba-mais-premio"
            className="mt-auto block text-blue-600 text-sm hover:underline"
          >
            Saiba mais sobre o Prêmio
          </Link> */}
        </div>

        {/* Card Empresa */}
        <div
          className={`bg-white rounded-sm p-6 border-2 flex flex-col h-full ${
            activeCard === "empresa" ? "border-[#5271ff]" : "border-gray-300"
          }`}
          onClick={() => handleCardClick("empresa")}
        >
          <h2 className="text-xl font-bold text-[#5B5858]">EMPRESA</h2>
          <p className="text-3xl font-bold mt-4 text-[#5B5858]">
            R$ {calcularPrecoMensal()} <span className="text-sm">por mês</span>
          </p>
          <p className="text-sm text-gray-600">
            Por usuário/mês - cobrado anualmente
          </p>
          <p className="text-sm text-[#6b7280]">
            (preço anual de R$ {calcularPrecoAnual().toFixed(2)} por usuário)
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Para organizações que precisam conectar o trabalho entre equipes com
            mais segurança e controles.
          </p>

          <div className="mt-6">
            <label
              htmlFor="usuarios"
              className="block text-sm font-medium text-[#5B5858]"
            >
              Custo estimado para {usuarios} Usuários
            </label>
            <input
              id="usuarios"
              type="range"
              min="50"
              max="5000"
              value={usuarios}
              onChange={(e) => setUsuarios(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <Link
            href="/contato"
            className="mt-6 block text-center border-2 border-[#5271ff] text-[#5271ff] py-2 rounded-sm hover:bg-[#5271ff] hover:text-white transition"
          >
            Entre em contato com vendas
          </Link>

          <ul className="mt-6 space-y-2 text-[#5B5858]">
            <li>✔️ Workspaces ilimitados</li>
            <li>✔️ Permissões organizacionais</li>
            <li>✔️ Quadros visíveis na organização</li>
            <li>✔️ Gerenciamento de quadros públicos</li>
            <li>✔️ Convidados em múltiplos Workspaces</li>
            <li>✔️ Integrações de terceiros</li>
          </ul>

          {/* <Link
            href="/saiba-mais-empresa"
            className="mt-auto block text-blue-600 text-sm hover:underline"
          >
            Saiba mais sobre a Empresa
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CardPlanos;
