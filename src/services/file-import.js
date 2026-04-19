import { showOpenFilePicker } from "show-open-file-picker";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import YAML from "yaml";

function xmlNodeToObject(node) {
  const children = Array.from(node.children);

  if (children.length === 0) {
    return node.textContent?.trim() ?? "";
  }

  const result = {};

  for (const child of children) {
    const value = xmlNodeToObject(child);

    if (result[child.nodeName] !== undefined) {
      if (!Array.isArray(result[child.nodeName])) {
        result[child.nodeName] = [result[child.nodeName]];
      }
      result[child.nodeName].push(value);
    } else {
      result[child.nodeName] = value;
    }
  }

  return result;
}

function xmlToJson(text) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "application/xml");

  const errorNode = xmlDoc.querySelector("parsererror");
  if (errorNode) {
    throw new Error("XML invalid");
  }

  const root = xmlDoc.documentElement;

  return {
    [root.nodeName]: xmlNodeToObject(root),
  };
}

function csvToJson(text) {
  const result = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  });

  if (result.errors.length) {
    throw new Error("CSV invalid");
  }

  return result.data;
}

function getExtension(fileName) {
  return fileName.split(".").pop()?.toLowerCase() || "";
}

async function parseFileContent(extension, file) {
  if (["xlsx", "xls", "ods", "html", "htm"].includes(extension)) {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    return XLSX.utils.sheet_to_json(worksheet);
  }

  const text = await file.text();

  switch (extension) {
    case "json":
      return JSON.parse(text);
    case "xml":
      return xmlToJson(text);
    case "csv":
      return csvToJson(text);
    case "tsv":
      const resultTsv = Papa.parse(text, { header: true, skipEmptyLines: true, delimiter: "\t" });
      if (resultTsv.errors.length) throw new Error("TSV invalid");
      return resultTsv.data;
    case "yaml":
    case "yml":
      return YAML.parse(text);
    default:
      throw new Error(`Unsupported format: ${extension}`);
  }
}

export async function importFileToInternalJson() {
  const [fileHandle] = await showOpenFilePicker({
    multiple: false,
    types: [
      {
        description: "compatible files",
        accept: {
          "application/json": [".json"],
          "application/xml": [".xml"],
          "text/xml": [".xml"],
          "text/csv": [".csv"],
          "text/tsv": [".tsv"],
          "text/yaml": [".yaml", ".yml"],
          "text/html": [".html", ".htm"],
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
          "application/vnd.ms-excel": [".xls"],
          "application/vnd.oasis.opendocument.spreadsheet": [".ods"]
        },
      },
    ],
  });

  const file = await fileHandle.getFile();
  const extension = getExtension(file.name);

  // We explicitly await the parsing since it reads the file buffer/text
  const data = await parseFileContent(extension, file);

  return {
    fileName: file.name,
    format: extension,
    data,
  };
}