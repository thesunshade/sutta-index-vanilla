const { makeNormalizedId } = require("../functions/makeNormalizedId");

function Xref({ xref }) {
  const locationId = makeNormalizedId(xref);

  function cleanUpXref(xref) {
    return xref.replace("xref ", "");
  }

  function handleClick(e) {
    e.preventDefault();
    window.location.hash = locationId;
  }

  return `<a title="${xref.replace("xref ", "")}" class="xref-link" href="${
    "#" + locationId
  }" onClick={e => handleClick(e)}>${cleanUpXref(xref)}</a>`;
}

module.exports = { Xref };
