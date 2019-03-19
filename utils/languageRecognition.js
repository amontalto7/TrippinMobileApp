const axios = require("axios");

let languageDetected;
// var ip = '160.39.7.165'
const access_key = process.env.access_key;
// console.log(access_key);

function recogLang(ip) {
  const queryURL = "http://api.ipstack.com/" + ip + "?access_key=" + access_key;

  return axios.get(queryURL).then(function(response) {
    console.log(` Country Code: ${  response.data.location.languages[0].code}`);
    console.log(` Language: ${  response.data.location.languages[0].name}`);
    const countryCode = response.data.location.languages[0].code;
    const countryLanguage = response.data.location.languages[0].name;
    // console.log(response);

    return { countryCode, countryLanguage };
    // languageDetected = response.data.location.languages[0].name;
  });
}

module.exports = recogLang;
