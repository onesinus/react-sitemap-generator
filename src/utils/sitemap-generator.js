require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("../common/Urls").default;
const Sitemap = require("react-router-sitemap").default;
const axios = require('axios');

function generateSitemap() {
    axios.get('https://api.otodeals.com/car/list?sort_by=created_date&sort_value=desc')
    .then(function (response) {
      const data = response.data.data.data

      let idMap = [];
      for(var i = 0; i < data.length; i++) {
        idMap.push({ id: data[i].slug });
      }

      const paramsConfig = { "/car-detail/:id": idMap };

      return (
        new Sitemap(router)
          .applyParams(paramsConfig)
          .build("https://www.otodeals.com")
          .save("./public/sitemap-car-detail.xml")
      );
    })
    .catch(function (error) {
      console.log(error);
    })
}

generateSitemap();