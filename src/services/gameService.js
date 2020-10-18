const axios = require("axios");

var UserService = {
  getGames: function (page) {
    return axios.get("https://api.rawg.io/api/games?page=" + page);
  },
  getGamesById: function (id) {
    return axios.get("https://api.rawg.io/api/games?id=" + id);
  },
  getDev: function (page) {
    return axios.get("https://api.rawg.io/api/developers?page=" + page);
  },
  getPlataformas: function () {
    return axios.get("https://api.rawg.io/api/platforms");
  },
  getScreenshotGames: function (id) {
    return axios.get("https://api.rawg.io/api/games/" + id + "/screenshots?page_size=4");
  },
  getPlatformDescription: function (id) {
    return axios.get("https://api.rawg.io/api/platforms/" + id );
  },
  getGamesForDev: function (id) {
    return axios.get("https://api.rawg.io/api/games?page_size=9", {
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
