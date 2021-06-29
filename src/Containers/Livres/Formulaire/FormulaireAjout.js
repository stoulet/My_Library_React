import React, { Component } from "react";
import Bouton from "../../../Components/Bouton/Bouton"

class FormulaireAjout extends Component {

    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: ""
    }

    handleValidationForm = (event) => {
        event.preventDefault();
        this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
        this.setState({
            titreSaisi: "",
            auteurSaisi: "",
            nbPagesSaisi: ""
        })
    }

    render() {
        return (
            <>
                <h2 className="text-center text-white bg-primary" style={{ fontFamily: 'Sigmar One' }}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="titre" className="form-label">Titre :</label>
                        <input type="text"
                            value={this.state.titreSaisi}
                            onChange={(event) => this.setState({ titreSaisi: event.target.value })}
                            className="form-control" id="titre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur :</label>
                        <input type="text"
                            value={this.state.auteurSaisi}
                            onChange={(event) => this.setState({ auteurSaisi: event.target.value })}
                            className="form-control" id="auteur" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label" >Nombres de pages : </label>
                        <input type="text"
                            value={this.state.nbPagesSaisi}
                            onChange={(event) => this.setState({ nbPagesSaisi: event.target.value })} className="form-control" id="nbPages" />
                    </div>
                    <div className="mb-3">
                        <Bouton typeBtn="btn-primary" clic={this.handleValidationForm} >Valider</Bouton>
                    </div>
                </form>
            </>
        );
    }
}

export default FormulaireAjout;