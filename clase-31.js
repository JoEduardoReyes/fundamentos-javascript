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
  .then(function (personaje) {
    console.log(`Personaje 1 es ${personaje.result.properties.name}`);
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
