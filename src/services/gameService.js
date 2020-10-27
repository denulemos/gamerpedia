const axios = require("axios");

var UserService = {
  getGames: function (page) {
    return axios.get("https://api.rawg.io/api/games", {
      params: {
        page: page
      }
    });
  },
  getGamesById: function (id) {
    return axios.get("https://api.rawg.io/api/games", {
      params: {
        id: id
      }
    });
  },
  getDev: function (page) {
    return axios.get("https://api.rawg.io/api/developers", {
      params: {
        page: page,
      }
    });
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
  getGamesForDev: function (id, page) {
    return axios.get("https://api.rawg.io/api/games", {
      params: {
        developers: id,
        page: page
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
