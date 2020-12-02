import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Sample from "./resume.pdf";

export const Resume = () => {
  return (
    <div class="resume" style={{ textAlign: "-webkit-center" }}>
      <Document file={Sample}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
