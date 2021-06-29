import React, { Component } from "react";
import TitreH1 from "./Components/Titres/TitreH1";
import Livres from "./Containers/Livres/Livres";
import Bouton from "./Components/Bouton/Bouton";

class App extends Component {

  state = {
    ajoutLivre: false
  }

  ajoutLivreHandler = () => {
    this.setState((oldState, props) => {
      return { ajoutLivre: !oldState.ajoutLivre }
    });
  }

  render() {
    return (
      <div className="container">
        <TitreH1>Page listant les livres</TitreH1>
        <Livres ajoutLivre={this.state.ajoutLivre} fermerAjoutLivre={() => this.setState({ ajoutLivre: false })} />
        <Bouton typeBtn="btn-success w-100" clic={this.ajoutLivreHandler}>
          {!this.state.ajoutLivre ? "Ajouter" : "Fermer l'ajout"}</Bouton>
      </div>

    );
  }
}

export default App;
