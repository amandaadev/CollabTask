//Endpoint para retornar os dados do usuário autenticado

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    const { authToken } = req.cookies;

    if (authToken === "fake-jwt-token") {
      return res
        .status(200)
        .json({ name: "Usuário Teste", email: "usuario@exemplo.com" });
    } else {
      return res.status(401).json({ message: "Não autorizado" });
    }
  }

  return res.status(405).json({ message: `Método ${method} não permitido` });
}
