const API_URL = "https://www.swapi.tech/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(url, opts, function (persona) {
    console.log(`Hola, mi nombre es ${persona.result.properties.name}`);
    if (callback) {
      callback();
    }
  });
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5);
      });
    });
  });
});
