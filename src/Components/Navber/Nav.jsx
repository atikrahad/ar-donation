import { NavLink } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import './Nav.css'

const Nav = () => {
    const [open, setOpen] = useState('!open');
    const handleNavIconClick = open => {
        setOpen(open);
    }
    console.log(open);
    return (
        <nav className='flex bg-slate-100 md:bg-transparent px-5 md:w-[70%] py-5 mx-auto justify-between items-center'>
            <img className='w-48
            ' src="./public/logo.png" alt="" />
            <div className='md:hidden text-2xl' onClick={()=> handleNavIconClick(!open)}>
                {
                    open? <AiOutlineMenu></AiOutlineMenu> : <AiOutlineClose></AiOutlineClose>
                }
            </div>
            <ul className={`absolute font-bold bg-slate-200 md:bg-transparent md:static top-[95px] w-1/3  items-center py-5 opacity-70 flex flex-col md:flex-row md:gap-10 gap-5 duration-1000 ${open? '-right-72': 'right-0'}`}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/donation'}>Donation</NavLink>
                <NavLink to={'/statistics'}>Statistics</NavLink>
            </ul>
        </nav>
    );
};

export default Nav;