import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const scores = await prisma.scores.findMany({
        orderBy: {
          score: "desc",
        },
        take: 1,
      });
      res.status(200).json(scores);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erreur lors de la récupérationd du top score" });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
