
// Mostar y cocultar infromacion de la receta
function ShowHide(){
  var textoc = document.getElementsByClassName("textoc")[0];
  if(textoc.style.visibility == "hidden"){
    textoc.style.visibility = "visible";

  }else{
    textoc.style.visibility = "hidden"
  }

}






document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y los campos de entrada
    const form = document.getElementById("survey-form");
    const nombreInput = document.getElementById("nombre");
    const ingredientesInput = document.getElementById("ingredientes");
    const pasosInput = document.getElementById("pasos");
  
    // Agregar un controlador de eventos para enviar el formulario
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Obtener los valores de los campos de entrada
      const nombre = nombreInput.value;
      const ingredientes = ingredientesInput.value;
      const pasos = pasosInput.value;
  
      // Validar que los campos no estén vacíos
      if (nombre.trim() === "" || ingredientes.trim() === "" || pasos.trim() === "" ) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Guardar los datos en el Local Storage
      saveDataToLocalStorage(nombre, ingredientes, pasos);
  
      // Reiniciar los campos del formulario
      form.reset();
    });


    // Función para guardar los datos en el Local Storage
    function saveDataToLocalStorage(nombre, ingredientes,pasos) {
      // Obtener los datos anteriores del Local Storage
      let storedData = localStorage.getItem("surveyData");
      if (storedData === null) {
        storedData = [];
      } else {
        storedData = JSON.parse(storedData);
      }
  
      // Agregar los nuevos datos a la lista
      storedData.push({ nombre, ingredientes, pasos });
  
      // Guardar la lista actualizada en el Local Storage
      localStorage.setItem("surveyData", JSON.stringify(storedData));
    }
  });


  
  