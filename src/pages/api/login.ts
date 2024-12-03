import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "POST") {
    const { email, password } = req.body;

    if (email === "usuario@exemplo.com" && password === "senha123") {
      res.setHeader(
        "Set-Cookie",
        `authToken=fake-jwt-token; HttpOnly; Path=/; Secure; SameSite=Strict`
      );

      return res.status(200).json({ message: "Login bem-sucedido" });
    } else {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }
  }

  return res.status(405).json({ message: `Método ${method} não permitido` });
}
