
import admin from './admin';
import front from './front';
import globalState from './globalState';
import root from './root';
import { combineReducers } from 'redux';


export default combineReducers({
  root,
  front,
  globalState,
  admin,
});