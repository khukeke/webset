export const ADMIN_SET_ROOT = 'ADMIN_SET_ROOT';
export const ADMIN_CLEAN_ROOT = 'ADMIN_CLEAN_ROOT';


export function getUserLogin(message){
  return{
    type: ADMIN_SET_ROOT,
    message
  }
}

export function cleanUserLogin(){
  return {
    type: ADMIN_CLEAN_ROOT,
    message: {
      adminUser:'',
      adminPassword:'',
    }
  }
}