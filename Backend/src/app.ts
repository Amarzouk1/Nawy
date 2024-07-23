import express from "express";
const mongoose = require("mongoose");
const Apartments = require("./model");
const app = express();
const port = 3001;
require("dotenv").config();


var cors = require("cors");

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected", () => {
  console.log("mongodb connection established successfully");
});
mongoose.connection.on("error", () => {
  console.log("mongodb connection Failed");
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

// app.get("/apartments", async (req, res) => {
//   const apartments = await Apartments.find({});
//   res.json(apartments);
// });

app.get("/apartments", async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;
  try {
    const apartments = await Apartments.find({}).skip(skip).limit(limit);
    const total = await Apartments.countDocuments({});
    res.json({
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data: apartments
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/apartments/:id", async (req, res) => {
  console.log(req.params.id)
  const apartments = await Apartments.findById(req.params.id);
  res.json(apartments);
});
app.post("/addApartment", async (req, res) => {
  const apartment = await Apartments.create(req.body);
  res.json(apartment);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
