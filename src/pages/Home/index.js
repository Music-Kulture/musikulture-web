import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    const parametros = this.getHashParams();
    const token = parametros.access_token;
    console.log(token)
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  render() {
    return (
      <div className="Home">
        <button>
          <a href="http://localhost:8888">Logar com Spotify</a>
        </button>
      </div>
    );
  }
}

export default Home;
