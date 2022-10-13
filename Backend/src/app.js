import express from "express";

const app = express();

import routerEstudiante from "./routers/routerEstudiante.js";
app.use("/estudiantes", routerEstudiante);

app.set("port", 4000);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/fox", (req, res) => {
    res.json({
        "name": "John",
        "age": 30
    });
});

export default app;