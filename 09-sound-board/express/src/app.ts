import express, { Request, Response } from "express";

import cors from "cors";
import path from "path";
import fs from 'fs';

const app = express();
const port = 3000;

app.use(cors());

app.get("/sounds", async (_req: Request, res: Response) => {
  try {
    // Use the fs Promises API to read the directory
    const files = await fs.promises.readdir(path.join(__dirname, "../public/sounds"));
    // Filter to only return .png files
    const mp3Files = files.filter(file => path.extname(file) === ".mp3");

    // Return a JSON response with list of files
    res.json(mp3Files);
  } catch (error: any) {
    res.status(500).json({
      message: "An error occured: " + error.message
    })
  }
})

app.get("/sounds/:sound", (req: Request, res: Response) => {
  const soundFile = req.params.sound;
  const filePath = path.resolve(__dirname, '../public', 'sounds', soundFile);

  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath)

    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.status(404).send('Sound not found');
  }
});

app.get("/forms/soundboard", (req: Request, res: Response) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "../forms", "soundForm.json"));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
