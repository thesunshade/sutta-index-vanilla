const { allSuttasPaliNameDictionary } = require("../data/allSuttasPaliNameDictionary");
const { blurbs } = require("../data/blurbs");

function getSuttaTitleBlurb(citation) {
  let title = allSuttasPaliNameDictionary[citation] ? allSuttasPaliNameDictionary[citation] : "";
  if (allSuttasPaliNameDictionary[citation] && blurbs[citation.toLowerCase()]) {
    title += ": ";
  }
  title += blurbs[citation.toLowerCase()] ? blurbs[citation.toLowerCase()] : "";
  return title;
}

module.exports = { getSuttaTitleBlurb };
