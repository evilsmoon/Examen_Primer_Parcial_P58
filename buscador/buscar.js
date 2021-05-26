const csv = require("csv-parser");
const fs = require("fs");

const res = [];

const mostrar = (country , year , path = "./datos.csv") => {
  return new Promise((resolve, reject) => {
    if (!Number(year)) {
      reject(`${year} no es valido`);
      return;
    }
    fs.createReadStream(path)
      .pipe(csv({}))
      .on("data", (data) => {
        res.push(data);
      })
      .on("end", () => {
        for (let i = 0; i < res.length; i++) {
          if (res[i]["Country Code"] === country) {
            data = res[i];
            console.log(data['"Country Name"']);
            console.log( `Datos: ${data["Indicator Name"]}
                         Pais: ${data["Country Name"]}
                         Año: ${year}
                         Valor: ${data[year]}`);
          }
        }


      });
  });
};

const resp = `${process.cwd()}/resultados`;
const guardar = (country = 'ECU', year = 1960, path = './datos.csv') => {
  return new Promise((resolve, reject) => {
    if (!Number(year)) {
      reject(`El valor introducido '${year}' no es un número`);
      return;
    }

    let saveData = '';

    fs.createReadStream(path)
      .pipe(csv({}))
      .on('data', data => res.push(data))
      .on('end', () => {
        for (let i = 0; i < res.length; i++) {
          if (res[i]['Country Code'] === country) {
            data = res[i];
            saveData += `Datos: ${data['Indicator Name']} 
                                Pais: ${data['Country Name']} 
                                Año: ${year} 
                                Valor: ${data[year]} \n`;
          }
        }
        if (!resp) {
          fs.writeFile(`./resultados/${country}-${country}.txt`, saveData, err => {
            if (err) reject(err);
            resolve(`Archivo guardado exitosamente: resultados/${country}-${country}.txt`);
          });
        } else {
          fs.mkdir(resp, err => {
            if (err) {
              console.error('Guardando en: resultados');
            }
          });
          fs.writeFile(`./resultados/${country}-${country}.txt`, saveData, err => {
            if (err) reject(err);
            resolve(`Archivo guardado exitosamente: resultados/${country}-${country}.txt`);
          });
        }
      });
  });
};

module.exports = {
  mostrar,
  guardar,
};
