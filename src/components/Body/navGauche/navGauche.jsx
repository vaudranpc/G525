import React, {useSate} from 'react';


const NavGauche = (props) => {
    const {onSectionClick, selectedItem} = props;
    const isSectionPointInteret = selectedItem.split("-")[0] === "pointDinteret";
    // "pointDinteret-"
    // "pointDinteret-Fontaines"
    // "pointDinteret-reparation"
    //
    return (
        <div className='NavGaucheClass'>
            <button className={selectedItem === "Compteurs" ? 'btn-active' : "btn"}
                    onClick={onSectionClick("Compteurs")}>
                Comptages de Velos
            </button>
            <button className={isSectionPointInteret ? 'btn-active' : "btn"} onClick={onSectionClick("pointDinteret-")}>
                Points d'interet
            </button>
            {isSectionPointInteret && (
                <ul>
                    <li onClick={onSectionClick("pointDinteret-fontaines")}>Fontaines à boire</li>
                    <li onClick={onSectionClick("pointDinteret-reparation")}>reparation velo</li>
                    <li onClick={onSectionClick("pointDinteret-ajouter")}>ajouter un point d'interet</li>
                </ul>
            )}
        </div>
    );
};

export default NavGauche;
