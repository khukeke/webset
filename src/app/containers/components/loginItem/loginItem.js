import React ,{ Component } from 'react';
import  Banner  from '../banner'
import Main from '../main/main';


class LoginItem extends Component{
  render(){
    return(
      <div>
        <Banner />
        <Main />
      </div>
    )
  }
}

export default LoginItem;