const express = require("express");
const app = express();
const port = 3000;

// eslint-disable-next-line no-console
console.log(__dirname);

const Bundler = require("parcel-bundler");

app.get("/message", (req, res) => {
    // eslint-disable-next-line no-console
    console.log("reuest!!!");
    res.json("message from server");});

app.use(new Bundler(`${__dirname}/index.html`, {watch: true, sourceMaps: true}).middleware());

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port: ${port}`));