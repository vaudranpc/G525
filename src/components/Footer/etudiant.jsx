import React from "react";


const Etudiant = (props) => {

    const {nom, courriel} = props;

    return (
        <div className="etudiant">
            <div className="nomGroupe">
                <span className="nom">{nom}</span>
            </div>
            <div className="emailGroup">
                <span className="courriel">: {courriel}</span>
            </div>
        </div>
    );
}

export default Etudiant;