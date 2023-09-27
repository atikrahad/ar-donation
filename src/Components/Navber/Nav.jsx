import { NavLink } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import './Nav.css'
import logo from '../img/Logo.png'

const Nav = () => {
    const [open, setOpen] = useState('!open');
    const handleNavIconClick = open => {
        setOpen(open);
    }
    return (
        <nav className='flex  opacity-100  md:bg-transparent w-[95%] md:w-[80%] py-5 mx-auto justify-between items-center'>
            <img className='w-48
            ' src={logo} alt="" />
            <div className='md:hidden text-2xl' onClick={()=> handleNavIconClick(!open)}>
                {
                    open? <AiOutlineMenu></AiOutlineMenu> : <AiOutlineClose></AiOutlineClose>
                }
            </div>
            <ul className={`absolute px-12  md:px-0 z-50 font-bold bg-slate-100 md:bg-transparent md:static gap-5  items-center py-5 flex flex-col right-[20%] md:flex-row   duration-1000 ${open? '-top-72': 'top-0'}`}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/donation'}>Donation</NavLink>
                <NavLink to={'/statistics'}>Statistics</NavLink>
            </ul>
        </nav>
    );
};

export default Nav;