"use client";

import Image from "next/image";
import Link from "next/link";
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
      <div className="w-1/2 bg-[#5271ff] flex items-center justify-center">
        <Image
          src="/img/img-login.svg"
          alt="Cadastro Illustration"
          width={424}
          height={190}
          className="object-cover"
        />
      </div>

      <div className="w-1/2 bg-[#FFFFFF] flex flex-col items-center justify-center px-8 py-12">
        <h1 className="text-[#5271ff] font-archivo-bold font-semibold text-4xl mb-10">
          Faça login na sua conta
        </h1>

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
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5271ff] focus:border-[#5271ff]"
              placeholder="Digite seu email"
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
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5271ff] focus:border-[#5271ff]"
              placeholder="Digite sua senha"
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
                className="h-4 w-4 text-[#5271ff] border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm text-gray-700"
              >
                Lembre de mim
              </label>
            </div>

            <a
              href="#"
              className="hover:text-[#5271ff] font-archivo text-sm text-[#5271ff]"
            >
              Esqueceu sua senha?
            </a>
          </div>

          <Link
            href="/entrar"
            type="submit"
            className="flex justify-center w-full mb-5 py-3 bg-[#5271ff] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5271ff]"
          >
            Entrar na conta
          </Link>
          <Link
            href="/cadastro"
            type="submit"
            className="flex justify-center w-full mt-5 py-3 bg-white text-[#5271ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5271ff] font-archivo font-bold"
          >
            Crie sua conta
          </Link>
        </form>

        {/* Links para "Esqueci minha senha" */}
      </div>
    </div>
  );
};

export default Cadastro;
