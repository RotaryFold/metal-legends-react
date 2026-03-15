/**
 * NOTA PARA EL ESTUDIO DE JOEL:
 * Esta página simula un feed de noticias (RSS). 
 * Muestra cómo mapear un array de objetos para generar una cuadrícula de noticias.
 */
import "./News.css";

const RSS_URL = "/rss.xml";

const newsItems = [
  {
    id: "1",
    title: "Metallica Frontman James Hetfield Thinks Early Metallica Songs Were Too Long",
    excerpt:
      "James Hetfield has reflected on the length of Metallica's early material, saying that some of the songs were perhaps a bit longer than they needed to be.",
    date: "2025-03-10",
    category: "News",
    url: "https://www.blabbermouth.net/news/metallica-frontman-james-hetfield-thinks-early-metallica-songs-were-too-long/",
  },
  {
    id: "2",
    title: "Iron Maiden Announces 2025 'Run Of The Future Past' European Tour Dates",
    excerpt:
      "Iron Maiden will return to Europe in 2025 for a series of arena and festival shows under the 'Run Of The Future Past' banner.",
    date: "2025-03-05",
    category: "Tours",
    url: "https://www.blabbermouth.net/news/iron-maiden-announces-2025-run-of-the-future-past-shows/",
  },
  {
    id: "3",
    title: "Rob Halford Says Judas Priest Is Already Thinking About Follow-Up To 'Invincible Shield'",
    excerpt:
      "Judas Priest singer Rob Halford has confirmed that the band is already discussing the possibility of recording a follow-up to 'Invincible Shield'.",
    date: "2025-02-28",
    category: "Albums",
    url: "https://www.blabbermouth.net/news/rob-halford-says-judas-priest-is-already-thinking-about-follow-up-to-invincible-shield/",
  },
  {
    id: "4",
    title: "Kerry King On Slayer Reunion: 'It Will Not Lead To Recording New Music'",
    excerpt:
      "Kerry King has once again clarified that Slayer's upcoming reunion shows will not lead to the band recording new music or touring extensively.",
    date: "2025-02-20",
    category: "Rumors",
    url: "https://www.blabbermouth.net/news/kerry-king-on-slayer-reunion-it-will-not-lead-to-recording-new-music/",
  },
  {
    id: "5",
    title: "Metallica's '72 Seasons' Is No. 1 Metal Album Of 2023 On Blabbermouth.net",
    excerpt:
      "The results are in, and Metallica's latest studio effort has been voted the best metal album of the year by our readers.",
    date: "2025-02-15",
    category: "Reviews",
    url: "https://www.blabbermouth.net/news/metallicas-72-seasons-is-no-1-metal-album-of-2023/",
  },
  {
    id: "6",
    title: "Download 2025 Announces First Wave Of Bands",
    excerpt:
      "Download Festival has announced the first batch of bands for its 2025 edition, including major headliners.",
    date: "2025-01-30",
    category: "Festivals",
    url: "https://www.blabbermouth.net/news/download-2025-announces-first-wave-of-bands/",
  },
];

function News() {
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">Metal News</h2>

        <div className="rss-banner">
          <span className="rss-label">📡 RSS Feed</span>
          <p className="rss-description">
            Subscribe to our local RSS feed to stay updated with Metal Legends news.
          </p>
          <a
            href={RSS_URL}
            target="_blank"
            rel="noreferrer"
            className="rss-link"
          >
            🔗 metallegends.rss / Open RSS Feed
          </a>
        </div>

        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-card-header">
                <span className="news-category">{item.category}</span>
                <time className="news-date" dateTime={item.date}>
                  {new Date(item.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-excerpt">{item.excerpt}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="news-read-more"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
