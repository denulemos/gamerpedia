const axios = require("axios");

var UserService = {
  //GET
  getUsuarios: function () {
    return axios.get("https://5e94a070f591cb0016d8140c.mockapi.io/usuarios");
  },
 
 
};

export {UserService as default};
