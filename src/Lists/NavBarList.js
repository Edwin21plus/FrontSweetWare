import React from 'react';
import {FaCartPlus, FaUserTie} from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavBarList = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome color='black'/>,
    cName: 'nav-text'
  },
  {
    title: 'Ventas',
    path: '/sales',
    icon: <IoIcons.IoIosPaper color='black'/>,
    cName: 'nav-text'
  },
  {
    title: 'Productos',
    path: '/products',
    icon: <FaCartPlus color='black'/>,
    cName: 'nav-text'
  },
  {
    title: 'Clientes',
    path: '/clients',
    icon: <IoIcons.IoMdPeople color='black'/>,
    cName: 'nav-text'
  },
  {
    title: 'Empleados',
    path: '/employees',
    icon: <FaUserTie color='black'/>,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle color='black'/>,
    cName: 'nav-text'
  }
];