const axios = require("axios");
const translate = require("../screens/PhrasesScreen");
const recogLang = require("./languageRecognition");

let URL = "https://www.ipapi.co/";
// console.log(URL);
URL += "json";

axios.get(URL).then(async response => {
  // const geoLoc = await recogLang(response.data.ip);

  const geoLoc = await recogLang("85.214.132.117");
  // console.log(geoLoc);
  translate(geoLoc.countryCode);
});
