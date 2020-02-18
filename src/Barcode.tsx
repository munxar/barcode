import React, { FC } from "react";
import { bitPattern } from "./ean";
import { Canvas } from "@react-pdf/renderer";

export const Barcode: FC<{ ean: string; width: number; height: number }> = ({
  ean,
  height,
  width
}) => {
  const pattern = bitPattern(ean);
  return (
    <Canvas
      style={{ width, height, padding: 10 }}
      paint={(doc: PDFKit.PDFDocument, width: number, height: number) => {
        const step = width / pattern.length;
        for (let i = 0; i < pattern.length; i++) {
          if (pattern[i] === "1") {
            doc.rect(i * step, 0, step, height).fill();
          }
        }
      }}
    />
  );
};
