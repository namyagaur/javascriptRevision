import { createFile,readFile } from "./fileManager.js";
import path from "node:path";

const filepath = path.join("data","notes.txt");
await createFile(filepath);
await readFile(filepath);