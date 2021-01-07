var signo = prompt("Cual es tu signo?");

switch (signo) {
  case "capricornio":
    console.log(
      "Transitará una etapa donde tendrá que darle la espalda a los problemas, de lo contario, se encontrará al borde de una crisis de nervios y no podrá ver con claridad."
    );
    break;
  case "aries":
    console.log(
      "No se detenga y empiece a canalizar sus ambiciones en cualquiera de los senderos que se abran ante sus ojos. Hágalo de manera tranquila y verá los buenos frutos."
    );
    break;
  case "tauro":
    console.log(
      "Mantenga el equilibrio ante las situaciones que enfrente, ya que vivirá un período donde las emociones estarán desordenadas. Piense bien antes de actuar."
    );
    break;
  case "geminis":
    console.log(
      "Comprenda que los cambios siempre conducen a un nuevo aprendizaje. Etapa para generar una transformación total en su vida y animarse a cosas nuevas."
    );
    break;
  case "cancer":
    console.log(
      "Aprenda que cuando empiece algo, debe enfocar sus energías en un solo objetivo por vez. Trate de no dispersar las fuerzas en diferentes caminos."
    );
    break;
  case "leo":
    console.log(
      "Sepa que podrá concretar todos los sueños y las ambiciones. Despreocúpese, ya que el ambiente se encontrará armonizado para llegar a su propósito."
    );
    break;
  case "virgo":
    console.log(
      "Si quiere estar en armonía con usted y los demás, trate de evitar la irritabilidad y saque a relucir la paciencia. De esta manera, las cosas le saldrán mejor."
    );
    break;
  case "libra":
    console.log(
      "Prepárese, ya que contará con la Luna en su signo y esas ideas que parecían sepultadas en el pasado volverán para ser incluidas en el presente que está viviendo."
    );
    break;
  case "sagitario":
    console.log(
      "Momento donde deberá ocupar su mente en las cosas realmente importantes y no en aspectos superficiales. Comprenda que no son esenciales para su vida."
    );
    break;
  case "acuario":
    console.log(
      "Sepa que se acerca una etapa importante en su vida de la que saldrá bastante beneficiado. Tome el riesgo y permítase guiar por su intuición natural."
    );
    break;
  case "capricornio":
    console.log(
      "Transitará una etapa donde tendrá que darle la espalda a los problemas, de lo contario, se encontrará al borde de una crisis de nervios y no podrá ver con claridad."
    );
    break;
  case "piscis":
    console.log(
      "Sepa que se acerca una etapa importante en su vida de la que saldrá bastante beneficiado. Tome el riesgo y permítase guiar por su intuición natural."
    );
    break;
  default:
    console.log(`${signo} no es un signo valido`);
    break;
}
