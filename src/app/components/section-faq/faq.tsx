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
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Os dados fornecidos estão seguros?",
      answer:
        "Sim, usamos tecnologias avançadas de criptografia para garantir a segurança dos seus dados.",
    },
    {
      question: "Como posso alterar meu endereço de e-mail?",
      answer:
        "Acesse a seção 'Configurações' da conta e clique em 'Alterar E-mail'.",
    },
    {
      question: "Existe algum desconto para estudantes?",
      answer:
        "Sim, oferecemos 15% de desconto para estudantes com comprovação.",
    },
    {
      question: "O que fazer se meu pagamento foi recusado?",
      answer:
        "Verifique os dados do cartão e tente novamente ou use outro método de pagamento.",
    },
    {
      question: "Posso compartilhar minha conta com outra pessoa?",
      answer:
        "Não recomendamos o compartilhamento de contas por questões de segurança.",
    },
    {
      question: "Como recebo notificações?",
      answer:
        "Ative as notificações no menu 'Configurações' para ser informado sobre atualizações.",
    },
    {
      question: "Há um período de teste gratuito?",
      answer: "Sim, oferecemos 7 dias de teste gratuito para novos usuários.",
    },
    {
      question: "Quais idiomas estão disponíveis na plataforma?",
      answer: "Atualmente, suportamos português, inglês e espanhol.",
    },
    {
      question: "Como cancelo minha assinatura?",
      answer:
        "Acesse a seção 'Assinatura' em 'Configurações' e clique em 'Cancelar Assinatura'.",
    },
    {
      question: "Posso reativar minha conta depois de cancelá-la?",
      answer:
        "Sim, você pode reativar sua conta dentro de 60 dias após o cancelamento.",
    },
    {
      question: "O que é necessário para me registrar?",
      answer: "Você precisa de um e-mail válido e uma senha para se registrar.",
    },
    {
      question: "Como faço para alterar minha senha?",
      answer: "Acesse 'Configurações' e clique em 'Alterar Senha'.",
    },
    {
      question: "Qual é o horário de atendimento do suporte?",
      answer: "Nosso suporte funciona de segunda a sexta, das 9h às 18h.",
    },
    {
      question: "Posso pausar minha assinatura temporariamente?",
      answer: "Sim, você pode pausar sua assinatura por até 3 meses.",
    },
    {
      question: "Os planos incluem atualizações?",
      answer:
        "Sim, todos os planos incluem atualizações automáticas gratuitas.",
    },
    {
      question: "Como acesso o histórico de atividades?",
      answer:
        "O histórico está disponível na aba 'Minha Conta' no menu principal.",
    },
    {
      question: "Como recupero uma conta desativada?",
      answer:
        "Entre em contato com nosso suporte para obter assistência na recuperação.",
    },
    {
      question: "É possível personalizar as notificações?",
      answer:
        "Sim, você pode personalizá-las em 'Configurações de Notificação'.",
    },
    {
      question: "Há algum custo adicional por transações internacionais?",
      answer:
        "Pode haver taxas adicionais dependendo do seu banco ou provedor de pagamento.",
    },
    {
      question: "Como faço para atualizar meus dados pessoais?",
      answer:
        "Você pode atualizar seus dados na seção 'Minha Conta' em 'Configurações'.",
    },
    {
      question: "É necessário fazer backup manual dos dados?",
      answer:
        "Não, realizamos backups automáticos regularmente para garantir a segurança.",
    },
    {
      question: "Como reporto um problema técnico?",
      answer:
        "Entre em contato com nosso suporte pelo e-mail suporte@exemplo.com.",
    },
    {
      question: "Posso usar a plataforma em dispositivos móveis?",
      answer: "Sim, nossa plataforma é compatível com smartphones e tablets.",
    },
    {
      question: "O que acontece após o período de teste gratuito?",
      answer:
        "Sua conta será convertida para um plano pago, caso tenha inserido um método de pagamento.",
    },
    {
      question: "O que é necessário para criar uma conta?",
      answer: "Basta informar um e-mail válido e criar uma senha segura.",
    },
    {
      question: "Como faço para excluir minha conta?",
      answer: "Acesse as configurações da conta e clique em 'Excluir Conta'.",
    },
    {
      question: "Existe suporte técnico para empresas?",
      answer: "Sim, oferecemos suporte técnico especializado para empresas.",
    },
    {
      question: "Como altero o idioma da plataforma?",
      answer: "Você pode alterar o idioma nas configurações da conta.",
    },
    {
      question: "Posso usar a plataforma offline?",
      answer:
        "Algumas funcionalidades estão disponíveis offline, mas requerem sincronização quando reconectado à internet.",
    },
    {
      question: "Como reporto um erro na plataforma?",
      answer: "Envie uma descrição detalhada do erro para suporte@exemplo.com.",
    },
    {
      question: "Há integração com outras ferramentas?",
      answer:
        "Sim, oferecemos integração com Google Drive, Slack e outras ferramentas populares.",
    },
    {
      question: "É possível ajustar as permissões de usuários?",
      answer: "Sim, as permissões podem ser configuradas na seção 'Equipe'.",
    },
    {
      question: "Há suporte para dispositivos móveis?",
      answer:
        "Sim, a plataforma é totalmente responsiva e possui apps dedicados para Android e iOS.",
    },
    {
      question: "Como gero relatórios de atividades?",
      answer:
        "Os relatórios podem ser gerados na seção 'Relatórios' do menu principal.",
    },
    {
      question: "Quais navegadores são compatíveis?",
      answer:
        "Recomendamos o uso do Google Chrome, Firefox ou Safari para a melhor experiência.",
    },
    {
      question:
        "O que acontece se eu perder o acesso ao meu e-mail cadastrado?",
      answer:
        "Entre em contato com nosso suporte para atualizar seu e-mail de cadastro.",
    },
    {
      question: "Há treinamentos para novos usuários?",
      answer:
        "Sim, oferecemos vídeos tutoriais e workshops ao vivo para novos usuários.",
    },
    {
      question: "Posso transferir minha assinatura para outra pessoa?",
      answer:
        "Assinaturas não são transferíveis, mas você pode cancelar e criar uma nova conta.",
    },
    {
      question: "Como habilito a autenticação de dois fatores?",
      answer:
        "A autenticação de dois fatores pode ser habilitada em 'Configurações de Segurança'.",
    },
    {
      question: "A plataforma oferece personalização visual?",
      answer:
        "Sim, é possível personalizar cores e temas em 'Configurações de Aparência'.",
    },
    {
      question: "Os arquivos enviados possuem limite de tamanho?",
      answer: "Sim, o limite de envio por arquivo é de 100 MB.",
    },
    {
      question: "Como recupero um arquivo excluído?",
      answer:
        "Acesse a lixeira na seção 'Arquivos' para recuperar itens excluídos dentro de 30 dias.",
    },
    {
      question: "Há cobrança de taxas adicionais?",
      answer: "Não há cobranças extras além do valor informado na assinatura.",
    },
    {
      question: "Como atualizo minha forma de pagamento?",
      answer:
        "Você pode atualizar as informações de pagamento em 'Configurações de Pagamento'.",
    },
  ];

  const filteredFaqs = searchQuery
    ? faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs.slice(0, 6); // Exibe as 6 perguntas mais frequentes por padrão

  return (
    <div id="faq" className="h-[785px] bg-[#F9FAFB]">
      <div className="bg-[#5271ff] h-60 w-full flex justify-center items-center flex-col">
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
                className="w-full h-12 border border-gray-300 rounded-lg pl-10 pr-4 focus:border-[#5271ff] text-[#9ca3af] focus:ring-0 focus:outline-none"
                type="search"
                name="perguntas"
                id="perguntas"
                placeholder="Digite sua pergunta"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="rounded-lg w-full sm:w-auto h-12 bg-[#3C5EDD] hover:bg-[#9BB3FF] text-[#ffffff] px-4"
              onClick={() => {}}
            >
              Buscar
            </button>
          </div>
          <div className="mb-11 mt-8 text-[#AFC2FF] hover:text-[#ffffff]">
            <p>
              <Link href="/ajuda">Ainda precisa de ajuda?</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 mt-16">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg mb-2">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left text-[#5271ff]"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 border-t border-gray-300 text-[#4B5563]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-[#9ca3af]">
            Nenhuma pergunta encontrada.
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionFaq;
