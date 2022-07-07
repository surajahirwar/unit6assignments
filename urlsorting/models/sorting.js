const mongoose = require("mongoose");
const shortId = require("shortid");

const SortingSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate,
    },
});

module.exports = mongoose.model("Soring",SortingSchema);