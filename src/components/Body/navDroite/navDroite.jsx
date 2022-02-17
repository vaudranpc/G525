import React, {useState, useEffect} from 'react';


import DynamicDataTable from './DynamicDataTable';
import CompteurStatistique from './detailsNavDroite/CompteurStatistique';
import FontaineCarte from './detailsNavDroite/FontaineCarte';

const NavDroite = (props) => {

    const {data = [], selectedItem} = props;

    const [selectTri, setSelectTri] = useState("default");
    const [sectionStatistique, setSectionStatistique] = useState("");

    const [sectionMap, setSectionMap] = useState("")
    useEffect(() => {
        if (selectedItem.split("-")[0] === "pointDinteret") {
            setSectionStatistique("");
            setSectionMap("");
        }

        if (selectedItem !== "pointDinteret-fontaines") {
            setSectionMap("");
        }


    }, [selectedItem])
    const transFormData = selectTri !== "default" ? data.sort((a, b) => {

        const selectriInt = parseInt(selectTri);

        if (selectriInt === 2 || selectriInt === 3) {
            return (a[selectriInt]?.localeCompare(b[selectriInt], 'en', {numeric: true}));
        }
        return (a[selectriInt] - b[selectriInt])
    }) : data;


    const onSelect = (event) => {
        setSelectTri(event.target.value);
    }

    const getTitle = () => {
        if (selectedItem === "Compteurs") {
            return "Liste des compteurs"
        } else if (selectedItem === "pointDinteret-fontaines") {
            return "Liste des fontaines à boire"
        } else if (selectedItem === "pointDinteret-reparation") {
            return "pas de données"
        } else if (selectedItem === "pointDinteret-ajouter") {
            return "pas de données"
        }
    }

    return (
        <div className="divComptage d-flex flex-column">
            <div className="d-flex  align-items-center justify-content-around">
                <h2 className='libComptage'> {getTitle()} </h2>
                {selectedItem === "Compteurs" && (
                    <div>
                        <h6>Trier par :</h6>
                        <select onChange={onSelect} value={selectTri}>
                            <option key="default"></option>
                            <option value="0">Id</option>
                            <option value="2">Nom</option>
                            <option value="3">Statut</option>
                            <option value="6">Année Implemente</option>
                        </select>
                    </div>
                )}
            </div>
            <div className="w-75  h-75 m-4">
                <DynamicDataTable
                    data={transFormData}
                    selectedItem={selectedItem}
                    setSectionStatistique={setSectionStatistique}
                    setSectionMap={setSectionMap}
                />
                {sectionStatistique !== "" &&
                    <CompteurStatistique/>
                }
                {sectionMap !== "" &&
                    <FontaineCarte/>
                }
            </div>
        </div>
    );
};


export default NavDroite;
