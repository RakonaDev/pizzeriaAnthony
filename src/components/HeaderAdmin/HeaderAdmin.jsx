import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import LogoPizza from "../../assets/Header/logoPizza.jpg";
import { useAdmin } from "../../zustand/useAdmin";
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export function HeaderAdmin() {
  const [expanded, setExpanded] = useState(false);
  const data = useAdmin((state) => state.data);
  console.log(data);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <header className="py-3 px-2 h-screen bg-rojo-claro w-full max-w-[15rem] fixed top-0 left-0 z-50">
        <img src={LogoPizza} alt="logo" className="h-[4.5rem] mx-auto mb-3" />
        <h1 className="text-black w-fit mx-auto bg-white py-1 px-2 rounded-lg">
          Dashboard
        </h1>
        <div className="w-full h-auto mt-8">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ backgroundColor: "#FF1222" }}
            >
              <h1 className="text-white">Productos</h1>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#FF1222" }}>
              <section className="flex flex-col gap-2 ps-2">
                <NavLink
                  to="/admin/dashboard/agregar-productos"
                  className="text-white py-2 transition-colors hover:text-black"
                >
                  Agregar Producto
                </NavLink>
                <NavLink
                  to="/admin/dashboard/lista-productos"
                  className="text-white py-2 transition-colors hover:text-black"
                >
                  Lista Productos
                </NavLink>
              </section>
            </AccordionDetails>
          </Accordion>
        </div>
      </header>
    </>
  );
}

/*
<Accordion 
            expanded={expanded === 'panel2'} 
            onChange={handleChange('panel2')}
            sx={{ boxShadow: 'none' }}
          >
            <AccordionSummary 
              expandIcon={ <ExpandMore sx={{ color: 'white'}} /> }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{ backgroundColor: '#FF1222' }}
            >
              <h1 className='text-white'>Pedidos</h1>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: '#FF1222' }}
            >
              <h1>Hola Pendejos</h1>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            expanded={expanded === 'panel3'} 
            onChange={handleChange('panel3')}
            sx={{ boxShadow: 'none' }}
          >
            <AccordionSummary 
              expandIcon={ <ExpandMore sx={{ color: 'white'}} /> }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              sx={{ backgroundColor: '#FF1222', boxShadow: 'none' }}
            >
              <h1 className='text-white'>Usuarios</h1>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: '#FF1222', boxShadow: 'none' }}
            >
              <h1>Hola Pendejos</h1>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            expanded={expanded === 'panel4'} 
            onChange={handleChange('panel4')}
            sx={{ boxShadow: 'none' }}
          >
            <AccordionSummary 
              expandIcon={ <ExpandMore sx={{ color: 'white'}} /> }
              aria-controls="panel4bh-content"
              id="panel2bh-header"
              sx={{ backgroundColor: '#FF1222' }}
            >
              <h1 className='text-white'>Empleados</h1>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: '#FF1222', boxShadow: 'none' }}
            >
              <h1>Hola Pendejos</h1>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            expanded={expanded === 'panel5'} 
            onChange={handleChange('panel5')}
            sx={{ boxShadow: 'none' }}
          >
            <AccordionSummary 
              expandIcon={ <ExpandMore sx={{ color: 'white'}} /> }
              aria-controls="panel5bh-content"
              id="panel2bh-header"
              sx={{ backgroundColor: '#FF1222' }}
            >
              <h1 className='text-white'>Categorias</h1>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: '#FF1222', boxShadow: 'none' }}
            >
              <h1>Hola Pendejos</h1>
            </AccordionDetails>
          </Accordion>

*/
