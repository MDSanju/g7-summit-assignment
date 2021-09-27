import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            {/* website name */}
            <h1 className="website-name"><span style={{color: 'orangered'}}>G7</span> SUMMIT</h1>
            {/* header description */}
            <p>The Group of Seven (G-7) is an intergovernmental organization that meets periodically to address international economic and monetary issues. G-7 countries consist of the U.S., U.K., France, Germany, Italy, Canada, and Japan.</p>
            {/* targeted donation */}
            <h1>Total Donation Budget: 100K</h1>
        </div>
    );
};

export default Header;