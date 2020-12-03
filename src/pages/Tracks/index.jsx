import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "./../../services/api";

const Tracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect((token, lang) => {
    const parametros = getHashParams();
    var token = parametros.token;
    var lang = parametros.lang;

    if (lang !== "" && token !== "") {
      async function getTracksApiConnection(token, lang) {
        console.log("Estabelecendo conexão com o servidor...");

        // Conexão com o Backend via AXIOS
        await api
          .get(`/tracks?token=${token}&lang=${lang}`)
          .then((response) => {
            if (response.status === 200) {
              console.log("Conectado com sucesso!");
              setTracks(response.data);
            } else if (response.data === 500) {
              console.log("Erro ao consultar token, tente novamente!");
            }
          })
          .catch((error) => {
            console.log(error);
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

  return (
    <>
      {tracks.map((item) => {
        return (
          <p>
            {item.trackName} de {item.principalArtist}
          </p>
        );
      })}
    </>
  );
};

export default Tracks;
