const { allSuttasPaliNameDictionary } = require("../data/allSuttasPaliNameDictionary");

function getSuttaTitle(citation) {
  let title = allSuttasPaliNameDictionary[citation] ? allSuttasPaliNameDictionary[citation] : "";
  return title.replace(/ \[.+?\]/g, "");
}

module.exports = { getSuttaTitle };
