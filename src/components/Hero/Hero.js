import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SiLinkedin, SiTwitter, SiYoutube, SiInstagram, SiDiscord, SiFacebook, SiTelegram, SiMedium } from "react-icons/si";

const initData = {
    heading: "Light Fury",
    content: "The Light Fury is a powerful NFT Minting Service.",
    btn_1: "Mint",
    btn_2: "To Opensea Marketplace",
    itemImg: "/img/arrow.png",
}

class Hero extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section className="hero-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-7">
                            <h1 className="mt-4">{this.state.data.heading}</h1>
                            <p style={{ fontSize: "24px" }}>{this.state.data.content}</p>
                            {/* Buttons */}
                            <div className="button-group d-flex">
                                <button className="btn btn-bordered-white btn-background-gradient-sky" onClick={() => window.open('https://testnets.opensea.io/collection/the-light-fury')} ><p className="my-auto mx-1" style={{ fontSize: "14px" }}>Go To Opensea</p></button>
                            </div>
                            <div className="pt-3">
                                <button className='socialBtn' onClick={() => window.open('www.linkedin.com/in/the-light-fury')}><SiLinkedin /></button>
                                <button className='socialBtn' onClick={() => window.open('https://www.youtube.com/channel/UC6zOOPzcdhWhO0GLf5y5jMw')}><SiYoutube /></button>
                                <button className='socialBtn' onClick={() => window.open('https://twitter.com/TheLightFuryPr1')}><SiTwitter /></button>
                                <button className='socialBtn' onClick={() => window.open('https://www.instagram.com/thelightfuryproject/')}><SiInstagram /></button>
                                <button className='socialBtn' onClick={() => window.open('https://discord.gg/ErjBQjKq')}><SiDiscord /></button>
                                <button className='socialBtn' onClick={() => window.open('https://web.facebook.com/TheLightFuryProject')}><SiFacebook /></button>
                                <button className='socialBtn' onClick={() => window.open('https://t.me/thelightfuryproject')}><SiTelegram /></button>
                                <button className='socialBtn' onClick={() => window.open('https://thelightfury7111nft.medium.com/about')}><SiMedium /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;