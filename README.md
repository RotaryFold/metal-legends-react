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
| `/bands` | Grid of famous metal bands with modal detail view |
| `/concerts` | Full CRUD: add, edit, delete and list upcoming concerts |
| `/gallery` | Photo mosaic gallery of legendary metal performances |
| `/forum` | Community forum with full CRUD + filter by category and text search |
| `/news` | Metal news feed linked to a live RSS source |
| `/contact` | Contact form + interactive Leaflet map |

### Home Page Description

The home page greets the user with a full-width hero banner showcasing a live concert photograph, a call-to-action button and an animated genre filter. Using `useState`, the user can toggle between *All Genres*, *Thrash Metal* and *Heavy Metal* — the `FeaturedBands` child component receives the selected genre as a prop and renders only matching bands. Below the filter a photo gallery displays ten iconic metal performance shots in a responsive grid.

---

## 📦 Third-Party Components

| Library | Purpose | Link |
|---|---|---|
| React Router DOM | Client-side routing (SPA navigation) | [react-router.com](https://reactrouter.com) |
| Leaflet + React Leaflet | Interactive map on the Contact page | [leafletjs.com](https://leafletjs.com) |
| Font Awesome (CDN) | Social media icons in the Footer | [fontawesome.com](https://fontawesome.com) |
| Google Fonts – Metal Mania | Decorative metal-style headings | [fonts.google.com](https://fonts.google.com/specimen/Metal+Mania) |

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

The `/news` page links to a live heavy metal RSS feed from [Blabbermouth](https://www.blabbermouth.net/rss.aspx).

> 📸 **RSS Reader Screenshot:**  
> ![RSS Feed Screenshot](https://raw.githubusercontent.com/RotaryFold/metal-legends-react/main/public/rss-preview.png)

---

## 👤 Author

**Joel** — [@RotaryFold](https://github.com/RotaryFold/metal-legends-react)

---

## 📝 License

Distributed under the MIT License.
