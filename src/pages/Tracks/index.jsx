import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "./../../services/api";

const Tracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const parametros = getHashParams();
    setToken(parametros.access_token);
  }, []);

  useEffect(() => {
    if (lang !== "" && token !== "") {
      getTracksApiConnection(token, lang);
    }
  }, [token, lang]);

  async function getTracksApiConnection(token, lang){
    console.log("Estabelecendo conexão com o servidor...");

    // Conexão com o Backend via AXIOS
    await api.get(`/tracks?token=${token}&lang=${lang}`).then(response => {
      if(response.status === 200){
        console.log("Conectado com sucesso!");
        
        var list = response.data;  
        console.log(list); 
        setTracks(list);
      }
    }).catch(error => {
      console.log(error);
    });

    console.log(tracks);
  }

  return (
    <>
    </>
  );
};

export default Tracks;