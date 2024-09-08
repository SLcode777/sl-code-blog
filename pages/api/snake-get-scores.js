import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const scores = await prisma.scores.findMany({
        orderBy: {
          score: "desc",
        },
        take: 10,
      });
      res.status(200).json(scores);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erreur lors de la récupérationd des scores" });
      console.log(error);
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
