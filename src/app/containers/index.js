import React, { Component, PropTypes } from 'react';

// import  Banner  from './components/banner'
// import { Details } from './detail';
import { connect } from 'react-redux';


import LoginItem from './components/loginItem/loginItem';
import ContentItem from './components/contentItem/contentItem';



class AppIndex extends Component{
  constructor(props){
    super(props);
    this.state = {
      login: false
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.username == "root" && nextProps.password == "root"){
      this.setState({
        login: true
      })
    }else{
      this.setState({
        login: false
      })
    }
  }
  render(){
    return (
      <div>
        {
          this.state.login
          ? <ContentItem />
          : <LoginItem />
        }

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  console.log("state====")
  console.log(state)
  return {
    username: state.root.adminUser,
    password: state.root.adminPassword
  }

}
// export default AppIndex;
export default connect(mapStateToProps)(AppIndex);