const options = {
  file: {
    alias: "f",
    desc: "Permite establecer el path del archivo CSV",
  },
  country: {
    default: "ECU",
    alias: "c",
    desc: "Permite determinar el pais a analizar",
  },
  year: {
    alias: "y",
    desc: "Permite especificar el año para las estadisticas",
    default: 2018,
  },
  help: {
    alias: "h",
    desc: "Muestra la ayuda.",
  },
  version: {
    alias: "v",
    desc: "Muentra la version.",
  },
};
const argv = require("yargs")
  .command("mostrar", "", {
    options,
  })
  .command("guardar", "", {
    options,
  }).argv;
module.exports = {
  argv
};
