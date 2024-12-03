"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const Dashboard = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get("/api/user");
  //       setUser(response.data);
  //     } catch (err) {
  //       setError("Erro ao carregar os dados do usuário.");
  //       router.push("/entrar");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     await axios.post("/api/logout");
  //     localStorage.removeItem("authToken");
  //     router.push("/entrar");
  //   } catch {
  //     setError("Erro ao tentar sair da conta.");
  //   }
  // };

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <p className="text-lg font-semibold text-gray-700">Carregando...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <p className="text-lg font-semibold text-red-500">{error}</p>
  //     </div>
  //   );
  // }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Barra lateral */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <img src="/img/colab-task-white.png" alt="Logo" className="h-12" />
        </div>
        <nav className="mt- ">
          <ul className="font-archivo font-bold">
            <li className="flex mx-4 mb-4 py-4 px-4 bg-blue-100 text-blue-600 rounded-lg ">
              <Image
                src="/img/tela-dashboard/dashboard.svg"
                alt="Dashboard"
                width={24}
                height={24}
                className="object-cover mr-2"
              />
              Dashboard
            </li>

            <li className="flex mx-4 py-2 mb-4 px-4 hover:bg-gray-100 text-[#5B5858]">
              <Image
                src="/img/tela-dashboard/minha-conta.svg"
                alt="Minha conta"
                width={24}
                height={24}
                className="object-cover mr-2"
              />
              Minha conta
            </li>
            <li className="flex py-2 mx-4 mb-4 px-4 hover:bg-gray-100 text-[#5B5858]">
              <Image
                src="/img/tela-dashboard/calendario.svg"
                alt="Calendario"
                width={24}
                height={24}
                className="object-cover mr-2"
              />
              Calendário
            </li>
            <li className="flex py-2 mx-4 mb-4 px-4 hover:bg-gray-100 text-[#5B5858]">
              <Image
                src="/img/tela-dashboard/suporte.svg"
                alt="Suporte"
                width={24}
                height={24}
                className="object-cover mr-2"
              />
              Suporte
            </li>
            <li className="flex py-2 mx-4 mb-4 px-4 hover:bg-gray-100 text-[#5B5858]">
              <Image
                src="/img/tela-dashboard/configuracoes.svg"
                alt="Configurações"
                width={24}
                height={24}
                className="object-cover mr-2"
              />
              Configurações
            </li>
            <li className="flex py-4 px-4 mx-4 text-red-600 bg-red-100 hover:bg-red-300 rounded-lg">
              <Image
                src="/img/tela-dashboard/desconectar.svg"
                alt="Configurações"
                width={24}
                height={24}
                className="object-cover mr-2"
              />
              {/* <button onClick={handleLogout}>Desconectar</button> */}
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Q4 - Sprint 0</h1>
        </header>
      </main>
    </div>
  );
};

export default Dashboard;
