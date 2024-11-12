"use client";

import Image from "next/image";
import React, { useState } from "react";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Definir a lógica de envio do formulário (login, por exemplo)
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Lembrar de mim:", rememberMe);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-gradient-to-r from-[#a735b5] to-[#b33375] flex items-center justify-center">
        <Image
          src="/img/img-cadastro.svg"
          alt="Cadastro Illustration"
          width={424}
          height={190}
          className="object-cover"
        />
      </div>

      <div className="w-1/2 bg-[#FFFFFF]">
        <div>
          <h1 className="text-[#913276] font-archivo font-bold text-[42px] mb-20 pt-10 pr-11 text-right">
            Crie sua conta
          </h1>
        </div>
        <div className="flex flex-col items-center  py-12">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#913276] focus:border-[#913276]"
                placeholder="exemplo@gmail.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                Telefone
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#913276] focus:border-[#913276]"
                placeholder="0123456789"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#913276] focus:border-[#913276]"
                placeholder="0123456789"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                Insira sua senha novamente
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#913276] focus:border-[#913276]"
                placeholder="0123456789"
                required
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-[#913276] border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-sm text-gray-700"
                >
                  Lembre de mim
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#913276] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e2757]"
            >
              Entrar na conta
            </button>
            <button
              type="submit"
              className="w-full py-3 bg-white text-[#913276] rounded-md  focus:outline-none focus:ring-2 focus:ring-[#7e2757] font-archivo font-bold"
            >
              Login
            </button>
          </form>

          {/* Links para "Esqueci minha senha" */}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
