import React, { useState } from 'react';
import '../../styles/NavBar.css';
import styled, { createGlobalStyle } from 'styled-components';

import { Link } from "gatsby"

const Global = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`

const MenuIcon = styled.button`
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    div {
        width: 1.5rem;
        height: 0.2rem;
        background: black;
        border-radius: 5px;
        transform-origin: 1px;
        transition: opacity 300ms, transform 300ms;

        :first-child {
            transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({nav}) => nav ? '0' : '1'}
        }

        :nth-child(3) {
            transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

const MenuLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 10%;
    background: rgba(115,149,174,0.75);
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 300ms;
    transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};
    @media only screen and (max-width:1400px){
        width: 15%
    }
    @media only screen and (max-width:700px){
        width: 20%
    }
    z-index: 99;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        padding-top: 60px;
    }

    li {
        margin-top: 2rem;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
        transition: color 300ms;

        :hover {
            color: white;
        }
    }
`

const NavBar = () => {
    let logo = require('../../images/brewcalclogo.png');

    const [nav, showNav] = useState(false);

    return(
        <div className='navBarContainer'>
            <Link to="/">
                <img class='logo' src={logo.default} alt='brew calc logo' />
            </Link>
            <div>
                <Global />
                <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                    <div />
                    <div />
                    <div />
                </MenuIcon>
                <MenuLinks nav={nav}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="../../about/">About</Link>
                        </li>
                        <li>
                            <Link to="../../faq/">FAQ</Link>
                        </li>
                    </ul>
                </MenuLinks>
            </div>
        </div>
    )
}

export default NavBar;