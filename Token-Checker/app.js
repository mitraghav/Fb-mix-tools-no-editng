const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.render("index"));

app.get("/token-check", (req, res) => res.render("tokenCheck"));

app.post("/token-check", async (req, res) => {
    const token = req.body.accessToken;

    try {
        const response = await axios.get(`https://graph.facebook.com/me?access_token=${token}`);
        res.render("tokenResult", { data: response.data, valid: true });
    } catch (error) {
        res.render("tokenResult", { error: error.response.data.error.message, valid: false });
    }
});
// Ping Route to Keep Server Alive
setInterval(() => {
    axios.get("https://fbtokencheckerbysameersiins.onrender.com/")
        .then((response) => console.log(`✅ ${response.status} Status: Ping request successful!`))
        .catch((error) => console.log(`❌ Ping request failed!`));
}, 9 * 60 * 1000); // Every 9 minutes

app.listen(port, () => console.log(`Fb token checker started on port ${port}`));