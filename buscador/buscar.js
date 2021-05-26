const csv = require("csv-parser");
const fs = require("fs");

const res = [];

const mostrar = (country = "ECU", year = 1960, path = "./datos.csv") => {
  return new Promise((resolve, reject) => {
    if (!Number(year)) {
      reject(`${year} no es valido`);
      return;
    }
    let saveData = "";
    fs.createReadStream(path)
      .pipe(csv({}))
      .on("data", (data) => {
        res.push(data);
      })
      .on("end", () => {
        for (let i = 0; i < res.length; i++) {
          if (res[i]["Country Code"] === country) {
            data = res[i];
            console.log( `Datos: ${data["Indicator Name"]}
                         Pais: ${data["Country Name"]}
                         Año: ${year}
                         Valor: ${data[year]}`);
          }
        }


      });
  });
};

module.exports = {
  mostrar,
  guardar,
};
