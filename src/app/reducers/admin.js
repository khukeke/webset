import { combineReducers } from 'redux';
import adminGlobalState from './adminGlobalState'
import adminUsers from './adminUsers';
import adminTags from './adminTags';



const admin = combineReducers({
  adminGlobalState,
  adminUsers,
  adminTags,
  // newArticle,
  // articles
});

export default admin;