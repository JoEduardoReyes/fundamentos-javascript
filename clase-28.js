const API_URL = "https://www.swapi.tech/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

const onPeopleResponse = function (persona) {
  console.log(
    `Hola, soy ${persona.result.properties.name} y soy el personaje numero ${persona.result.uid}`
  );
};

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, onPeopleResponse);
}

for (let index = 0; index < 85; index++) {
  obtenerPersonaje(index);
}
