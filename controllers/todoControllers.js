// Diese Datei enthält die Controller-Logik für die Todo-App
// D.h (das heißt) - ALLE CRUD-Operationen
// Der braucht die Models Information
// 1. Model importieren
// 2. Controller erstellen
// 3. Exportiere den Controller

import todoModel from "../models/todoModel.js";

// POST - CREATE
const createTodoController = async (req, res) => {
  console.log(req.body.todo);
  const neuTodo = req.body.todo;
  try {
    // Erstelle ein neues Todo-Objekt mit dem Model
    const toSave = todoModel({
      todo: neuTodo,
    });
    // Speichere das Todo-Objekt in der Datenbank mit der Methode `save()`
    await toSave.save();
    // Sende eine Antwort zurück an den Client mit dem Statuscode 201 (Created)
    res.status(201).json({ message: "Todo erfolgreich erstellt" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET - READ
// Wir brauchen den `find()`-Befehl von Mongoose

const getAllTodosController = async (req, res) => {
    try{({})
        const allTodos= await todoModel.find({})
        res.status(200).json(allTodos)
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

// UPDATE - UPDATE
// Wir brauchen den `findByIdAndUpdate()`-Befehl von Mongoose
// Dann holen wir uns die ID von der URL
// Dan fügen wir den neuen Todo-Text hinzu
const updateTodoController = async (req, res) => {
    // hol dir die ID von der URL
    const todoId = req.params.id
    try {
        await todoModel.findByIdAndUpdate(
            todoId,
            {
            $set: newTodoText,
        },
        { new:true})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

// Delete - DELETE
const deleteTodoController = async (req, res) => {
    // Hol dir die ID von der URL
    const todoId = req.params.test;
    //test = 67fcd74615bd54bb5a6b6752
    console.log(todoId);
    try {
        //todo mit findByIdAndDelete()löschen
        await todoModel.findByIdAndDelete(todoId);
      res.status(200).json({ message: "Todo erfolgreich gelöscht" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


// Kontrollers exportieren
export { createTodoController, getAllTodosController, deleteTodoController };
