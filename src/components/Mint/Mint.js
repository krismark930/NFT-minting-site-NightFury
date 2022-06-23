import React, { Component, useState, useEffect } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import BeatLoader from "react-spinners/BeatLoader";
import { useWeb3React } from '@web3-react/core';
import 'react-circular-progressbar/dist/styles.css';
import Fury from '../../assets/imgs/fury.png';
import Web3 from 'web3';
import ABI from '../../utility/connectors/ABI.json';

const CONTRACT_ADDRESS = '0xD0bc517f01da4c0c88B10877530d4F1B41416619';
var web3, contract;

function Mint() {

    const [data, setData] = useState({
        heading: "Our Light Fury",
        headerImg1: "/img/about-1.png",
        headerImg2: "/img/about-2.png",
        contentimg1: "/img/about-c1.png",
        contentimg2: "/img/about-gif.gif",
        subtitle: "Welcome to the Light Fury"
    });
    const { active, account, library, connector, activate, deactivate, error, chainId } = useWeb3React();
    const [amount, setAmount] = useState(1);
    const [soldOut, setSoldOut] = useState(0);
    const [totalSupply, setTotalSupply] = useState(2112);
    const [loading, setLoading] = useState(false);
    const [owner, setOwner] = useState('');
    const [fee, setFee] = useState(0.2);

    useEffect(() => {
        (async () => {
            web3 = await new Web3(window.ethereum);
            contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
            const tokenId = contract.methods.getCurrentTokenId().call()
                .then((res) => {
                    setSoldOut(Number(res) - 1);
                })
                .catch((err) => {
                    console.log('err', err);
                });
            const mintingFee = contract.methods.getMintingFeeForEth().call()
                .then((res) => {
                    setFee(web3.utils.fromWei(res.toString(), 'ether'));
                })
                .catch((err) => {
                    console.log(err);
                });
            const owner = contract.methods.getOwner().call()
                .then((res) => {
                    setOwner(res);
                }).catch((err) => {
                    console.log('err', err);
                });
        })();
    }, []);

    const mintNFT = async () => {

        if (owner === account) {
            setLoading(true);
            contract.methods.mintTokenForTeam(amount).send({
                from: account
            }).then((res) => {
                console.log(res);
                setLoading(false);
                setSoldOut(Number(soldOut) + Number(amount));
                setAmount(1);
            }).catch((err) => {
                console.log(err);
                setLoading(false);
            });
        } else if (owner !== account) {
            setLoading(true);
            contract.methods.mintTokenForUsers(amount).send({
                from: account,
                value: web3.utils.toWei((amount * fee).toString())
            }).then((res) => {
                console.log(res);
                setLoading(false);
                setSoldOut(Number(soldOut) + Number(amount));
                setAmount(1);
            }).catch((err) => {
                console.log(err);
                setLoading(false);
            });
        }

    };

    return (
        <section id="about" className="about-section pt-0">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <img className="about-header-img" src={data.headerImg1} alt="" style={{ zIndex: '999' }} />
                    <img className="mr-1 d-none d-md-block h-100" src={data.headerImg2} alt="" />
                    <h2 className="mt-4">{data.heading}</h2>
                </div>
                <div className="row align-items-center">
                    <div className="row col-12 col-md-6 align-items-center">
                        <div className="col-md-3 d-none d-md-block">
                            {/* <img className="" src={data.contentimg1} alt="" /> */}
                        </div>
                        <div className="col-md-9">
                            <div className='col-12'>
                                <CircularProgressbarWithChildren value={soldOut * 100 / totalSupply}>
                                    <img style={{ width: '50%', marginTop: -5 }} src={Fury} alt="doge" />
                                    <div style={{ fontSize: 25, marginTop: -5, marginTop: '10px' }}>
                                        <strong style={{ color: '#00C9A7' }}>{soldOut} / {totalSupply}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className='col-12 pt-5'>
                                {
                                    active && (
                                        <>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon1">{owner === account ? 'Owner' : 'User'}</InputGroup.Text>
                                                <FormControl
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    type="number"
                                                    min={1}
                                                    max={10}
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                    disabled={loading}
                                                />
                                            </InputGroup>
                                            <button className='btn btn-bordered-white btn-background-gradient' onClick={mintNFT} disabled={loading}>
                                                {
                                                    loading ? (
                                                        <>
                                                            <BeatLoader loading={loading} size={15} color='white' margin={2} />
                                                        </>
                                                    ) : (
                                                        'Mint NFTs!'
                                                    )
                                                }
                                            </button>

                                        </>

                                    )
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <img className="mt-3 mt-md-0 about-gif-image" src={data.contentimg2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mint