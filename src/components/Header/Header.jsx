import "./Header.css";
import logoPizza from "../../assets/Header/logoPizza.jpg";

import { NavLink } from "react-router-dom";

export function Header() {

  return (
    <header className="w-full h-16 bg-rojo-claro fixed top-0 z-30">
<<<<<<< HEAD
      <div className="container max-w-7xl mx-auto ps-2 pe-2 flex justify-between">
=======
      <div className="container max-w-7xl mx-auto ps-1 pe-1 flex justify-between">
>>>>>>> ab2b3a1fec1ee01100d24738f3adc9af410137ee
        <div className="">
          <img
            src={logoPizza}
            alt="logoPizza"
            className="w-16 h-16 object-cover mx-auto"
          />
        </div>
        <nav className="flex w-[40%] my-auto justify-between">
<<<<<<< HEAD
          <NavLink to={"/"} className="text-white font-bold">Inicio</NavLink>
          <NavLink to={"/menu"} className="text-white font-bold">Menu</NavLink>
          <NavLink to={"/nosotros"} className="text-white font-bold">Nosotros</NavLink>
          <NavLink to={"/pedidos"} className="text-white font-bold">Pedidos</NavLink>
        </nav>
        <div className="h-16 w-fit flex items-center">
          <NavLink to={"/inicio-sesion"} className="text-white p-2 ps-4 pe-4 rounded-full bg-slate-800">
=======
          <NavLink to={"/"} className="text-white">Inicio</NavLink>
          <NavLink to={"/menu"} className="text-white">Menu</NavLink>
          <NavLink to={"/nosotros"} className="text-white">Nosotros</NavLink>
          <NavLink to={"/pedidos"} className="text-white">Pedidos</NavLink>
        </nav>
        <div className="h-16 w-fit flex items-center">
          <NavLink to={"/inicio-sesion"} className="text-white p-2 ps-4 pe-4 rounded-full bg-black">
>>>>>>> ab2b3a1fec1ee01100d24738f3adc9af410137ee
          <i className="fa fa-user" aria-hidden="true"></i>
          <span className="ps-2">Inicio Sesion</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
