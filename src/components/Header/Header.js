import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar as Nb, Container, Nav, Image, Button
} from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../utility/connectors/WalletConnector';

function Header() {
    const { active, account, library, connector, activate, deactivate, error, chainId } = useWeb3React();
    const handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector(".navbar").className = "navbar navbar-expand scroll";
        } else {
            document.querySelector(".navbar").className = "navbar navbar-expand";
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (typeof window.ethereum === 'undefined') {
            alert('Please install Metamask Chrome Extension.');
            window.location.href = 'https://metamask.io/';
        }
        if (chainId !== 137) {
            alert('Please connect your wallet to Polygon(matic)');
        }
    }, []);

    const connectMetamask = async () => {
        try {
            await activate(injected);
        } catch (err) {
            console.log(`<:::Wallet Connect Failed Error:::>`, err);
        }
    };

    return (
        <div>
            <header id="header">
                {/* Navbar */}
                <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                    <div className="container header">
                        {/* Navbar Brand*/}
                        <Link className="navbar-brand" to="/">
                            <img className="navbar-brand-sticky" src="img/logo.png" alt="sticky brand-logo" />
                        </Link>
                        <div className="ml-auto" />
                        {/* Navbar */}
                        <ul className="navbar-nav items mx-auto">
                            <li className="nav-item">
                                <Nav.Link href="#about" className="nav-link">Mint</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#feature" className="nav-link">Features</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#team" className="nav-link">Team</Nav.Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Nav.Link href="#faq" className="nav-link">Faq</Nav.Link>
                            </li>
                        </ul>
                        {/* Navbar Toggler */}
                        <ul className="navbar-nav toggle">
                            <li className="nav-item">
                                <Link to="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                    <i className="fas fa-bars toggle-icon m-0" />
                                </Link>
                            </li>
                        </ul>
                        {/* Navbar Action Button */}
                        <ul className="navbar-nav">
                            <li className="nav-item ml-3">
                                <button className="btn ml-lg-auto btn-bordered-white btn-background-gradient" onClick={connectMetamask}>{active ? `${account.substring(0, 6)}...${account.substring(account.length - 5, account.length)}` : 'Connect Wallet'}</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header