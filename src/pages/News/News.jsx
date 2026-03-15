import "./News.css";

const RSS_URL = "https://www.blabbermouth.net/rss.aspx";

const newsItems = [
  {
    id: "1",
    title: "Metallica Announces Surprise Live Stream Event",
    excerpt:
      "Metallica will broadcast a one-time live performance from their private studio on March 22nd, free for all fans worldwide.",
    date: "2025-03-10",
    category: "News",
    url: "https://www.blabbermouth.net",
  },
  {
    id: "2",
    title: "Iron Maiden's 'The Future Past' Tour Sets New Records",
    excerpt:
      "The British legends have sold out 42 consecutive arena shows across Europe, smashing their own 2019 record.",
    date: "2025-03-05",
    category: "Tours",
    url: "https://www.blabbermouth.net",
  },
  {
    id: "3",
    title: "Judas Priest Working on Follow-up to 'Invincible Shield'",
    excerpt:
      "Rob Halford confirms the band is already writing new material: 'The ideas are flowing and they are brutal.'",
    date: "2025-02-28",
    category: "Albums",
    url: "https://www.blabbermouth.net",
  },
  {
    id: "4",
    title: "Slayer Possible Reunion in 2026 — Kerry King Speaks Out",
    excerpt:
      "In a recent interview Kerry King did not rule out a special reunion set under the Slayer banner for their 45th anniversary.",
    date: "2025-02-20",
    category: "Rumors",
    url: "https://www.blabbermouth.net",
  },
  {
    id: "5",
    title: "Top 10 Metal Albums of 2025 So Far",
    excerpt:
      "From black metal newcomers to veteran thrashers, here are the ten releases that dominated the first quarter of 2025.",
    date: "2025-02-15",
    category: "Reviews",
    url: "https://www.blabbermouth.net",
  },
  {
    id: "6",
    title: "Download Festival 2025 Full Lineup Revealed",
    excerpt:
      "Metallica, Bring Me the Horizon and Ghost headline this year's edition at Donington Park. Over 100 bands confirmed.",
    date: "2025-01-30",
    category: "Festivals",
    url: "https://www.blabbermouth.net",
  },
];

function News() {
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">Metal News</h2>

        <div className="rss-banner">
          <span className="rss-label">📡 Live RSS Feed</span>
          <p className="rss-description">
            Stay up to date with the latest heavy metal news from around the
            world. Subscribe to our live feed powerd by Blabbermouth:
          </p>
          <a
            href={RSS_URL}
            target="_blank"
            rel="noreferrer"
            className="rss-link"
          >
            🔗 metallegends.rss / Subscribe via Blabbermouth RSS
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
