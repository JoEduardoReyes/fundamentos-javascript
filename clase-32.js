const API_URL = "https://www.swapi.tech/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Ocurrio un personaje al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then((personaje1) => {
    console.log(`Personaje 1 es ${personaje1.result.properties.name}`);
    return obtenerPersonaje(2);
  })
  .then((personaje2) => {
    console.log(`Personaje 2 es ${personaje2.result.properties.name}`);
    return obtenerPersonaje(3);
  })
  .then((personaje3) => {
    console.log(`Personaje 3 es ${personaje3.result.properties.name}`);
    return obtenerPersonaje(4);
  })
  .then((personaje4) => {
    console.log(`Personaje 4 es ${personaje4.result.properties.name}`);
    return obtenerPersonaje(5);
  })
  .then((personaje5) => {
    console.log(`Personaje 5 es ${personaje5.result.properties.name}`);
    return obtenerPersonaje(6);
  })
  .then((personaje6) => {
    console.log(`Personaje 6 es ${personaje6.result.properties.name}`);
    return obtenerPersonaje(7);
  })
  .then((personaje7) => {
    console.log(`Personaje 7 es ${personaje7.result.properties.name}`);
  })
  .catch(onError);

// Asi se lanza una promesas
// new Promise( ( resolve, reject ) => {
//   // --- llamado asíncrono
//   if( todoOK ) {
//      // -- se ejecutó el llamado exitosamente
//      resolve()
//   } else {
//      // -- hubo un error en el llamado
//      reject()
//   }
// } )
