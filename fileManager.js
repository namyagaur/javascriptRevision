import fs from "node:fs/promises";
import path from "node:path";
export async function createFile() {
    const filepath = path.join("data","notes.txt");
    await fs.writeFile(filepath, "I am learning Node.js");

    console.log("file created successfullyy");
}