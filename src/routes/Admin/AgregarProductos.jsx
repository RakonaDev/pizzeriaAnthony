import { Send } from "@mui/icons-material";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useCategorias } from "../../zustand/useCategoria";
import { useEffect, useState } from "react";
import { capitalizarPrimeraLetra } from "../../logic/TextoTitulo";
import { registrarProducto } from "../../services/Productos";
import { darkTheme } from "../../logic/Theme";

export function AgregarProductos() {
  const [categoriaProducto, setCategoriaProducto] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcionProducto, setDescripcionProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [stockProducto, setStockProducto] = useState("");
  const [imagenProducto, setImagenProducto] = useState(null);

  const handleImageChange = (event) => {
    setImagenProducto(event.target.files[0]);
  };

  const handleNombreChange = (event) => {
    setNombreProducto(event.target.value);
  };
  const handleDescripcionChange = (event) => {
    setDescripcionProducto(event.target.value);
  };
  const handlePrecioChange = (event) => {
    setPrecioProducto(event.target.value);
  };
  const handleStockChange = (event) => {
    setStockProducto(event.target.value);
  };

  const handleChange = (event) => {
    setCategoriaProducto(event.target.value);
  };

  const submitProducto = async (event) => {
    event.preventDefault();
    await registrarProducto({
      nombre: nombreProducto,
      descripcion: descripcionProducto,
      precio: precioProducto * 1,
      stock: stockProducto,
      imagen: imagenProducto,
      categoria: categoriaProducto,
    });
  };
  const { categorias, cargarCategorias } = useCategorias();

  useEffect(() => {
    cargarCategorias();
  }, [cargarCategorias]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default" }}>
        <div className=" w-full h-screen text-white flex">
          <div className="w-full max-w-[15rem] h-screen"></div>
          <div className="p-8 w-full">
            <h1 className="text-center text-4xl font-bold">
              Agregar un nuevo producto
            </h1>
            <form
              onSubmit={submitProducto}
              className="m-auto w-full text-white max-w-[40rem] h-full flex items-center justify-center"
            >
              <Box
                sx={{ bgcolor: "background.default" }}
                className="flex flex-col gap-4 w-full items-center"
              >
                <TextField
                  id="nombre"
                  name="nombre"
                  label="Nombre del Producto"
                  variant="outlined"
                  color="#FFFFFF"
                  value={nombreProducto}
                  onChange={handleNombreChange}
                  autoComplete="off"
                  required
                  fullWidth
                />
                <TextField
                  id="descripcion"
                  name="descripcion"
                  label="Descripción"
                  variant="outlined"
                  color="#FFFFFF"
                  value={descripcionProducto}
                  onChange={handleDescripcionChange}
                  autoComplete="off"
                  multiline
                  rows={4}
                  required
                  fullWidth
                />
                <TextField
                  id="precio"
                  name="precio"
                  label="Precio"
                  variant="outlined"
                  color="#FFFFFF"
                  value={precioProducto}
                  onChange={handlePrecioChange}
                  autoComplete="off"
                  type="number"
                  required
                  fullWidth
                />
                <TextField
                  id="stock"
                  name="stock"
                  label="Stock"
                  variant="outlined"
                  color="#FFFFFF"
                  value={stockProducto}
                  onChange={handleStockChange}
                  autoComplete="off"
                  type="number"
                  required
                  fullWidth
                />
                <FormControl fullWidth>
                  <InputLabel id="label-categoria">Categoria</InputLabel>
                  <Select
                    id="categoria"
                    name="categoria"
                    label="Categoria"
                    value={categoriaProducto}
                    onChange={handleChange}
                    fullWidth
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
                </FormControl>

                <input
                  type="file"
                  name="imagen"
                  id="imagen"
                  className="w-full"
                  onChange={handleImageChange}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<Send />}
                  color="primary"
                  className="px-2 py-4 w-fit mx-auto"
                  onSubmit={submitProducto}
                >
                  Crear Producto
                </Button>
              </Box>
            </form>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}
