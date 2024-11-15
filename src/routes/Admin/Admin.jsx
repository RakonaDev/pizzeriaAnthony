import { useEffect, useRef, useState } from "react";
import { login } from "../../services/Admin";

export function Admin() {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [formError, setFormError] = useState(false);

  const ref = useRef();

  const mostrar = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const submitLogin = (event) => {
    event.preventDefault();
    login({ event, setFormError });
  };

  useEffect(() => {
    console.log(formError)
    if(formError) {
      alert("Usuario o contraseña incorrectos")
    }
  }, [formError])

  return (
    <>
      <div className="w-full h-screen bg-rojo-claro-max flex justify-center items-center">
        <section className="p-10 max-w-[40rem] w-full bg-white rounded-lg shadow-2xl my-auto">
          <form 
            className="w-full h-full flex flex-col justify-center items-center"
            onSubmit={submitLogin}
          >
            <h1 className="text-center text-3xl">Inicia Sesión</h1>
            <div className="mb-3 flex flex-col mt-6 w-full px-16">
              <label htmlFor="usuario">Email: </label>
              <input
                type="email"
                name="usuario"
                id="usuario"
                className="border-2 border-black p-1 rounded-2xl  focus-within:border-white"
                required
              />
            </div>
            <div className="mb-8 flex flex-col w-full px-16 relative">
              <label htmlFor="contrasena">Contraseña: </label>
              <input
                ref={ref}
                type={mostrarContrasena ? "text" : "password"}
                name="contrasena"
                id="contrasena"
                className="border-2 border-black p-1 rounded-2xl focus-visible:border-white"
                required
                autoComplete="off"
              />
              <div
                htmlFor="contrasena"
                className="absolute top-8 right-20"
                onClick={mostrar}
              >
                <i className="fa-solid fa-eye" />
              </div>
            </div>
            <input
              type="submit"
              value="Iniciar"
              className="mx-auto py-2 px-10 rounded-lg bg-rojo-claro text-white cursor-pointer transition-colors duration-500 hover:bg-rojo-claro-oscuro"
              onSubmit={submitLogin}
            />
          </form>
        </section>
      </div>
    </>
  );
}

