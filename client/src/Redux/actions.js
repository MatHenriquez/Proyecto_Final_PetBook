import axios from "axios";


import {
  GET_PETS,
  FETCH_PET_DETAIL_SUCCESS,
  GET_PETS_RAMDON_HOME,
  GET_PET_NAME,
  SET_PET_NAME,
  
  SEND_EMAIL,
  SEND_ADOPTION_REQUEST

} from "./types";

export const getPets = (params, page) => async (dispatch) => {
  
  console.log(params);
    
  
  try {
    if (params) {
      const res = await axios.get(`/pets${params}`);
      if (res.data.data.length === 0) {
        window.alert(`no search results pleace try another search/filter,
if you try to sort in ascending or descending direction
you need to specify that you want to 
"sort by" and "order in away" and vice versa`);
        return;
      }
      return dispatch({
        type: GET_PETS,
        payload: res.data,
      });
    }

    if (!params && !page) {
      const res = await axios.get(`/pets`);
      return dispatch({
        type: GET_PETS,
        payload: res.data,
      });
    }
  } catch (err) {
    window.alert(err.message);
  }
};

export const getNamePets = (petsName) => {
  return {
    type: GET_PET_NAME,
    payload: petsName,
  };
};

export const setNamePets = () => {
  return {
    type: SET_PET_NAME,
  };
};

export const getPetsRandom = () => {
  return async function (dispatch) {
    const largePets = await axios.get("/pets");
    const response = await axios.get(
      `/pets?page=${Math.floor(
        (Math.random() * largePets.data.count) / 2
      )}&pageSize=2`
    );
    return dispatch({
      type: GET_PETS_RAMDON_HOME,
      payload: response.data.data,
    });
  };
};

export const fetchPetDetailSuccess = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/pets/detail/${id}`);
    dispatch({
      type: FETCH_PET_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  console.log(userData);
  try {
    const res = await axios.post(`/users`, userData);

    localStorage.setItem('id', res.data.savedUser.id);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

// export const updateLoginForm = (formData) => {
//   return {
//     type: UPDATE_LOGIN_FORM,
//     payload: formData,
//   };
// };

// Acción que maneja los emails que se envian al admin a traves del FORMCONTACT
//con promesa
export const sendEmail = (name, lastname, email, message) => {
  return new Promise((resolve, reject) => {
    try {
      const tokenString = localStorage.getItem("token");
      console.log("tokenString:", tokenString); // add this line
      //const token = JSON.parse(tokenString);
      //if (!tokenString) {
      //  throw new Error('No token found in localStorage');
      //}
      const headers = {
        "Content-Type": "application/json",
        "x-token": tokenString, // add this line
      };
      console.log("headers:", headers); // add this line
      axios
        .post(
          "/contact",
          {
            name,
            lastname,
            email,
            message,
          },
          { headers }
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    } catch (error) {
      reject(error);
    }
  });
}

export const sendAdoptionRequest = (userEmail, petName, message) => async (dispatch) => {
  try {
    const response = await axios.post('/pets/adopt', {
      userEmail,
      petName,
      message,
      date: new Date(),
    });
    dispatch({ type: SEND_ADOPTION_REQUEST, payload: response.data });
  } catch (error) {
    console.error(error);
    // handle error
  }
};


export const toggleFavorite = (pet) => async (dispatch) =>{
 
}




