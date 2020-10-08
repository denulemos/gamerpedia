const axios = require('axios');

var UserService ={
    //GET
    getGames : function(){
        //Devuelve una promise
        return axios.get('https://api.rawg.io/api/games');
    },
    getDev: function(){
        return axios.get('https://api.rawg.io/api/developers');
    },
    getPlataformas: function(){
        return axios.get('https://api.rawg.io/api/platforms');
    }
}

export {UserService as default}