import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import * as PropTypes from "prop-types";
import { isBrowser } from "../utils";

const Header = ({ useOverlay = true }) => {
  if (!isBrowser()) {
    return;
  }

  const [isTopPosition, setIsTopPosition] = useState(false);

  useEffect(() => {
    setIsTopPosition(window.scrollY === 0);

    const updateIsTopPosition = () => {
      setIsTopPosition(window.scrollY === 0);
    };

    window.addEventListener("scroll", updateIsTopPosition);

    return () => {
      window.removeEventListener("scroll", updateIsTopPosition);
    };
  });

  const pageNavs = [
    {
      label: "Dev",
      url: "/dev"
    },
    {
      label: "Photography",
      url: "/photography"
    },
    {
      label: "About",
      url: "/about"
    }
  ]

  return (
    <div className={`
      fixed
      top-0
      w-full
      transition-[background-color]
      duration-300
      ease-in-out
      transition-[box-shadow]
      z-10
      ${isTopPosition && useOverlay ? 'bg-transparent shadow-none' : 'bg-white shadow-lg shadow-slate-500/5'}
    `}>
       <header className={`
         flex
         justify-between
         transition-[padding]
         duration-[450ms]
         ease-in-out
        ${isTopPosition ? 'p-14' : 'px-10'}
      `}>
        <div className="brand px-4 py-3">
          <Link to="/" className="brand-link flex items-center text-2xl">
            <StaticImage placeholder="none" className="mr-2 w-8 h-8 animate-[logoSpin_5s_ease-in-out_infinite_both]" src="../images/icon.png" alt="Logo"></StaticImage>
            <span className="text-nxs-blue">nandemo</span><span className="text-nxs-red">nas</span>
          </Link>
        </div>
        <nav className="flex items-center primary-nav">
          {
            pageNavs.map((pageNav, index) => (
              <Link
                key={index}
                className="nav-link text-center px-4 py-3 text-lg font-light hover:text-nxs-red"
                activeClassName="text-nxs-blue font-bold"
                partiallyActive={true}
                to={pageNav.url}
                data-nav-label={pageNav.label}
              >
                {pageNav.label}
              </Link>))
          }
        </nav>
      </header>
    </div>
  );
};

Header.propTypes = {
  useOverlay: PropTypes.bool
};

export default Header;
