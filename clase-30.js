const API_URL = "https://www.swapi.tech/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(url, opts, callback).fail(() => {
    console.log(`Ocurrio un error, no se pudo obtener el personaje ${id}`);
  });
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, mi nombre es ${personaje.result.properties.name}`);

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, mi nombre es ${personaje.result.properties.name}`);

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, mi nombre es ${personaje.result.properties.name}`);

      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, mi nombre es ${personaje.result.properties.name}`);

        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, mi nombre es ${personaje.result.properties.name}`);
        });
      });
    });
  });
});
