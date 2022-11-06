import express from "express";
import { v4 as uuidv4 } from "uuid";

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let obavjesti = [];

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/vratiObavjesti", (req, res) => {
    let obavjesti_naziv_datum = obavjesti.map((element) => {
        return {
            naziv: element.naziv,
            datum: element.datum,
        };
    });
    res.json(obavjesti_naziv_datum);
});

app.get("/vratiObavjest/:uuid", (req, res) => {
    let uuid = req.params.uuid;
    let obavjest = obavjesti.find((element) => {
        return element.id == uuid;
    });
    obavjest = {
        naziv: obavjest.naziv,
        sadrzaj: obavjest.sadrzaj,
        datum: obavjest.datum,
    };
    res.json(obavjest);
});

app.post("/dodajObavjest", (req, res) => {
    let obavjest = {
        id: uuidv4(),
        naziv: "Rok za predaju zadace",
        sadrzaj: "Rok za predaju zadace je 8.11.",
        datum: Date.now(),
    };
    obavjesti.push(obavjest);
    res.json(obavjest);
});

app.patch("/izmjeniObavjest/:uuid", (req, res) => {
    let uuid = req.params.uuid;
    console.log(req.body);
    let sadrzaj = req.body.sadrzaj;
    let obavjest = obavjesti.find((element) => {
        return element.id == uuid;
    });
    obavjest.sadrzaj = sadrzaj;
    res.json(obavjest);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
