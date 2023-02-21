const tablaMedidores = document.getElementById("tabla-medidores");

fetch("https://medidorespresion.herokuapp.com/ultimoUtrTodos")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const fila = document.createElement("tr");
      const columnas = [
        item.id,
        item.fecha,
        item.hora,
        item.presion,
        item.voltaje,
        item.latitud,
        item.longitud,
        item.alarmaPresion,
        item.alarmaVoltaje,
        item.punto,
        item.tel
      ];

      columnas.forEach(columna => {
        const celda = document.createElement("td");
        celda.textContent = columna;
        fila.appendChild(celda);
      });

      tablaMedidores.querySelector("tbody").appendChild(fila);
    });
  })
  .catch(error => console.log(error));
