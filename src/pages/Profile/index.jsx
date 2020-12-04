import React from "react";
import { useState,  useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import "./profile.css";

const Profile = () => {
  const [token, setToken] = useState("");
  const [lang, setLang] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const parametros = getHashParams();
    setToken(parametros.access_token);
  }, []);

  useEffect(() => {
    const redirectURL = `/tracks/#token=${token}&lang=${lang}`;
    setUrl(redirectURL);
  }, [lang])

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

  const history = useHistory();
  return (
    <>
      <div className="background">
      <p>{lang}</p>
    
      <select onChange={handleSelectChange} className="select form-control-lg">
        <option value="">Linguagens disponíveis</option>
        <option value="pt">Português</option>
        <option value="en">Inglês</option>
      </select>

      <Link 
        to={url} 
        className="btn2 btn-info btn-lg"
        onClick={() => history.push("/profile", { from: "Tracks" })}
      >Novas músicas</Link>

      </div>
    </>
  );
};

export default Profile;
