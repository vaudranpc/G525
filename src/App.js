import Header from './components/Header/header';
import Body from './components/Body/body'
import './css/App.css';
import Footer from './components/Footer/footer';
import {useEffect, useState} from 'react';
import {getDataCompteur} from './methods/csvParser'


function App() {

    const [compteur, setCompteur] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataCompteur();
            setCompteur(result);

        };

        fetchData();
    }, []);
    return (
        <div className="App">
            <Header/>
            <div>
                <Body compteur={compteur}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
