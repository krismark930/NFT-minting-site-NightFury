import React from 'react';
import { Link } from 'react-router-dom';

const Scrollup = () => {
    return (
        <div id="scroll-to-top" className="scroll-to-top">
            <Link to="#header" className="smooth-anchor">
                <i className="fas fa-arrow-up" />
            </Link>
        </div>
    );
};

export default Scrollup;