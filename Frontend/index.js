import {
  obtenerEstudiantes,
  buscarEstudiante,
  eliminarEstudiante,
  nuevoEstudiante,
} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
  getStudents();
});

/* LISTAR ESTUDIANTE  - CRUD (R) */
async function getStudents() {
  const students = await obtenerEstudiantes();
  const estudiantes = document.querySelector("#estudiantes");
  let html = "";
  students.forEach((estudiante) => {
    const { cedula } = estudiante;
    html += `
            <tr>
             
              <td>${cedula}</td>
             
              
              <td ><a href="#" data-estudiante="${id}" idEstudiante=${id} class="btn btn-success editar"data-bs-toggle="modal"
              data-bs-target="#update">Editar</a></td>
              <td ><a href="#" data-estudiante="${id}" class="btn btn-danger eliminar">Eliminar</a></td>
              <td> <a href="#" class="btn btn-primary" id="${id}" data-bs-toggle="modal"
              data-bs-target="#exampleModal">Detalle</a></td>
            </tr>
          `;
  });
  estudiantes.innerHTML = html;
}

/* OBTENER ESTUDIANTE */
const search = document.querySelector("#search");
search.addEventListener("input", searchEstudiante);

async function searchEstudiante(e) {
  let searching = e.target.value;
  const estudiante = await buscarEstudiante(searching);
  const estudiantes = document.querySelector("#estudiantes");
  let html = "";
  estudiante.forEach((student) => {
    const { cedula } = student;
    html += `
            <tr>
             
              <td>${cedula}</td>
             
              
              <td style="display:flex; justify-content:center;"><a href="#" data-estudiante=${id} class="btn btn-success"data-bs-toggle="modal"
              data-bs-target="#update">Editar</a></td>
              <td ><a href="#" data-estudiante="${id}" class="btn btn-danger eliminar">Eliminar</a></td>
              <td style="display:flex; justify-content:center;"> <a href="#" class="btn btn-primary" id="${id}" data-bs-toggle="modal"
              data-bs-target="#exampleModal">Detalle</a></td>
            </tr>
          `;
  });
  estudiantes.innerHTML = html;
}

/* INGRESAR NUEVO ESTUDIANTE  - CRUD (C) */
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", crearEstudiante);

async function crearEstudiante(e) {
  e.preventDefault(e);

  const cedula = document.querySelector("#cedula").value;

  const estudiante = {
    cedula,
  };
  /* llamamos a la funcion metodo HTTP POST */
  nuevoEstudiante(estudiante);
}

/* ELIMINAR ESTUDIANTE */

const listado = document.querySelector("#estudiantes");
listado.addEventListener("click", confirmarEliminar);

async function confirmarEliminar(e) {
  if (e.target.classList.contains("eliminar")) {
    const estudianteId = parseInt(e.target.dataset.estudiante);
    console.log(estudianteId);
    const confirmar = confirm("¿Deseas eliminar este Estudiante?");

    if (confirmar) {
      /* llamamos a la funcion metodo HTTP DELETE */
      await eliminarEstudiante(estudianteId);
    }
  }
}
