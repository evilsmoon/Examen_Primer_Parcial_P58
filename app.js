const argv = require("./config/yargs").argv;
const { mostrar,guardar } = require("./buscador/buscar");

const command = argv._[0];

switch (command) {
  case "mostrar":
    mostrar(argv.country, argv.year, argv.file).catch((resp) => {
      console.log(resp);
    });
    break;
  case "guardar":
    guardar(argv.country, argv.year, argv.file)
      .then((datosGuardados) => {
        console.log(datosGuardados);
      })
      .catch((e) => {
        console.log(e);
      });
    break;
  default:
    console.log("Error");
}
