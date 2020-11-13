import React from "react";
import api from './../../services/api';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const parametros = this.getHashParams();
    const token = parametros.access_token;
    console.log(token);
    this.state = {
      token: parametros.access_token
    };
    this.teste = 'this is teste';
  }

  // getUserData() {
  //   // setLoading(true);
  //   api.get("/tracks",
  //       {
  //         token
  //           //options we want to pass to get:
  //           // cancelToken: new axios.CancelToken(c => cancelOldRequest = c)
  //       }).then(response => {
  //       // console.log(response.data.results);
  //       // setLoading(false);
  //       // console.log(response.data.results);
  //       // const pokemonData = response.data.results;
  //       // setPokemonList(pokemonData);
  //       // setfilteredPokemons(pokemonData);
  //   });
  //   // cancel previous request every time we make a new one, making sure the application never loads old data
  //   // return () => cancelOldRequest();
  // }

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
      <p>{this.state.token}</p>
    );
  }
}

export default Profile;
