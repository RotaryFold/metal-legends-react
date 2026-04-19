import { showSaveFilePicker } from "show-open-file-picker";
import * as XLSX from "xlsx";
import YAML from "yaml";

export const saveFileInFormat = async (format, data, fileName = "data.json") => {

  let description = "";
  let acceptedType = {};
  let content = "";

  switch (format) {
    case "json":
      description = "JSON";
      acceptedType = {
        "application/json": [".json"],
      };
      content = JSON.stringify(data, null, 2); // JSON data should be passed as JSON object
      break;
    case "xml":
      description = "XML";
      acceptedType = {
        "application/xml": [".xml"],
        "text/xml": [".xml"],
      };
      content = data; // XML data should be passed as a string
      break;
    case "csv":
      description = "CSV";
      acceptedType = {
        "text/csv": [".csv"],
      };
      content = data; // CSV data should be passed as a string
      break;
    case "yaml":
      description = "YAML";
      acceptedType = { "text/yaml": [".yaml", ".yml"] };
      content = YAML.stringify(data);
      break;
    case "tsv":
      description = "TSV";
      acceptedType = { "text/tsv": [".tsv"] };
      const wsTsv = XLSX.utils.json_to_sheet(data);
      content = XLSX.utils.sheet_to_csv(wsTsv, { FS: "\t" });
      break;
    case "xlsx":
    case "xls":
    case "ods":
      description = format.toUpperCase();
      acceptedType = {};
      if (format === "xlsx") acceptedType["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"] = [".xlsx"];
      if (format === "xls") acceptedType["application/vnd.ms-excel"] = [".xls"];
      if (format === "ods") acceptedType["application/vnd.oasis.opendocument.spreadsheet"] = [".ods"];
      
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, "Bands");
      
      content = XLSX.write(wb, { bookType: format, type: "array" });
      break;
    default:
      throw new Error(`Unsupported format: ${format}`);
  }

  const handle = await showSaveFilePicker({
    suggestedName: fileName,
    types: [
      {
        description: description,
        accept: acceptedType
      },
    ],
  });

  const writable = await handle.createWritable();
  await writable.write(content);
  await writable.close();
};