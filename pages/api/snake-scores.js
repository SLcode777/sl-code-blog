import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const newData = req.body;

    const filePath = path.join(process.cwd(), "/pages/api/snake-scores.json");
    console.log("filepath:", filePath);

    fs.readFile(filePath, "utf-8", (err, fileContent) => {
      if (err) {
        console.error("Erreur lors de la lecture du fichier JSON", err);
        return res.status(500).json({ message: "Erreur serveur" });
      }

      let data = JSON.parse(fileContent);

      data.scores.push({ Player: newData.player, Score: newData.score });

      fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
          console.error("Erreur lors de l'écriture du fichier JSON", err);
          return res.status(500).json({ message: "Erreur serveur" });
        }
        res.status(200).json({ message: "Données sauvegardées avec succès" });
      });
    });
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
