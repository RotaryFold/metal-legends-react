<div align="center">
  <h1>🤘 Metal Legends</h1>
  <p><strong>A fan-made heavy metal web app built with React + Vite</strong></p>
  <p>
    <a href="https://github.com/RotaryFold/metal-legends-react">
      <img src="https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge&logo=github" alt="GitHub" />
    </a>
    <a href="https://react.dev">
      <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
    </a>
    <a href="https://vitejs.dev">
      <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
    </a>
  </p>
</div>

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Pages](#pages)
- [Import / Export Data](#-import--export-data)
- [Firebase Services Architecture](#-firebase-services-architecture)
- [Third-Party Components](#third-party-components)
- [Tutorial Links](#tutorial-links)
- [Design Inspiration](#design-inspiration)
- [Getting Started](#getting-started)
- [Firebase Hosting](#firebase-hosting)
- [RSS Feed](#rss-feed)
- [Author](#author)
- [License](#license)

---

## 🎸 About the Project

**Metal Legends** is a responsive single-page application built with **React 19** and **Vite 7**. It was created as part of a university web development course. The app celebrates iconic heavy metal bands, lets users manage concert listings, participate in a community forum, and stay updated with the latest metal news through an RSS feed.

The design follows a dark, immersive metal aesthetic using custom CSS with flexbox layouts and media queries for full responsiveness across mobile, tablet and desktop.

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` `/home` | Home page — Hero banner, genre filter (state + props) and photo gallery |
| `/bands` | Grid of famous metal bands with modal detail view (data from Firebase) |
| `/concerts` | Full CRUD: add, edit, delete and list upcoming concerts |
| `/gallery` | Photo mosaic gallery of legendary metal performances |
| `/forum` | Community forum with full CRUD + filter by category and text search |
| `/news` | Metal news feed linked to a live RSS source |
| `/contact` | Contact form + interactive Leaflet map |
| `/import-export` | Import/Export bands data in JSON, XML and CSV formats |

### Home Page Description

The home page greets the user with a full-width hero banner showcasing a live concert photograph, a call-to-action button and an animated genre filter. Using `useState`, the user can toggle between *All Genres*, *Thrash Metal* and *Heavy Metal* — the `FeaturedBands` child component receives the selected genre as a prop and renders only matching bands. Below the filter a photo gallery displays ten iconic metal performance shots in a responsive grid.

---

## 📥 Import / Export Data

The `/import-export` page allows users to **export** the current bands stored in Firebase to a file, and **import** bands from a file back into Firebase. Three formats are supported:

| Format | Export | Import | Example File |
|--------|--------|--------|-------------|
| JSON | ✅ | ✅ | [datos.json](public/datos.json) |
| XML | ✅ | ✅ | [datos.xml](public/datos.xml) |
| CSV | ✅ | ✅ | [datos.csv](public/datos.csv) |

### Example import files

You can download the example files to test the import functionality:

- 📄 **JSON** — [datos.json](public/datos.json)
- 📄 **XML** — [datos.xml](public/datos.xml)
- 📄 **CSV** — [datos.csv](public/datos.csv)

### How it works

1. **Export**: Fetches all bands from Firebase Realtime Database and generates a downloadable file in the selected format (JSON, XML or CSV).
2. **Import**: Opens a file picker, parses the selected file (JSON, XML or CSV), shows a preview, and saves the parsed bands into Firebase on confirmation.

The import/export logic is implemented using the [`show-open-file-picker`](https://www.npmjs.com/package/show-open-file-picker) polyfill for the File System Access API and [`papaparse`](https://www.papaparse.com/) for CSV parsing, following the professor's example at [tcrurav/react-import-export-json-xml-csv](https://github.com/tcrurav/react-import-export-json-xml-csv).

---

## 🗂️ Firebase Services Architecture

All Firebase access is **centralized** in the `src/services/` folder. Pages and components never access Firebase directly — they always go through the service layer:

```
src/
├── firebase/
│   └── firebase.js          # Firebase config & initialization
├── services/
│   ├── firebase-bands.js     # CRUD operations for bands (Firebase)
│   ├── file-export.js        # Export to JSON / XML / CSV
│   └── file-import.js        # Import from JSON / XML / CSV
├── components/
│   ├── ExpExamples/          # Export UI component (uses services/)
│   └── ImpExamples/          # Import UI component (uses services/)
└── pages/
    ├── Bands/                # Uses firebase-bands service
    └── ImportExport/         # Uses all services
```

| Service File | Functions | Used By |
|---|---|---|
| `firebase-bands.js` | `getBands()`, `addBand()`, `setAllBands()`, `deleteBand()` | Bands page, ExportExamples, ImportExamples |
| `file-export.js` | `saveFileInFormat(format, data, fileName)` | ExportExamples |
| `file-import.js` | `importFileToInternalJson()` | ImportExamples |

---

## 📦 Third-Party Components

| Library | Purpose | Link |
|---|---|---|
| React Router DOM | Client-side routing (SPA navigation) | [react-router.com](https://reactrouter.com) |
| Leaflet + React Leaflet | Interactive map on the Contact page | [leafletjs.com](https://leafletjs.com) |
| Font Awesome (CDN) | Social media icons in the Footer | [fontawesome.com](https://fontawesome.com) |
| Google Fonts – Metal Mania | Decorative metal-style headings | [fonts.google.com](https://fonts.google.com/specimen/Metal+Mania) |
| Firebase | Realtime Database for data persistence | [firebase.google.com](https://firebase.google.com) |
| PapaParse | CSV parsing for import functionality | [papaparse.com](https://www.papaparse.com) |
| show-open-file-picker | File System Access API polyfill | [npm](https://www.npmjs.com/package/show-open-file-picker) |

---

## 🔗 Tutorial Links

These resources guided the development of this project:

- [React Router v7 Docs](https://reactrouter.com/home) — SPA routing setup
- [React Leaflet Docs](https://react-leaflet.js.org/) — integrating the interactive map
- [Vite Getting Started](https://vitejs.dev/guide/) — project scaffolding
- [Best README Template](https://github.com/othneildrew/Best-README-Template) — this README format
- [CSS Flexbox Guide – CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — responsive layout
- [Web image sizing guide – Shopify](https://www.shopify.com/es/blog/imagenes-para-web-tamano) — optimising image resolution

---

## 🎨 Design Inspiration

The UI was inspired by Figma community metal / dark-theme designs:

- **Figma Community** – [https://www.figma.com/community](https://www.figma.com/community)
- [25 fantastic footer examples](https://www.creativosonline.org/25-ejemplos-fantasticos-de-footers-en-diseno-web.html) — Footer design reference

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/RotaryFold/metal-legends-react.git
cd metal-legends-react/metal-legends
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

---

## 🔥 Firebase Hosting

> 🔗 **Live App:** [https://metal-legends.web.app](https://metal-legends.web.app)

To deploy:

```bash
npm run build
firebase deploy
```

---

## 📡 RSS Feed

The `/news` page features a **genuine local RSS feed** hosted at [/rss.xml](https://metal-legends.web.app/rss.xml).

> 📸 **RSS Reader Screenshot:**  
> ![RSS Feed Screenshot](https://raw.githubusercontent.com/RotaryFold/metal-legends-react/main/public/rss-preview.png)

---

## 👤 Author

**Joel** — [@RotaryFold](https://github.com/RotaryFold/metal-legends-react)

---

## 📝 License

Distributed under the MIT License.
