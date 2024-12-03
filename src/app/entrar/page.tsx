"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        router.push("/dashboard");
      }

      const savedEmail = localStorage.getItem("rememberMeEmail");
      if (savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Formato de email inválido.");
      return;
    }

    setIsLoading(true);
    try {
      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        console.log("Token salvo:", data.token);
        router.push("/dashboard");
      } else {
        setErrorMessage(data.message || "Credenciais inválidas.");
      }
    } catch (error) {
      setErrorMessage("Falha na comunicação com o servidor.");
    } finally {
      setIsLoading(false);
    }
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

      <div className="w-full md:w-1/2 bg-[#FFFFFF] flex flex-col items-center justify-center px-8 py-12">
        <h1 className="text-[#5271FF] font-archivo-bold font-semibold md:text-4xl text-xl mb-10">
          Faça login na sua conta
        </h1>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
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
              onChange={(e) => {
                setEmail(e.target.value);
                if (rememberMe)
                  localStorage.setItem("rememberMeEmail", e.target.value);
              }}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5271FF] focus:border-[#5271FF] text-black"
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
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5271FF] focus:border-[#5271FF] text-black"
              placeholder="Digite sua senha"
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
                className="h-4 w-4 text-[#913276] border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm text-gray-700"
              >
                Lembre de mim
              </label>
            </div>
            <a
              href="/forgot-password"
              className="hover:text-[#3C5EDD] font-archivo text-sm text-[#5271FF]"
            >
              Esqueceu sua senha?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 ${
              isLoading ? "bg-gray-300 cursor-not-allowed" : "bg-[#5271FF]"
            } text-white rounded-md focus:outline-none focus:ring-2`}
          >
            {isLoading ? "Carregando..." : "Entrar na conta"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
