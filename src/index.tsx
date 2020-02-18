import React from "react";
import ReactPdf from "@react-pdf/renderer";
import express from "express";
import { DataSheet } from "./DataSheet";

const app = express();

app.get("/", async (req, res) => {
  const stream = await ReactPdf.renderToStream(<DataSheet />);
  res.set("Content-Type", "application/pdf");
  stream.pipe(res);
});

const port = 8080;
app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`http://127.0.0.1:${port}`);
  }
});
