import "./InicioSesion.css";

import inicioAside from "../../assets/Inicio-sesion/inicio-aside.png";
import { NavLink } from "react-router-dom";
import { FormInicio } from "../../components/FormInicio/FormInicio";
import { useState } from "react";
import { FormRegistro } from "../../components/FormRegistro/FormRegistro";

export default function InicioSesion() {
  const[esInicio, setEsInicio] = useState(true);

  return (
    <>
      <div className="w-full h-screen relative flex justify-center items-center bg-rojo-claro-max">
        <NavLink to='/' className="top-4 left-4 absolute text-xl">
          <i className="fa-solid fa-arrow-left me-3"></i>
          Volver
        </NavLink>
        <div className="flex p-16 bg-white gap-x-16 rounded-2xl h-auto shadow-slate-600 shadow-md">
          <aside className="w-[30rem] p-12 bg-rojo-claro-max rounded-lg h-auto shadow-inner shadow-slate-600">
            <img src={inicioAside} alt="" className="w-full h-full" />
          </aside>
          <div className="w-[30rem]">
            {esInicio ? <FormInicio setEsInicio={setEsInicio} /> : <FormRegistro setEsInicio={setEsInicio} />}
          </div>
        </div>
      </div>
    </>
  );
}
