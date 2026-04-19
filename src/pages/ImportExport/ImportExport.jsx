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
            <a href="/datos.yaml" download className="ie-link ie-link--yaml">
              datos.yaml
            </a>
            <a href="/datos.tsv" download className="ie-link ie-link--tsv">
              datos.tsv
            </a>
            <a href="/datos.xlsx" download className="ie-link ie-link--xlsx">
              datos.xlsx
            </a>
            <a href="/datos.xls" download className="ie-link ie-link--xls">
              datos.xls
            </a>
            <a href="/datos.ods" download className="ie-link ie-link--ods">
              datos.ods
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportExport;
