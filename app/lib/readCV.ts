import fs from "fs";
import path from "path";

const pdf = require("pdf-parse");

export async function getCVText() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "M_Nasif_Hasan_Noor_Resume.pdf",
  );

  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);

  return data.text;
}
