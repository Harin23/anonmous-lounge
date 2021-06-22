const Soundcloud = () => {
    return (
      <div>
        <iframe
          title="soundcloud"
          width="100%"
          height="300px"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1275976255&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
        ></iframe>
        <div style={{
        fontSize: "10px", 
        color: "#cccccc",
        lineBreak: "anywhere",
        wordBreak: "normal",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
        fontWeight: "100"
        }}>
          <a
            href="https://soundcloud.com/bulletproof24"
            title="harin.24"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#cccccc", textDecoration: "none"}}
          >
            harin.24
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/bulletproof24/sets/loungewebapp"
            title="Lounge"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#cccccc", textDecoration: "none"}}
          >
            Lounge
          </a>
        </div>
      </div>
    );
}
 
export default Soundcloud;