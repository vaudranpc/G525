import React from "react";
import Etudiant from "./etudiant";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footerGauche"><h4>Équipe 3</h4></div>
            <div className="footerDroit">
                <div className="infosEquipe">
                    <Etudiant
                        nom="Anhe Pascal Anhe "
                        courriel="anhe-pascal.anhe.1@ens.etsmtl.ca"
                    />
                    <Etudiant
                        nom="Rodrigue Kouadio Jean Romeo"
                        courriel="rodrigue-jean-romeo.kouadio.1@ens.etsmtl.ca"
                    />
                    <Etudiant
                        nom="Ramatou Sourabié"
                        courriel="ramatou.sourabie.1@ens.etsmtl.ca"
                    />
                    <Etudiant
                        nom="Charles-André Flamand"
                        courriel="charles-andre.flamand.1@ens.etsmtl.ca"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;