"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

const HeaderDeslogada = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-20 px-6 bg-[#FFFFFF] text-[#5B5858] text-xl font-sans z-50">
        <div className="flex items-center">
          <img src="/img/colab-task-white.png" alt="Logo" className="h-12" />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-5xl text-[#5271ff] rounded"
          >
            <Bars3Icon className="h-12 w-12" aria-hidden="true" />
          </button>
        </div>
        <nav
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } md:relative absolute ${
            isOpen ? "top-20" : "top-2"
          } left-0 right-0 bg-white md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            <li>
              <Link href="/" className="hover:text-[#5271ff]">
                Início
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="hover:text-[#5271ff]">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#planos" className="hover:text-[#5271ff]">
                Planos
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="hover:text-[#5271ff]">
                Avaliações
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-[#5271ff]">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/entrar"
            className="px-4 py-2 text-[#5271ff] rounded-lg hover:bg-gray-300 hover:text-[#FFFFFF] transition"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="px-4 py-2 border border-white rounded-lg bg-[#5271ff] text-[#FFFFFF] hover:bg-gray-300 transition hover:text-[#5271ff]"
          >
            Cadastrar
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderDeslogada;
