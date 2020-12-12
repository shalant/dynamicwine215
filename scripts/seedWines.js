const mongoose = require("mongoose");
const db = require("../models");

// Empty the Users and insert the user below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/winelist"
);

const wineSeed = [
  {
    wine_name: "Menti",
    year: "2018",
    color: "White",
    variety: "Sparkling",
    grape: "Other",
    grape_detail: "Gambellara",
    full_name: "Roncaie sui lieviti",
    country: "Italy",
    region: "Veneto",
    PPB: "44",
    PPG: "Y",
    details: "blah",
    date: new Date(Date.now())
  },
  {
    wine_name: "Raventos I Blanc",
    year: "2017",
    color: "White",
    variety: "Sparkling",
    grape: "Other",
    grape_detail: "Macabeo/Parellada/Xarello",
    full_name: "Blanc de Blancs",
    country: "Spain",
    region: "Barcelona",
    PPB: "44",
    BTG: true,
    PPG: "11",
    details: "blah",
    date: new Date(Date.now())
  },
  {
    wine_name: "Mirco Mariotti",
    year: "NV",
    color: "White",
    variety: "Sparkling",
    grape: "Other",
    grape_detail: "Fortana",
    full_name: "Set e Mez",
    country: "Italy",
    region: "Dell'Emilia",
    PPB: "48",
    BTG: true,
    PPG: "12",
    details: "blah",
    date: new Date(Date.now())
  },
  {
    wine_name: "Ameztoi",
    year: "2019",
    color: "White",
    variety: "Old World",
    grape: "Txakolina",
    grape_detail: "Hondurribi Zuri/Hondurribi Beltza",
    full_name: "Getariako",
    country: "Spain",
    region: "Basque Country",
    PPB: "44",
    BTG: false,
    PPG: "11",
    details: "blah",
    date: new Date(Date.now())
  },
  {
    wine_name: "Domaine Mercouri",
    year: "2017",
    color: "Red",
    variety: "Old World",
    grape: "NA",
    grape_detail: "Refosco/Mavrodaphne",
    full_name: "Vin des Letinon",
    country: "Greece",
    region: "Peloponnesus",
    PPB: "50",
    BTG: true,
    PPG: "13",
    details: "blah",
    date: new Date(Date.now())
  }
];

db.Wine
  .remove({})
  .then(() => db.Wine.collection.insertMany(wineSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });