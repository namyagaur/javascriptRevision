import fs from "node:fs/promises";
import path from "node:path";
export async function createFile(filepath) {
    // const filepath = path.join("data","notes.txt");
    await fs.writeFile(filepath, "No way I did THISSSSSSSSSSs");

    console.log("file created successfullyy");
}

export async function readFile(filepath) {
    try{const data = await fs.readFile(filepath,"utf-8");
    console.log(data);
    } catch (error){
        console.log("Unable to read file :", error.message);
    }
}

export async function fileExtension(filepath) {
    console.log(path.extname(filepath));
}
export async function deleteFile(filepath) {
    try{
        await fs.unlink(filepath);
        console.log("File Deleted!");
    } catch (error){
        console.log("Unable deleting file", error.message);
    }
}