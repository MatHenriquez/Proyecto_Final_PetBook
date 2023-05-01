import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TablaUsers from "./TablaUsers";


const Admin = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUsers());
  }, [getUsers]);

  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="/home" title="home">
              {/* <img src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" className="w-32" alt="tailus logo"/> */}
              logo de petbook
            </a>
          </div>

          <div className="mt-8 text-center">
            <img
              src="https://pxb.cdn.0221.com.ar/0221/042023/1681735734694.jpg"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              pepito
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <span className="group-hover:text-gray-700">
                  publicar productos
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <span className="group-hover:text-gray-700">
                  Historias de Adopcion
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
              <Link to={"/AplicationRequest"}>
                <span className="group-hover:text-gray-700">
                  Solicitudes de Adopcion
                </span>
                </Link>
              </a>
            </li>
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <Link to={"/FormCreatePet"}>
                <span className="group-hover:text-gray-700">
                  Publicar Mascota
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* LOGOUT */}
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>

      {/* HEADER ADMIN */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              PETBOOK
            </h5>

            <div className="flex space-x-4">
              {/* BOTON DE MENSAJES */}
              <button
                aria-label="chat"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                btn util
              </button>

              {/* CAMPANA DE NOTIFICACIONES */}
              <button
                aria-label="notification"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                otro btn
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 2xl:container ">
          <div>
            {/* ***************************** */}
            {/* COLUMNA 1 */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div>
                  <h5 className="text-xl text-gray-600 text-center">
                    usuarios registrados
                  </h5>

                  <table className="w-full text-gray-600">
                    <tbody>
                      {state.users.users &&
                        state?.users?.users?.map((user, index) => {
                          return (
                            <tr key={index}>
                              <TablaUsers
                                user={user?.nickname}
                                email={user?.email}
                                index={index}
                                id={user?.id}
                              />
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ***************************** */}

            {/* COLUMNA 2 */}
            <div>
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <h5 className="text-xl text-gray-700">Donaciones</h5>
                <div className="my-8">
                  <h1 className="text-5xl font-bold text-gray-800">64,5%</h1>
                  <span className="text-gray-500">
                    Compared to last week $13,988
                  </span>
                </div>
              </div>
            </div>
            {/* ***************************** */}

            {/* COLUMNA 3 */}
            <div>
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <h5 className="text-xl text-gray-700">otro dato</h5>
              </div>
            </div>
            {/* ***************************** */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
