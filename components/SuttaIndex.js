const { indexObject } = require("../data/index-object");
const { Headword } = require("./Headword");

function SuttaIndex() {
  let alphabet = Object.keys(indexObject);

  let indexContents = "";
  alphabet.forEach(letter => {
    const headwordsObject = indexObject[letter];
    const headwordsArray = Object.keys(headwordsObject);
    indexContents += `<div key=${letter + "-wholeLetter"}>
    <div class="alphabet-anchor" id="${letter}">
      ${letter}
    </div>`;
    headwordsArray.forEach(headword => {
      indexContents += Headword(headword, headwordsObject[headword]);
    });
    indexContents += `</div>`;
  });

  return `<div id="sutta-index" className="sutta-index">
${indexContents}
      </div>`;
}

module.exports = { SuttaIndex };
