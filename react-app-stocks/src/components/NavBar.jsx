import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';


const NavBar = () => {
    return (
        <Card>
           <nav>
            <ul className='flex'>
                <li className='m-3'>
                    <NavLink to= "/">Home</NavLink>
                </li>
                <li className='m-3'>
                    <NavLink to= "/chart">Chart</NavLink>
                </li>
                <li className='m-3'>
                    <NavLink to= "/news">News</NavLink>
                </li>
            </ul>
            </nav> 
        </Card>
    );
};

export default NavBar;