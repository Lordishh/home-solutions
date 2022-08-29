import { useState } from "react";

import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import styled from "styled-components";

import logo from "../../assets/logo.svg";


export const Navbar = () => {

  const [navState, setNavState] = useState(false);

  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <img src={ logo } alt="Brand Logo" />
        </div>
        <div className="toggle">
          {
            navState ? (
              <BsToggleOn onClick={() => setNavState(false)} />
            ) : (
              <BsToggleOff onClick={() => setNavState(true)} />
            )
          }
        </div>
      </div>
      <div className={`links ${navState? "show" : "hide"}`}>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Servicios</a>
          </li>
          <li>
            <a href="/">Quiénes somos</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
        <div className="login-btn">
          <button>
            <FiLock /> Ingreso & Registro
          </button>
        
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav``;