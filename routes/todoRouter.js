// Diese Datei enthält die Routen-Logik für die Todo-App
// und kontrolliert die CRUD-Operationen
// 1. Importiere Express
// 2. Importiere die Controller
// 3. Erstelle einen Router aus Express
// 4. Definiere die Routen
// 5. Exportiere den Router
import express from "express";
import {
  createTodoController,
  getAllTodosController,
  deleteTodoController
} from "../controllers/todoControllers.js";

// 3. Erstelle einen Router aus Express
const todoRouter = express.Router();

// 4. Definiere die Routen
// POST - CREATE
todoRouter.post("/", createTodoController);

// GET - READ
todoRouter.get("/", getAllTodosController);

//UPDATE


//DELETE
todoRouter.delete("/:test", deleteTodoController)
//test = 67fcd74615bd54bb5a6b6752
// 5. Exportiere den Router
export default todoRouter;
