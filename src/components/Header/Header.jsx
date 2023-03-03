import React from 'react';

// importing css
import './Header.css';

// importing images
import Image from '../../assets/images/header.png'

function Header(props) {
    return (
        <div>
            <img src={Image} alt= "img" className='-mt-1' />
        </div>
    );
}

export default Header;