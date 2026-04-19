import ExportExamples from "../../components/ExpExamples/ExportExamples";
import ImportExamples from "../../components/ImpExamples/ImportExamples";
import "./ImportExport.css";

function ImportExport() {
  return (
    <section className="import-export-section">
      <div className="container">
        <h2 className="section-title">Import / Export</h2>
        <p className="ie-subtitle">
          Manage your bands data — export from Firebase or import from file.
        </p>

        <div className="ie-grid">
          <ExportExamples />
          <ImportExamples />
        </div>

        <div className="ie-examples">
          <h3 className="ie-examples-title">📁 Example Files</h3>
          <p className="ie-examples-info">
            Download example files to test the import functionality:
          </p>
          <div className="ie-examples-links">
            <a href="/datos.json" download className="ie-link ie-link--json">
              datos.json
            </a>
            <a href="/datos.xml" download className="ie-link ie-link--xml">
              datos.xml
            </a>
            <a href="/datos.csv" download className="ie-link ie-link--csv">
              datos.csv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportExport;
