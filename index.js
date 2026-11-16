import { createFile,readFile, fileExtension, deleteFile } from "./fileManager.js";
import path from "node:path";

const filepath = path.join("data","notes.txt");
// await createFile(filepath);
// await readFile(filepath);
// await fileExtension(filepath);
await deleteFile(filepath);