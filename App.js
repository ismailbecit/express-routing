const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(400).json("Hello there is HomePage");
});

app.post("/user", (req, res) => {
    res.status(200).json("Hello There is User");
});

app.put("/user", (req, res) => {
    res.status(200).json("Update By User");
});

app.delete("/user", (req, res) => {
    res.status(200).json("Delete By User");
});
app.listen(8080, () => console.log("Serve is Staterd is port 8080"));
