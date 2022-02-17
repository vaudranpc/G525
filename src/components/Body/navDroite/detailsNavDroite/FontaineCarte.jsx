
import React from 'react';
import logo from '../../../../asset/mapdata.png'

const FontaineCarte = (props) => {
    return (
        <div className="d-flex flex-row">
            <h4 className='mt-4'> <img className="logo" alt="le logo" src={logo} /></h4>
            <div className="de">
                <span> <b>Details</b></span> <br />
                <span>Proximité: </span> <br />
                <span>Remarques: Accès restreint</span> <br />
            </div>
        </div>
    )
}

export default FontaineCarte;