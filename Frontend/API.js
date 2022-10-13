const url = "";

export const nuevoEstudiante = async (estudiante) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(estudiante), // data puede ser string o un objeto
      headers: {
        "Content-Type": "application/json", // Y le decimos que los datos se enviaran como JSON
      },
    });
  } catch (error) {
    console.log(error);
  }
  window.location.href = "index.html";
};

export const obtenerEstudiantes = async () => {
  try {
    const resultado = await fetch(url);
    const estudiantes = await resultado.json();
    return estudiantes;
  } catch (error) {
    console.log(error);
  }
};
export const buscarEstudiante = async (id) => {
  try {
    const resultado = await fetch(`${url}/${id}`);
    const estudiante = await resultado.json();
    return estudiante;
  } catch (error) {
    console.log(error);
  }
};



export const eliminarEstudiante = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
  window.location.href = "index.html";
};



export const editarEstudiante = async (estudiante) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(estudiante),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
   window.location.href = "index.html"; 
};
