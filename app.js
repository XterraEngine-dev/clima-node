const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const argv = require("./config/yargs").argv;

let getInfo = async () => {
  try {
    let coors = await lugar.getLugarLatLng(argv.direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima en ${coors.direccion} es de ${temp}`;
  } catch (error) {
      return `No se pudo determinar el clima en ${argv.direccion}`
  }
};

getInfo(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e));

/*lugar
  .getLugarLatLng(argv.direccion)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));

clima
  .getClima(9.9280694, -84.0907246)
  .then(resp => console.log(resp))
  .catch(e => console.log(e));*/
