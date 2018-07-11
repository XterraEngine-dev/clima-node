const axios = require("axios");

const getClima = async (lat, lng) => {
  let resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=15a01570d0dcc9a47039078856693fdb`
  );
  return resp.data.main.temp;
};

module.exports = {
  getClima
};
