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

  
    




    const searchContainer = document.querySelector('.search-input-box');
    const inputSearch = searchContainer.querySelector('input');
    const boxSuggestions = document.querySelector(
      '.container-suggestions'
    );
    
    const searchLink = document.querySelector('a');
    
    inputSearch.onkeyup = e => {
      let userData = e.target.value;
      let emptyArray = [];
    
      if (userData) {
        emptyArray = suggestions.filter(data => {
          return data
            .toLocaleLowerCase()
            .startsWith(userData.toLocaleLowerCase());
        });
    
        emptyArray = emptyArray.map(data => {
          return (data = `<li>${data}</li>`);
        });
        searchContainer.classList.add('active');
        showSuggestions(emptyArray);
    
        let allList = boxSuggestions.querySelectorAll('li');
    
        allList.forEach(li => {
          li.setAttribute('onclick', 'select(this)');
        });
      } else {
        searchContainer.classList.remove('active');
      }
    };
    
    function select(element) {
      let selectUserData = element.textContent;
      inputSearch.value = selectUserData;
    
      searchLink.href = `https://www.google.com/search?q=${inputSearch.value}`;
      searchContainer.classList.remove('active');
    }
    
    const showSuggestions = list => {
      let listData;
    
      if (!list.length) {
        userValue = inputSearch.value;
        listData = `<li>${userValue}</li>`;
      } else {
        listData = list.join(' ');
      }
      boxSuggestions.innerHTML = listData;
    };










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


  
  