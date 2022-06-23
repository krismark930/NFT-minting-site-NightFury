import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SiSkype, SiLinkedin, SiTwitter } from "react-icons/si";
import ReactCountryFlag from 'react-country-flag';

const initData = {
    heading: "Our Team",
    sub_title: "The Light Fury is created by a powerful team of so many Enterpreneurs, Blockchain experts, Marketing gurus, and Artists. We are committed to delivering a cutting-edge experience and making this project a success."
}

const datas = [
    {
        img: "/img/team-1.jpg",
        name: "Tiago Ramos",
        job: "Cheif Executive Officer",
        code: 'br',
        country: 'Brazil'
    },
    {
        img: "/img/team-2.jpg",
        name: "Artem Pobedennyi",
        job: "Cheif Technical Officer(CTO)",
        code: 'ru',
        country: 'Russia'
    },
    {
        img: "/img/team-4.jpg",
        name: "Tanaka Kentaro",
        job: "Project Manager(PM)",
        code: 'jp',
        country: 'Japan'
    },
    {
        img: "/img/team-3.jpg",
        name: "Yekaterina",
        job: "3D Artist",
        code: 'ru',
        country: 'Russia'
    },
    {
        img: "/img/team-5.jpg",
        name: "Ab Faruki",
        job: "UI Designer",
        code: 'bd',
        country: 'Bangladesh'
    },
    {
        img: "/img/team-6.jpg",
        name: "Ashikur Rahman",
        job: "Marketing Manager",
        code: "bd",
        country: "Bangladesh"
    }
]

class Team extends Component {
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
            <section id="team" className="team-section pt-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-8 m-auto text-center">
                            <h2 className="mt-4">{this.state.data.heading}</h2>
                            <p>{this.state.data.sub_title}</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        {this.state.datas.map((data, index) => {
                            return (
                                <div key={index} className="col-12 col-sm-6 col-md-4 py-3 px-4">
                                    <div className="row align-items-center">
                                        <div className="col-11">
                                            <img src={data.img} alt="" />

                                        </div>
                                        {/* <div className="col-12 my-auto pt-3">
                                            <div className="row">
                                                <div className="col-2">
                                                    <SiSkype />
                                                </div>
                                                <div className="col-2">
                                                    <SiLinkedin />
                                                </div>
                                                <div className='col-2'>
                                                    <SiTwitter />
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <h3 className="mb-2 px-4">{data.name} <ReactCountryFlag countryCode={data.code} svg style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                        title={data.country} /></h3>

                                    <p className="mt-0 px-4">{data.job}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;