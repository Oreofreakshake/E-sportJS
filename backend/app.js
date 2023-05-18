const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
var cors = require("cors");

const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images");
    },
});

const upload = multer({ storage: storage });

app.post("/uploads", upload.single("image"), (req, res) => {
    res.send("sent");
});

app.get("/", async (req, res, next) => {
    res.send({ message: "Awesome it works 🐻" });
});

app.use("/api", require("./routes/api.route"));

app.use((req, res, next) => {
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
