import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const initData = {
    heading: "Our NFT Art Traits",
    content: "Our Light furies consist of 8 traits like background, body, eyes, face, necklace, pattern, tail and wings with various rarities.",
    btnText: "Register for parsale",
    img: "/img/room_hover.png"
}

const data = [
    {
        id: "1",
        img: "/img/0.jpg",
    },
    {
        id: "2",
        img: "/img/1.jpg",
    },
    {
        id: "3",
        img: "/img/2.jpg",
    },
    {
        id: "4",
        img: "/img/3.jpg",
    },
    {
        id: "5",
        img: "/img/4.jpg",
    },
    {
        id: "6",
        img: "/img/5.jpg",
    },
    {
        id: "7",
        img: "/img/6.jpg",
    }
]

class Room extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount() {
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="room-auctions-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 mx-auto">
                            {/* Intro */}
                            <div className="text-center">
                                <h2 className="mt-3 mb-2">{this.state.initData.heading}</h2>
                                <p>{this.state.initData.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="auctions-slides">
                        <div className="swiper-container slider-mid items">
                            <div className="swiper-wrapper">
                                {/* Single Slide */}
                                {this.state.data.map((item, idx) => {
                                    return (
                                        <div key={`auc_${idx}`} className="swiper-slide item">
                                            <Link to="#">
                                                <div className="card room-card text-center">
                                                    <div className="image-over">
                                                        <div className="room-middle">
                                                            <div className="room-middle-content">
                                                                <img src={this.state.initData.img} alt="" />
                                                                <div className="room-text">Learn More</div>
                                                            </div>
                                                        </div>
                                                        <img className="w-100" src={item.img} alt="" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Room;