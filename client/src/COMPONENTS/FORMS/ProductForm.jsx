import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductForm = () => {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    status: true,
    image: "",
    quantity: 0,
    available: true,
    price: 0,
    category: "",
    description: "",
    weight: 0,
    size: "",
    specie: "",
    consumption_age: 0,
    discount: false,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/categories");
      setCategories(response.data.categories);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3001/products",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-token": token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files[0]);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      setFormData({
        ...formData,
        image: base64,
      });
      // setUrl(base64);
      return;
    }
  };

  // console.log(url);
  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-primary rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                  p
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Create a new Product</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* DIV NAME */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Type a Name..."
                    />
                  </div>

                  {/* DIV Quantity */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Indicates the Quantity"
                    />
                  </div>

                  {/* DIV Category */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">-- Select a category --</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* DIV Price*/}
                  <div className="flex flex-col">
                    <label className="leading-loose"> Description</label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="add a Description"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* DIV Description */}
                    <div className="flex flex-col">
                      <label className="leading-loose">Price</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Indicates the Price"
                        />
                      </div>
                    </div>

                    {/* DIV Weight */}
                    <div className="flex flex-col">
                      <label className="leading-loose">weight</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="number"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="add a Weight"
                        />

                        <div className="absolute left-3 top-2"></div>
                      </div>
                    </div>
                  </div>

                  {/* DIV Size */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Size</label>
                    <input
                      type="text"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Size"
                    />
                  </div>

                  {/* DIV SPECIE */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Specie</label>
                    <select
                      name="specie"
                      value={formData.specie}
                      onChange={handleChange}
                    >
                      <option value="">-- Select a specie --</option>
                      <option value="Cat">Cat</option>
                      <option value="Dog">Dog</option>
                      <option value="Rabbit">Rabbit</option>
                      <option value="Guinea Pig">Guinea Pig</option>
                      <option value="Parrot">Parrot</option>
                    </select>
                  </div>

                  {/* DIV AGE */}
                  <div className="flex flex-col">
                    <label className="leading-loose">consumption_age</label>
                    <input
                      type="number"
                      name="consumption_age"
                      value={formData.consumption_age}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="add a consumption_age"
                    />
                  </div>

                  {/* DIV UPLOAD IMAGE */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Upload Image</label>
                    <input
                      type="file"
                      onChange={uploadImage}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Upload Image"
                    /
                    >
                  </div>
                  <button className="btn btn-accent w-full">Save</button>
                </div>
              </div>
              
              <Link to={"/Admin"}>
          <button className="btn btn-primary "> Back</button>
        </Link>
            </div>
          </div>
          
          
        </div>
       
      </div>
    </form>
  );
};

export default ProductForm;
