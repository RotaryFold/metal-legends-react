import { useState, useEffect } from "react";
import { saveFileInFormat } from "../../services/file-export";
import { getBands } from "../../services/firebase-bands";
import "./ExportExamples.css";

function ExportExamples() {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBands()
      .then((data) => setBands(data))
      .catch((err) => console.error("Error loading bands:", err))
      .finally(() => setLoading(false));
  }, []);


  const buildJson = () => {
    return bands.map(({ firebaseKey, ...rest }) => rest);
  };


  const buildXml = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<bands>\n`;
    bands.forEach((band) => {
      xml += `  <band>\n`;
      xml += `    <id>${band.id || ""}</id>\n`;
      xml += `    <name>${band.name || ""}</name>\n`;
      xml += `    <genre>${band.genre || ""}</genre>\n`;
      xml += `    <year>${band.year || ""}</year>\n`;
      xml += `    <image>${band.image || ""}</image>\n`;
      xml += `    <description>${band.description || ""}</description>\n`;
      xml += `  </band>\n`;
    });
    xml += `</bands>`;
    return xml;
  };


  const buildCsv = () => {
    const header = "id,name,genre,year,image,description";
    const rows = bands.map(
      (b) =>
        `${b.id || ""},${b.name || ""},${b.genre || ""},${b.year || ""},"${b.image || ""}","${(b.description || "").replace(/"/g, '""')}"`
    );
    return [header, ...rows].join("\n");
  };

  if (loading) {
    return (
      <div className="export-section">
        <h3 className="export-title">Export Data</h3>
        <p className="export-loading">Loading bands data...</p>
      </div>
    );
  }

  return (
    <div className="export-section">
      <h3 className="export-title">Export Data</h3>
      <p className="export-info">
        Export <strong>{bands.length}</strong> bands from Firebase in any format:
      </p>
      <div className="export-buttons">
        <button
          className="export-btn export-btn--json"
          onClick={() => saveFileInFormat("json", buildJson(), "datos.json")}
        >
          Export JSON
        </button>
        <button
          className="export-btn export-btn--xml"
          onClick={() => saveFileInFormat("xml", buildXml(), "datos.xml")}
        >
          Export XML
        </button>
        <button
          className="export-btn export-btn--csv"
          onClick={() => saveFileInFormat("csv", buildCsv(), "datos.csv")}
        >
          Export CSV
        </button>
      </div>
    </div>
  );
}

export default ExportExamples;