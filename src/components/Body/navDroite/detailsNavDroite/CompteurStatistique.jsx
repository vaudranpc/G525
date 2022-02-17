import React from 'react';

const CompteurStatistique = (props) => {
    const {data = [], selectedItem} = props;

    return (
        <div>
            <h4 className='mt-4'>Statistiques des compteurs</h4>
            <div className="de">
                <span>Plages de dates</span> <br/>
                <span>De: [Annee][Mois][Heure]</span> <br/>
                <span>À: [Annee][Mois][Heure]</span> <br/>
            </div>
        </div>
    )
}

export default CompteurStatistique;