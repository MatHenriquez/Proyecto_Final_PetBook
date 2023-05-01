import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { validateData } from "../FORMS/validations.js"


const FormCreatePet = () => {
  //  ESTADOS LOCALES
  const [loading, setLoading] = useState(false);
  const [access, setAccess] = useState(false);
  const [url, setUrl] = useState("");

  const [data, setData] = useState({
    image: "",
    name: "",
    specie: "",
    size: "",
    weight: "",
    age: "",
    gender: "",
    description: "",
  });

  const [error, setErrors] = useState({
    image: "",
    name: "",
    specie: "",
    size: "",
    weight: "",
    age: "",
    gender: "",
    description: "",
  });
  
  

  /********************************** */

  // UseEfect para que no se pueda apretar boton de crear con campos vacios
  useEffect(() => {
    if (
      data.name &&
      data.age &&
      data.gender &&
      data.size &&
      data.specie &&
      data.weight &&
      url
    ) {
      setAccess(true);
    } else {
      setAccess(false);
    }
  }, [data, url]);

  /***************************** */

  //ONCHANGE PARA CAPTURAR VALORES DE INPUTS
  const onchangeData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validateData({
        ...data,
        [event.target.name]: event.target.value,
        
      })
    );
  };
  /************************** */

  //FUNCION PARA CONVERTIR ARCHIVO FILE A BASE 64
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };


  /********************** */

  // FUNCION PARA CREACION SOLO SI LOS CAMPOS REQUERIDOS ESTAN LLENOS
  function uploadSingleImage() {
    if (access) {
      setLoading(true);
      axios
        .post("http://localhost:3001/pets", {
          image: url,
          name: data?.name,
          specie: data?.specie,
          size: data?.size,
          weight: data?.weight,
          age: data?.age,
          gender: data?.gender,
          description: data?.description,
        })
        .then((res) => {
          setUrl(res.data);
          alert("Pet created Succesfully");
          handlerClear()
          cleanErrors()
        })
        .then(() => setLoading(false))
        .catch(console.log);
    } else window.alert("complete todos lo campos");

  }
  /********************** */

  // ONCHANGE PARA CAPTURAR LA IMAGEN Y LLAMA A LA FN DE BASE 64 Y LA SETEA AL ESTADO URL
  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files[0]);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      setUrl(base64);
      return;
    }
  }; /************************** */

  //FUNCION PARA LIMPIAR CAMPOS CON BOTON
  const handlerClear = () => {
    setData({
      image: "",
      name: "",
      specie: "",
      size: "",
      weight: "",
      age: "",
      gender: "",
      description: "",
    });
    setUrl("");
  };
  /****************** */
  const cleanErrors = () =>{
  setErrors({
    name: "",
    specie: "",
    size: "",
    weight: "",
    age: "",
    gender: "",
  })
  }
  useEffect(()=>{
  validateData(data)
  },[data,error])


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      {loading ? (
        <div className="flex items-center justify-center">
         <img src={data.specie === "Dog" && "/PerroGif.gif" || data.specie === "Cat" && "/gatoGif.gif" ||data.specie === "Parrot" && "/ParrotDance.gif"|| data.specie === "Rabbit" && "/RabbitGif.gif"|| data.specie === "Guinea Pig" && "/guineaPigGif.gif" }alt="PetsGif" />
        </div>
      ) : (
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Create a Pet</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    create and share a shelter pet story.
                  </p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* DIV NAME */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Name</label>
                    <input
                      name="name"
                      value={data?.name}
                      onChange={onchangeData}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Type a Name..."
                    />
                    {error.name? <p>{error.name}</p> : ""}
                  </div>

                  {/* DIV SPECIE */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Specie</label>
                    <input
                      name="specie"
                      value={data?.specie}
                      onChange={onchangeData}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Indicates the Specie"
                    />
                    {error.specie? <p>{error.specie}</p> : ""}
                  </div>

                  {/* DIV GENDER */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Gender</label>
                    <input
                      name="gender"
                      value={data?.gender}
                      onChange={onchangeData}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Indicates the Gender"
                    />
                    {error.gender? <p>{error.gender}</p> : ""}
                  </div>

                  {/* DIV SIZE */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Size</label>
                    <input
                      name="size"
                      value={data?.size}
                      onChange={onchangeData}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Indicates the Size"
                    />
                    {error.size? <p>{error.size}</p> : ""}
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* DIV WEIGHT */}
                    <div className="flex flex-col">
                      <label className="leading-loose">Weight</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          name="weight"
                          value={data?.weight}
                          onChange={onchangeData}
                          type="number"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="add a weight"
                        />
                        {error.weight? <p>{error.weight}</p> : ""}
                      </div>
                    </div>

                    {/* DIV AGE */}
                    <div className="flex flex-col">
                      <label className="leading-loose">Age</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          name="age"
                          value={data?.age}
                          onChange={onchangeData}
                          type="number"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="add a Age"
                        />
                       {error.age? <p>{error.age}</p> : ""}
                        <div className="absolute left-3 top-2"></div>
                      </div>
                    </div>
                  </div>

                  {/* DIV TELL MORE */}
                  <div className="flex flex-col">
                    <label className="leading-loose">tell us more about</label>
                    <input
                      type="text"
                      name="description"
                      value={data?.description}
                      onChange={onchangeData}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                  </div>

                  {/* DIV UPLOAD IMAGE */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Upload Image</label>
                    <input
                      onChange={uploadImage}
                      type="file"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                    
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={handlerClear}
                    className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>{" "}
                    Cancel
                  </button>
                  <button
                    onClick={uploadSingleImage}
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormCreatePet;
