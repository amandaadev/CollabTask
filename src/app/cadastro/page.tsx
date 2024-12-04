"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Função para formatar o número de telefone no padrão (XX) XXXXX-XXXX removendo todos os caracteres que não sejam números
  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");

    // Aplica a máscara no número, se for necessário
    if (cleaned.length <= 2) {
      return `(${cleaned}`;
    } else if (cleaned.length <= 7) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    } else {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
        7,
        11
      )}`;
    }
  };

  // Função para validar o telefone
  const validatePhone = (phone: string) => {
    // Expressão regular para validar o formato do telefone
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem. Tente novamente.");
      return;
    }

    if (!validatePhone(phone)) {
      setPhoneError("Por favor, insira um número de telefone válido.");
      return;
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
    } else {
      setErrorMessage("");
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setErrorMessage("As senhas não coincidem.");
    } else {
      setErrorMessage("");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Filtra e formata o número do telefone
    const formattedPhone = formatPhone(e.target.value);
    setPhone(formattedPhone);

    // Limpa o erro de telefone ao digitar
    if (validatePhone(formattedPhone)) {
      setPhoneError("");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-[#5271ff] flex items-center justify-center">
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
          <h1 className="text-[#5271ff] font-archivo font-bold text-[32px] mb-20 pt-10 pr-11 text-right mr-10">
            Crie sua conta
          </h1>
        </div>
        <div className="flex flex-col items-center py-12">
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
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5271ff] focus:border-[#5271ff] text-black"
                placeholder="exemplo@gmail.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700"
              >
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5271ff] focus:border-[#5271ff] text-black"
                placeholder="(XX) XXXXX-XXXX"
                required
              />
              {phoneError && (
                <div className="text-red-500 text-sm mt-2">{phoneError}</div>
              )}
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
                onChange={handlePasswordChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5271ff] focus:border-[#5271ff] text-black"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-lg font-medium text-gray-700"
              >
                Confirme sua senha
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-black focus:ring-2 focus:ring-[#5271ff] focus:border-[#5271ff]"
                placeholder="Confirme sua senha"
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
            )}

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
            </div>

            <button
              type="submit"
              className="flex justify-center w-full py-3 bg-[#5271ff] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5271ff] mb-5"
            >
              Criar conta
            </button>
            <Link
              href="/entrar"
              className="flex justify-center w-full px-4 py-2 mt-5 bg-white text-[#5271ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#5271ff] font-archivo font-bold"
            >
              Já tem uma conta? Entre
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
