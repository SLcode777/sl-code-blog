import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { player, score } = req.body;

    try {
      const newScore = await prisma.scores.create({
        data: {
          player: player,
          score: score,
        },
      });
      res.status(200).json(newScore);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de l'ajout du score" });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
