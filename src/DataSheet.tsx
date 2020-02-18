import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";
import { Barcode } from "./Barcode";

export const DataSheet = () => {
  return (
    <Document>
      <Page style={{ textAlign: "center" }}>
        <Text>Product</Text>
        <Barcode ean="4002103282020" width={200} height={60} />
      </Page>
    </Document>
  );
};
