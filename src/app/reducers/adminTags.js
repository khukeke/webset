
const initialState = ['首页'];

export const actionTypes = {
  GET_ALL_TAGS:"GET_ALL_TAGS",
  SET_TAGS:"RESPONSE_GET_ALL_TAGS",
  DELETE_TAG:"DELETE_TAG",
  ADD_TAG:"ADD_TAG"
}

export const actions = {
  get_all_tags: function(){
    return{
      type: actionTypes.GET_ALL_TAGS,
    }
  },
  delete_tag:function(named){
    return{
      type: actionTypes.DELETE_TAG,
      named
    }
  },
  add_tag:function(named){
    return {
      type:actionTypes.ADD_TAG,
      named
    }
  }
}


export default function adminTags(state=initialState,action){
  switch(action.type){
    case actionTypes.SET_TAGS:
      return ['首页',...action.data];
    default:
      return state;
  }
}