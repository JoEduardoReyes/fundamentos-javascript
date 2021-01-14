const API_URL = "https://www.swapi.tech/api/";
const PEOPLE_URL = "people/:id";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

const onPeopleResponse = function (persona) {
  console.log(`Hola, soy ${persona.result.properties.name}`);
};

$.get(lukeUrl, opts, onPeopleResponse);
