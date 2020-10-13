const axios = require("axios");

var UserService = {
  //GET
  getGames: function () {
    //Devuelve una promise
    return axios.get("https://api.rawg.io/api/games");
  },
  getDev: function () {
    return axios.get("https://api.rawg.io/api/developers");
  },
  getPlataformas: function () {
    return axios.get("https://api.rawg.io/api/platforms");
  },
  getScreenshotGames: function (id) {
    return axios.get("https://api.rawg.io/api/games/" + id + "/screenshots");
  },
  getPlatformDescription: function (id) {
    return axios.get("https://api.rawg.io/api/platforms/" + id );
  },
  getGamesForDev: function (id) {
    return axios.get("https://api.rawg.io/api/games", {
      params: {
        developers: id,
      }
    });
  },
  getGamesForPlatform: function (id) {
    return axios.get("https://api.rawg.io/api/games", {
      params: {
        platforms: id,
      }
    });
  }
};

export {UserService as default};
