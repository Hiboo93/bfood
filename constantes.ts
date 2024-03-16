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

export type MarkersType = {
  position: number[];
  title: string;
  subtitle: string;
  image: string;
};

export const MARKERS: MarkersType[] = [
  {
    position: [48.9348, 2.5573],
    title: "Location 1",
    subtitle: "Lorem ipsum sit dolor amet, adipisicing elit consectetur.",
    image: "/map/1.png",
  },
  {
    position: [48.9340, 2.4573],
    title: "Location 2",
    subtitle: "Lorem ipsum sit dolor amet, adipisicing elit consectetur.",
    image: "/map/2.png",
  },
  {
    position: [48.9348, 2.5073],
    title: "Location 3",
    subtitle: "Lorem ipsum sit dolor amet, adipisicing elit consectetur.",
    image: "/map/3.png",
  },
]


