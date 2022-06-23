import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const initData = {
    heading: "Future Plan Breakdown",
}

const datas = [
    {
        id: "1",
        img: "/img/feature-1.jpg",
        title: "Innovation",
        content: "With the Light Fury, digital art is essential. You will discover different way to use your collectible in the next phases."
    },
    {
        id: "2",
        img: "/img/feature-2.jpg",
        title: "Collection",
        content: "We encourage our community to share with ideas & be a integral part of the Light Fury’s growth."
    },
    {
        id: "3",
        img: "/img/feature-3.jpg",
        title: "Unique",
        content: "Once you mint a NFT from the Light Fury collection, you will be the only holder on this universe and beyond."
    },
    {
        id: "4",
        img: "/img/feature-4.jpg",
        title: "Community",
        content: "Be part of a fun pioneering community. Effective communication & common goals will lead to community success."
    },
    {
        id: "5",
        img: "/img/feature-5.jpg",
        title: "Long Term",
        content: "Don't get involved with the hype, choose consistency. The Light Fury project is designed to evolve and grow."
    }
]

class Feature extends Component {
    state = {
        data: {},
        datas: []
    }
    componentDidMount() {
        this.setState({
            data: initData,
            datas: datas
        })
    }
    render() {
        return (
            <section id="feature" className="feature-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <h2 className="mt-4">{this.state.data.heading}</h2>
                    </div>
                    <div className="row px-0 px-md-5">
                        {this.state.datas.map((item, idx) => {
                            return (
                                <div key={`fd_${idx}`} className="col-12 col-sm-6 col-md-4 py-3 px-4 text-center">
                                    <div className="card feature-card text-center">
                                        <img className="feature-image" src={item.img} alt="" />
                                        <h3 className="mb-0">{item.title}</h3>
                                        <p className="text-left" style={{ fontSize: "14px" }}>{item.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Feature;