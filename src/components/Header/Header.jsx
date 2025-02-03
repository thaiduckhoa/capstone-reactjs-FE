import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FiverrLogo from './FiverrLogo';
import './Header.scss'

export const Header = () => {
  const [active, setActive] = useState(false)
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div className='header'>
      <div className={active ? "navbar active" : "navbar"}>
        <div className='container'>
          <div className='logo'>
          {
              active ? 
                <FiverrLogo fillColor="#111" /> : 
                <Link to="/"><FiverrLogo fillColor="#fff" /></Link>
            }
              
            
          </div>
          <div className="links">
            <span><Link to={""}>Fiverr Business</Link></span>
            <span><Link to={""}>Explore</Link></span>
            <span><Link to={""}>English</Link></span>
            <span><Link to={""}>sign in</Link></span>
            <span><Link to={""}>Become a Seller</Link></span>
            <button>Join</button>
          </div>
        </div>
    
        {active && (
          <>
          <hr />
            <div className="menu">
              <span>test</span>
              <span>test2</span>
            </div>
          </>
        )}
      </div>

    </div>
  );
};