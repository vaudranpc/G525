import React, {Component} from "react";
import logo from "../../asset/velo.png";


export default class Header extends Component {
    state = {}

    render() {
        return (
            <div className="header">
                <img className="logo" alt="le logo" src={logo}/>
                <div className="message bienvenue text-center">
                    <h1>Bienvenue à Vélovert</h1>
                </div>
            </div>
        );
    }
}

