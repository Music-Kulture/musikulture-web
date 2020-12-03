import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "./../../services/api";
import "./tracks.css";

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect((token, lang) => {
    const parametros = getHashParams();
    var token = parametros.token;
    var lang = parametros.lang;

    if (lang !== "" && token !== "") {
      setLoading(true);

      async function getTracksApiConnection(token, lang) {
        console.log("Estabelecendo conexão com o servidor...");
        // Conexão com o Backend via AXIOS
        await api
          .get(`/tracks?token=${token}&lang=${lang}`)
          .then((response) => {
            if (response.status === 200) {
              console.log("Conectado com sucesso!");
              setTracks(response.data);
              setLoading(false);
            } else if (response.data === 500) {
              console.log("Erro ao consultar token, tente novamente!");
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Tente de novo.");
          });
      }

      getTracksApiConnection(token, lang);
    }
  }, []);

  function getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  if (loading) {
    return (
      <div className="colour-bg">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="colour-bg">
        <h1>Tracks sugeridas:</h1>
        {tracks.map((item) => {
          var url = `https://open.spotify.com/track/${item.spotifyTrackId}`
          return (
            <>
              <p>
                {item.trackName} de {item.principalArtist}
                <a target="_blank" href={url}>Abrir no Spotify</a>
              </p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Tracks;
