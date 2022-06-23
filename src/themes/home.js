import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Mint from '../components/Mint/Mint';
import Room from '../components/Room/Room';
import Feature from '../components/Feature/Feature';
import Team from '../components/Team/Team';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Faq from '../components/Faq/Faq';
// web3 Provider
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
}

class Home extends Component {
    render() {
        return (
            <Web3ReactProvider getLibrary={getLibrary}>
                <div className="main">
                    <Header />
                    <Hero />
                    <Mint />
                    <Room />
                    <Feature />
                    <Team />
                    <Faq />
                    <Footer />
                    <ModalSearch />
                    <ModalMenu />
                    <Scrollup />
                </div>
            </Web3ReactProvider>
        );
    }
}

export default Home;