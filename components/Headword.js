const { LocatorList } = require("./LocatorList");

// functions
const { sortedKeys } = require("../functions/sortedKeys");
const { makeNormalizedId } = require("../functions/makeNormalizedId");

// images
// import iconLink from "../images/link-icon.png";
// import iconCopy from "../images/copy-icon2.png";
// import iconCopyMarkdown from "../images/copy-markdown.png";
// import iconCopyHtml from "../images/copy-html.png";
// import iconCopyText from "../images/copy-text.png";

function Headword(headword, headwordObject) {
  const sortedSubWords = sortedKeys(headwordObject);

  let noSubwordLocators = "";
  if (headwordObject.hasOwnProperty("")) {
    noSubwordLocators = `<div class="sub-word">
    ${LocatorList(headwordObject[""], sortedSubWords.length)}
    </div>`;
  }

  let subwords = "";
  sortedSubWords.forEach(subhead => {
    if (subhead === "") return null;
    subwords += `<div class="sub-word">
    <span class="keyword">${subhead}</span>${LocatorList(headwordObject[subhead])}
    </div>`;
  });

  return `<div id="${makeNormalizedId(headword)}">
      <div class="head-word-area">
        <span class="keyword">${headword}</span>
      </div>
      ${noSubwordLocators}
      ${subwords}
    </div>`;
}

module.exports = { Headword };
