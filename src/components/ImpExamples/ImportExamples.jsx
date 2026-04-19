import { useState } from "react";
import { importFileToInternalJson } from "../../services/file-import";
import { setAllBands } from "../../services/firebase-bands";
import "./ImportExamples.css";

export default function ImportExamples() {
  const [internalJson, setInternalJson] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);

  const handleImport = async () => {
    try {
      setError("");
      setSuccess("");
      const result = await importFileToInternalJson();
      setInternalJson(result);
    } catch (err) {
      if (err?.name === "AbortError") {
        return;
      }
      setError(err.message || "File import failed");
    }
  };

  const handleSaveToFirebase = async () => {
    if (!internalJson?.data) return;

    setSaving(true);
    setError("");
    setSuccess("");

    try {

      let bandsArray = [];

      if (Array.isArray(internalJson.data)) {

        bandsArray = internalJson.data.map((item) => ({
          id: item.id || item.name?.toLowerCase().replace(/\s+/g, "-") || "",
          name: item.name || "",
          genre: item.genre || "",
          year: parseInt(item.year) || 0,
          image: item.image || "",
          description: item.description || "",
        }));
      } else if (internalJson.data.bands?.band) {

        const xmlBands = Array.isArray(internalJson.data.bands.band)
          ? internalJson.data.bands.band
          : [internalJson.data.bands.band];
        bandsArray = xmlBands.map((item) => ({
          id: item.id || item.name?.toLowerCase().replace(/\s+/g, "-") || "",
          name: item.name || "",
          genre: item.genre || "",
          year: parseInt(item.year) || 0,
          image: item.image || "",
          description: item.description || "",
        }));
      } else {
        throw new Error("Unrecognized data format");
      }

      await setAllBands(bandsArray);
      setSuccess(`${bandsArray.length} bands saved to Firebase!`);
    } catch (err) {
      setError("Error saving to Firebase: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="import-section">
      <h3 className="import-title">Import Data</h3>
      <p className="import-info">
        Import bands from a JSON, XML or CSV file and save them to Firebase.
      </p>

      <div className="import-actions">
        <button className="import-btn" onClick={handleImport}>
          Choose File
        </button>

        {internalJson && (
          <button
            className="import-btn import-btn--save"
            onClick={handleSaveToFirebase}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save to Firebase"}
          </button>
        )}
      </div>

      <div className="import-area">
        {error && <p className="import-message import-message--error">{error}</p>}
        {success && <p className="import-message import-message--success">{success}</p>}
        <pre className="import-preview">
          {internalJson
            ? JSON.stringify(internalJson, null, 2)
            : "No imported file yet"}
        </pre>
      </div>
    </div>
  );
}