

export const actionTypes = {
  ADMIN_URI_LOCATION: "ADMIN_URI_LOCATION"
};

const initialState = {
  url: "/"
};

export const actions = {
  change_location_admin: function(url){
    return {
      type: actionTypes.ADMIN_URI_LOCATION,
      data: url
    }
  }
};

export default function adminGlobalState(state=initialState,action){
  switch(action.type){
    case actionTypes.ADMIN_URI_LOCATION:
      return {
        ...state,
        url:action.data
      };
    default:
      return state
  }
}