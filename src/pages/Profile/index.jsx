import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from './../../services/api';

const Profile = () => {

  const [token, setToken] = useState('');
  const [lang, setLang] = useState('');

  useEffect(() => {
    const parametros = getHashParams();
    setToken(parametros.access_token);
  }, []);

  useEffect(() => {
    console.log(lang)
    if (lang !== '' && token !== '') {
      api.get("/tracks", 
      {
        token,
        lang,
      }).then(
        console.log('conectou')
      )
    }
  }, [token, lang]);

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
}

export default Profile;
