import React from 'react';
import {FaCartPlus, FaUserTie} from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavBarList = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Ventas',
    path: '/sales',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Productos',
    path: '/products',
    icon: <FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Clientes',
    path: '/clients',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Empleados',
    path: '/employees',
    icon: <FaUserTie />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];