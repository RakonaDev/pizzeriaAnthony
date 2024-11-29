import {
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Slide,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import { useCategorias } from "../../zustand/useCategoria";
import { capitalizarPrimeraLetra } from "../../logic/TextoTitulo";
import { Send } from "@mui/icons-material";
import { useProductos } from "../../zustand/useProductos";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function OpcionesBoton({ id, nombre, precio, categoria, descripcion }) {
  const [abrir, setAbrir] = React.useState(false);
  const [descripcionProducto, setDescripcionProducto] = React.useState(descripcion);
  const [nombreProducto, setNombreProducto] = React.useState(nombre);
  const [precioProducto, setPrecioProducto] = React.useState(precio);
  const [categoriaProducto, setCategoriaProducto] = React.useState(categoria);

  const { categorias, cargarCategorias } = useCategorias();
  const { editarProducto } = useProductos();

  const editar = (event) => {
    event.preventDefault();
    editarProducto({
      id: id,
      nombre: nombreProducto,
      descripcion: descripcionProducto,
      precio: precioProducto,
      categoria: categoriaProducto,
    });
  }

  useEffect(() => {
    if(categorias.length === 0) {
      cargarCategorias();
    }
   }, [cargarCategorias]);

  const abrirModal = () => {
    setAbrir(true);
  };
  const cerrarModal = () => {
    setAbrir(false);
  };

  const cambiarDescripcion = (e) => {
    setDescripcionProducto(e.target.value);
  };

  const cambiarNombre = (e) => {
    setNombreProducto(e.target.value);
  };

  const cambiarPrecio = (e) => {
    setPrecioProducto(e.target.value);
  };

  const cambiarCategoria = (e) => {
    setCategoriaProducto(e.target.value);
  };

  return (
    <>
      <div className="w-full">
        <button
          type="button"
          onClick={abrirModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Editar
        </button>
        <Dialog
          open={abrir}
          onClose={cerrarModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          TransitionComponent={Transition}
          keepMounted
          maxWidth={"md"}
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">Editar producto</DialogTitle>
          <DialogContent id="alert-dialog-description" sx={{ width: "100%" }}>
            <form onSubmit={editar} className="p-4 w-full flex flex-col gap-4">
              <TextField
                id="outlined-basic"
                label="ID"
                variant="outlined"
                className="w-full"
                value={id}
                disabled
              />
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                className="w-full"
                value={nombreProducto}
                onChange={cambiarNombre}
              />
              <TextField
                id="outlined-basic"
                label="Descripción"
                variant="outlined"
                className="w-full"
                value={descripcionProducto}
                onChange={cambiarDescripcion}
              />
              <TextField
                id="outlined-basic"
                label="Precio"
                variant="outlined"
                className="w-full"
                value={precioProducto}
                onChange={cambiarPrecio}
              />
              <Select
                id="demo-simple-select"
                value={categoriaProducto}
                label="Categoria"
                onChange={cambiarCategoria}
                className="w-full"
              > 
                {categorias.map((categoria) => (
                  <MenuItem 
                    key={categoria.id_categoria} 
                    value={categoria.id_categoria}
                  >
                    {capitalizarPrimeraLetra(categoria.nombre)}
                  </MenuItem>
                ))}
              </Select>
              <button 
                className="bg-rojo-claro flex gap-4 mx-auto w-fit px-4 py-2 rounded-md transition-colors duration-500 hover:bg-rojo-oscuro"
                onSubmit={editar}
              >
                Editar Producto
                <Send />
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

OpcionesBoton.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};
