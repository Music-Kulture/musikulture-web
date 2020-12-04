import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "./../../services/api";
import "./profile.css";

const Profile = () => {
  const [token, setToken] = useState("");
  const [lang, setLang] = useState("");
  const [url, setUrl] = useState("");
  const [tracks, setTracks] = useState([{}]);

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

  return (
    <>
      <div className="prof container-fluid">
        <p>{lang}</p>
        <div className="row col-11">
          <div className="select">
              <select onChange={handleSelectChange} id="idiomas" className="form-control-lg" >
                <option key='blankChoice' hidden value> Linguagens disponíveis</option>
                <option value="pt">Português</option>
                <option value="en">Inglês</option>
              </select>
          </div>

          <a href={url} class="btn2 btn-info btn-lg" type="button">Novas músicas</a>
        </div>

        {/* {tracks.map((item) => {
          return (
            <p>
              {item.trackName} - {item.principalArtist}
            </p>
          );
        })} */}
      </div>
    </>
  );
};

export default Profile;
