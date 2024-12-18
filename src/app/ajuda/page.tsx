"use client";
import React, { useState } from "react";
import HeaderDeslogada from "../components/header-deslogada/header";
import SectionFooter from "../components/section-footer/footer";

const HelpForm = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = (event: { target: { value: string } }) => {
    setIsSelected(event.target.value !== "");
  };

  return (
    <>
      <HeaderDeslogada />
      <div className="h-screen bg-[#f9fafb] flex items-center justify-center p-4 md:justify-between md:p-8 md:pb-20 gap-4 md:gap-16 overflow-y-auto">
        <div
          id="ajuda"
          className="max-w-lg w-full mx-auto p-6 bg-white shadow-md rounded-md mt-16"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#5271ff]">
            Central de Ajuda
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#2D4ABA]"
              >
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-[#5B5858] focus:outline-none placeholder:text-[#d1d5db]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#2D4ABA]"
              >
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-[#5B5858] focus:outline-none placeholder:text-[#d1d5db]"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#2D4ABA]"
              >
                Assunto:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Digite o assunto do seu pedido"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-[#5B5858] focus:outline-none placeholder:text-[#d1d5db]"
              />
            </div>

            <div>
              <label
                htmlFor="issue-type"
                className="block text-sm font-medium text-[#2D4ABA]"
              >
                Tipo de problema:
              </label>
              <select
                id="issue-type"
                name="issue-type"
                required
                onChange={handleSelection}
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm  focus:outline-none placeholder:text-[#d1d5db] ${
                  isSelected ? "text-[#5B5858]" : "text-gray-400"
                }`}
              >
                <option value="">Selecione um tipo</option>
                <option value="login">Problemas de login</option>
                <option value="pagamento">Dúvidas sobre pagamento</option>
                <option value="erro-sistema">Erros no sistema</option>
                <option value="funcionalidades">
                  Dúvidas sobre funcionalidades
                </option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-[#2D4ABA]"
              >
                Descrição do problema:
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Descreva detalhadamente seu problema"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-[#5B5858] focus:outline-none placeholder:text-[#d1d5db]"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-[#2D4ABA]"
              >
                Anexar arquivo (opcional):
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".jpg, .jpeg, .png, .pdf"
                className="mt-1 block w-full text-[#d1d5db]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#5271ff] text-white rounded-md hover:bg-[#AFC2FF]"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
      <SectionFooter />
    </>
  );
};

export default HelpForm;
