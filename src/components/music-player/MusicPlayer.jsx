import { useState } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="container" style={{ paddingTop: 0 }}>
      {!isPlaying ? (
        <button className="btn-secondary" type="button" onClick={() => setIsPlaying(true)}>
          Reproducir música
        </button>
      ) : (
        <div>
          <div style={{ marginTop: 10, color: "#bdbdbd" }}>
            Playing (hidden YouTube player)...
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<iframe width="0" height="0" src="https://www.youtube.com/embed/FDNiE5CKuSw?autoplay=1&loop=1&playlist=FDNiE5CKuSw" allow="autoplay" frameborder="0"></iframe>',
            }}
          />
        </div>
      )}
    </section>
  );
}

export default MusicPlayer;
