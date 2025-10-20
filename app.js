import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import approuter from "./src/routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.json());

app.use("/", approuter);

app.listen(PORT, () => {
  console.log(`Server listens on port: ${PORT}`);
});
