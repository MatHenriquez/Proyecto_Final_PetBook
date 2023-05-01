

import { GET_PETS,FETCH_PET_DETAIL_SUCCESS,GET_PETS_RAMDON_HOME,SEND_EMAIL,SEND_ADOPTION_REQUEST,GET_PET_NAME, SET_PET_NAME,GET_PRODUCTS,ADD_FAVORITE,DELETE_FAVORITE, GET_USERS} from './types';



const initialState = {
  adoptionRequest: null,
  error: null,


  petsRandomHome :[],
  pet:{},
  namePets : [],
  myFavorites: [],
  pets:[],


  profile: {
    //perfil de usuario
    nickname: "",
  },

  loginForm: {
    email: "",
    password: "",
  },
  formSubmitted: false, //enviado de formulario de registro

  //Form de Contacto
loading: false,
success: null,
error: null,

products: [],


  users :[]

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload,
      };
    case FETCH_PET_DETAIL_SUCCESS:
      return {
        ...state,
        pet: action.payload,
      };
    case GET_PETS_RAMDON_HOME:
      return {
        ...state,
        petsRandomHome: action.payload,
      };

    case GET_PET_NAME:
      return {
        ...state,
        namePets: action.payload,
      };

    case SET_PET_NAME:
      return {
        ...state,
        namePets: [],
      };

    case SEND_EMAIL:
      if (action.error) {
        return {
          ...state,
          loading: false,
          success: null,
          error: action.error,
        };
      } else {
        return {
          ...state,
          loading: false,
          success: action.payload,
          error: null
          };
          }
          case SEND_ADOPTION_REQUEST:
            return {
              ...state,
              adoptionRequest: action.payload,
              error: null,
            };
            case GET_PRODUCTS:
            return {
              ...state,
              products: action.payload
            };

              
              case GET_USERS:
              return{
              ...state,
              users : action.payload
              }


            case ADD_FAVORITE:
              return {
                  ...state,

                  myFavorites:[...state.myFavorites, action.payload],
                 /*  pets: [...state.pets.data, action.payload] */

              }   
              
          case DELETE_FAVORITE:
              console.log(action.payload +  "estoy en delete")
              return {
                  ...state,
                  myFavorites: state.myFavorites.filter(pet => pet.id!== action.payload)
              } 
                 
    default: {
      return {
        ...state,
      };
    }
  }
};



export default reducer

