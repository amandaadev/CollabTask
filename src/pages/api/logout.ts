import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Caso esteja usando cookies para autenticação
    res.setHeader(
      "Set-Cookie",
      "authToken=; Path=/; Max-Age=0; HttpOnly; Secure"
    );

    // Retorne uma resposta de sucesso
    return res.status(200).json({ message: "Logout bem-sucedido" });
  } else {
    // Método não permitido
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Método ${req.method} não permitido`);
  }
}
