import fs from "node:fs/promises";
// import path from "node:path";
export async function createFile(filepath) {
    // const filepath = path.join("data","notes.txt");
    await fs.writeFile(filepath, "No way I did THISSSSSSSSSSs");

    console.log("file created successfullyy");
}

export async function readFile(filepath) {
    const data = await fs.readFile(filepath,"utf-8");
    console.log(data);
}