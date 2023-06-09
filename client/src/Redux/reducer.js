

import { GET_PETS,FETCH_PET_DETAIL_SUCCESS,GET_PETS_RAMDON_HOME,SEND_EMAIL,SEND_ADOPTION_REQUEST,GET_PET_NAME, SET_PET_NAME,GET_PRODUCTS, GET_FAVORITES, GET_USERS, APLICATION_REQUEST,FILTER_PRODUCTS, SEARCH_APLICATION_REQUEST,HISTORYS_REQUEST,GET_HISTORY_DECLINED,GET_HISTORY_APPROVED} from './types';



const initialState = {
  adoptionRequest: null,
  error: null,


  petsRandomHome :[],
  pet:{},
  namePets : [],
  favorites: [],
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
loading: false,
  error: null,

  users :[],

  requestAdoption : [],
  historysRequest: [],
  requesAdoptionHistorialApproved : [],
  requesAdoptionHistorialDeclined : []

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

            case APLICATION_REQUEST:
           return{
           ...state,
           requestAdoption : action.payload
           }
            
          case GET_PRODUCTS:
            return {
              ...state,
              products: action.payload
            };
            
            case FILTER_PRODUCTS:
            console.log(action.payload);
            return{
            ...state,
            products : action.payload
            }
  
          case GET_USERS:
              return{
              ...state,
              users : action.payload
              }

             


         case GET_FAVORITES:
          return {
         ...state,
            favorites: action.payload,
           };
           
           case SEARCH_APLICATION_REQUEST:
           return{
           ...state,
           requestAdoption :action.payload
           }
           
           case HISTORYS_REQUEST:
           return{
           ...state,
           historysRequest : action.payload
           }
           
           case GET_HISTORY_APPROVED:
           return{
           ...state,
           requesAdoptionHistorialApproved : action.payload
           }
           
           case GET_HISTORY_DECLINED:
            return{
            ...state,
            requesAdoptionHistorialDeclined : action.payload
            }
           
           
          default: {
            return {
              ...state,
            };

    }
  }
};



export default reducer

