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
    console.log(token);
  }, []);

  useEffect(() => {

  }, [])

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
    console.log(event.target);
    setLang(event.target);
    console.log(lang);
  }

    return (
      // <p>{token}</p>
      <select onChange={handleSelectChange}>
        <option value="0">Selecione uma linguagem</option>
        <option value="1">pt</option>
        <option value="2">en</option>
      </select>
    );
}

export default Profile;
