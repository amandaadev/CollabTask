"use client";
import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const SectionFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Como faço para redefinir minha senha?",
      answer:
        "Para redefinir sua senha, acesse as configurações da conta e clique em 'Esqueci minha senha'.",
    },
    {
      question: "Quais são os métodos de pagamento aceitos?",
      answer: "Aceitamos cartões de crédito, débito e pagamentos via PayPal.",
    },
    {
      question: "Qual é a política de reembolso?",
      answer:
        "Nosso objetivo é garantir a sua satisfação. Se você não estiver satisfeito com o nosso produto, aceitamos solicitações de reembolso até 30 dias após a compra. Entre em contato com o nosso suporte ao cliente.",
    },
    {
      question: "Como entro em contato com o suporte?",
      answer:
        "Você pode entrar em contato com nosso suporte através do e-mail suporte@exemplo.com ou pelo telefone (11) 1234-5678.",
    },
    {
      question: "Como adiciono novos membros à minha equipe?",
      answer:
        "Para adicionar novos membros, vá até a seção 'Equipe' no menu principal e clique em 'Adicionar Membro'. Insira o e-mail do novo membro e defina as permissões de acesso.",
    },
    {
      question: "É possível recuperar tarefas excluídas?",
      answer:
        "Sim, tarefas excluídas podem ser recuperadas dentro de 30 dias. Acesse a seção 'Tarefas Arquivadas' no menu para restaurar tarefas removidas recentemente.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <div className="bg-gradient-to-r from-[#a735b5] to-[#b33375] h-60 w-full flex justify-center items-center flex-col">
        <div className="flex flex-col items-center m-10">
          <h1 className="mb-4 text-[#ffffff] font-sans font-bold text-xl md:text-4xl">
            FAQ
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center w-full max-w-lg space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="relative w-full sm:w-auto flex-1 lg:w-[373px]">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
              <input
                className="w-full h-12 border border-gray-300 rounded-lg pl-10 pr-4 focus:border-[#64183F] focus:ring-0 focus:outline-none"
                type="search"
                name="perguntas"
                id="perguntas"
                placeholder="Digite sua pergunta"
              />
            </div>
            <button className="rounded-lg w-full sm:w-auto h-12 bg-[#913276] text-[#ffffff] px-4">
              Buscar
            </button>
          </div>
          <div className="mb-11 mt-8 text-[#64183F] hover:text-[#ffffff]">
            <p>
              <Link href="/ajuda">Ainda precisa de ajuda?</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 mt-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg mb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left text-[#64183F]"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUpIcon className="w-5 h-5 text-[#64183F]" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-[#64183F]" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFaq;
