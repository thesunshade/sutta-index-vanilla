const { Locator } = require("./Locator");
const Xref = require("./Xref.js");

function LocatorList(locatorXrefObject, headwordSubCount) {
  const { locators, xrefs } = locatorXrefObject;

  let xrefLabel = "";
  if (locators.length === 0 && xrefs.length === 1 && headwordSubCount === 1) {
    xrefLabel = "see ";
  } else {
    xrefLabel = "see also ";
  }

  function XrefsList() {
    return `<div>
        <span class="xref-label">${xrefLabel}</span>
        ${xrefs.map((xref, index) => {
          return `<span key=${index}>
              <span>
                ${Xref(xref)}
                ${index < xrefs.length - 1 ? "; " : ""}
              </span>
              <br />
            </span>`;
        })}
      </div>`;
  }

  let listString = "";
  locators.forEach((locator, index) => {
    listString += Locator(locator);
    if (index < locators.length - 1) {
      listString += ", ";
    }
  });

  return listString;
}

module.exports = { LocatorList };
