const express = require("express");
const mongoose = require("mongoose");
const sorting = require("./models/sorting");
const app = express();

mongoose.connect(
    "mongodb://127.0.0.1:27017/Sorting",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    const sortings = await sorting.find();
    res.render("index", { sortings: sortings });
});

app.post("/sortings", async (req, res) => {
    await sorting.create({ full: req.body.urlf });

    res.redirect("/");
});

app.get("/:sorting", async (req, res) => {
    const sorting = await sorting.findOne({ short: req.params.sorting });
    if (sorting == null) return res.sendStatus(404);

    res.redirect(sorting.full);
});

app.listen(8080);