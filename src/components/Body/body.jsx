import React from 'react';
import NavDroite from './navDroite/navDroite';
import NavGauche from './navGauche/navGauche';
import {useState} from 'react';


const Body = (props) => {
    const {compteur = []} = props;
    const [selectedItem, setSelectedItem] = useState("");
    const [data, setData] = useState([]);

    const onClick = (section) => () => {
        if (section === "Compteurs") {
            setData(compteur.compteurs)
            setSelectedItem(section);
        }

        if (section.split("-")[0] === "pointDinteret") {
            setSelectedItem(section);
            if (section === "pointDinteret-fontaines") {
                setData(compteur.fontaines)
            }
        }
    }

    return (
        <div className='bodyClass'>
            <NavGauche
                selectedItem={selectedItem}
                onSectionClick={onClick}
            />
            <NavDroite className='h-75'
                       compteur={compteur}
                       data={data}
                       selectedItem={selectedItem}/>
        </div>
    );
};

export default Body;