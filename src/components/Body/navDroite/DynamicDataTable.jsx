import React from 'react';
import {ReactComponent as Marker} from '../../../asset/svg/location.svg'


const DynamicDataTable = (props) => {
    const {data = [], selectedItem, setSectionStatistique, setSectionMap} = props;

    let statistique = 'statistiques';
    let typeFontaine = "Fontaine à boire"

    return (
        <div className="App text-center overflow-auto h-50">
            <table className="table">
                {
                    selectedItem === "Compteurs" && (
                        <thead className='font-weight-bold sticky-top bg-light'>
                        <tr>
                            <td>ID</td>
                            <td>Nom</td>
                            <td>Statut</td>
                            <td>Annee</td>
                            <td>marker</td>
                            <td>statistiques</td>
                        </tr>
                        </thead>
                    )}
                {
                    selectedItem === "pointDinteret-fontaines" && (
                        <thead className='font-weight-bold sticky-top bg-light'>
                        <tr>
                            <td>Arrondissment</td>
                            <td>type</td>
                            <td>Nom Lieu</td>
                            <td>Addresse</td>
                            <td></td>
                        </tr>
                        </thead>
                    )}
                <tbody>
                {!data && (
                    <div>
                        Aucune donnée
                    </div>
                )}
                {!!data && selectedItem === "Compteurs" && data.map((value, index) =>
                    <tr key={index}>
                        <td>{value[0]}</td>
                        <td>{value[2]}</td>
                        <td>{value[3]}</td>
                        <td>{value[6]}</td>
                        <td><Marker/></td>
                        <td onClick={() => setSectionStatistique(value[0])}>{statistique}</td>
                    </tr>
                )}
                {!!data && selectedItem === "pointDinteret-fontaines" && data.map((value, index) =>
                    <tr key={index}>
                        <td>{value[1]}</td>
                        <td>{typeFontaine}</td>
                        <td>{value[2]}</td>
                        <td>{value[4]}</td>
                        <td onClick={() => setSectionMap(value[0])}><Marker/></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
};


export default DynamicDataTable;