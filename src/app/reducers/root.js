

// const ADMIN_SET_ROOT = 'ADMIN_SET_ROOT'
import { ADMIN_SET_ROOT } from '../actions/userLogin';
import { ADMIN_CLEAN_ROOT } from '../actions/userLogin';

const initialState = {
  adminUser: '',
  adminPassword: ''
}

export default function root(state=initialState,action){
  switch(action.type){
    case ADMIN_SET_ROOT:
      return {
        ...state,
        adminUser: action.message.username,
        adminPassword: action.message.password,
      }
    case ADMIN_CLEAN_ROOT:
      return {
        ...state,
        adminUser: '',
        adminPassword: ''
      }
    default:
      return state


  }
}