const fs = require("fs");
const { indexObject } = require("../data/index-object");
const { Locator } = require("../components/Locator");
const { LocatorList } = require("../components/LocatorList");
const { Headword } = require("../components/Headword");
const { SuttaIndex } = require("../components/SuttaIndex");

let htmlPage = "";

htmlPage = SuttaIndex();

const output = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon.png">
    <title>TITLE</title>
</head>

<body>
    <div id="index-contents">${htmlPage}</div>
    <script type="module" src="index.js"></script>
</body>

</html>`;

try {
  fs.writeFileSync("../index.html", output);
  console.log("page contents written");
} catch (err) {
  console.error(err);
}

// const output = `export const page =\`${htmlPage}\``;

// try {
//   fs.writeFileSync("../page-contents.js", output);
//   console.log("page contents written");
// } catch (err) {
//   console.error(err);
// }
