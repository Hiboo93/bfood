import { NAVLINKS } from "@/constantes";
//import Link from 'next/link.js'
import { Link } from "react-scroll";
import React from "react";

type Props = {
  containerStyles: string;
  linkStyles: string;
};

const Nav = ({ containerStyles, linkStyles }:Props) => {
  return (
    <div className={`${containerStyles}`}>
      {NAVLINKS.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          spy={true}
          smooth={true}
          offset={link.offset}
          duration={500}
          className={`${linkStyles}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
