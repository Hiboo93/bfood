import { RiHomeFill } from 'react-icons/ri';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';

export type NavLinkType = {
  icon?: any;
  path: string;
  name: string;
  offset: number;
};

export const NAVLINKS: NavLinkType[] = [
  {
    path: "home",
    name: "home",
    offset: -50,
  },
  {
    path: "menu",
    name: "menu",
    offset: -50,
  },
  {
    path: "about",
    name: "about",
    offset: -150,
  },
  {
    path: "contact",
    name: "contact",
    offset: 0,
  },
];


