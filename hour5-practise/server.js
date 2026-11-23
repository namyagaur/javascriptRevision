import userRoutes from "./routes/userRoutes.js"
import { logger } from "./middleware/logger.js"
import express from 'express'

const app = express();
app.use(express.json())
app.use(logger)

app.use("/api/users", userRoutes)

app.listen(3000);
