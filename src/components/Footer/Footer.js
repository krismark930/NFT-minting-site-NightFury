import React, { Component } from 'react';

class Footer extends Component {    
    render() {
        return (
            <footer className="footer-area">                                
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center text-center py-4">                                    
                                    <h5>© Copyright deFIBOT. All Rights Reserved to deFibots</h5>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;