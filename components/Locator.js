const { getSuttaTitleBlurb } = require("../functions/getSuttaTitleBlurb.js");
const { getSuttaTitle } = require("../functions/getSuttaTitle.js");

function Locator(location) {
  // let { location } = props;
  const destination = "SC";

  function stripRangesFromUrls(locator) {
    return locator.replace(/–.+/, "");
  }

  function justBook(location) {
    return location.replace(/[0-9.-]/g, "").toLowerCase();
  }

  const locationForUrl = stripRangesFromUrls(location).toLowerCase();

  let url = "";
  switch (destination) {
    case "SC":
      url = `https://suttacentral.net/${locationForUrl}/en/sujato`;
      break;
    case "SCL":
      url = `https://sc.readingfaithfully.org/?q=${locationForUrl}`;
      break;
    case "CH":
      url = `https://sutta.readingfaithfully.org/?q=${locationForUrl}`;
      break;
    case "SCV":
      url = `https://voice.suttacentral.net/scv/index.html#/sutta?search=${locationForUrl}`;
      break;
    default:
      url = `https://suttacentral.net/${locationForUrl}/en/sujato`;
  }

  switch (justBook(location)) {
    case "vv":
    case "pv":
      url = `https://sutta.readingfaithfully.org/?q=${locationForUrl}`;
  }

  function addSpace(location) {
    return location.replace(/([A-Za-z])(\d)/, "$1 $2");
  }

  const suttaNameJsx = `<span class="sutta-name"> ${getSuttaTitle(location)}</span>`;

  return `<a
        href="${url}"
        rel="noreferrer"
        target="_blank"
        class"="${justBook(location) + " locator"}">
        ${addSpace(location)} ${getSuttaTitle(location) ? suttaNameJsx : ""}</a>`;
}

module.exports = { Locator };

//         title="${getSuttaTitleBlurb(stripRangesFromUrls(location))}">
