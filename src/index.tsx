import React from "react";
import ReactPdf, { Document, Page, Text } from "@react-pdf/renderer";
import { Barcode } from "./Barcode";

const eans = ["590123412345", "761020024674", "400638133393", "761331206240"];

const Doc = () => {
  return (
    <Document>
      <Page style={{ textAlign: "center" }}>
        <Text>Hallo</Text>
        <Barcode ean={eans[3]} width={200} height={60} />
      </Page>
    </Document>
  );
};

ReactPdf.renderToFile(<Doc />, "test.pdf");
