import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "./../../services/api";

const Profile = () => {
  const [token, setToken] = useState("");
  const [lang, setLang] = useState("");
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
    const response = await api.get(`/tracks?token=${token}&lang=${lang}`).then(response => {
      if(response.status === 200){
        console.log("Conectado com sucesso!");
        console.log(response.data);
  
        // PARA ACESSAR CADA OBJETO E SUAS PROPRIEDADES:
        for(var i = 0; i < response.data.length; i++){
          var obj = response.data[i];
          
          console.log("------------------------------");
          console.log(obj["trackName"]);
          console.log(obj["principalArtist"]);
        }
  
        console.log("------------------------------");
      }
    }).catch(error => {
      console.log(error);
    });

    return response;
  }

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

  function handleSelectChange(event) {
    setLang(event.target.value);
  }

  return (
    <>
      <p>{lang}</p>
      <select onChange={handleSelectChange}>
        <option value="">Selecione uma linguagem</option>
        <option value="pt">Português</option>
        <option value="en">Inglês</option>
      </select>
    </>
  );
};

export default Profile;
