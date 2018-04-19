import React , { Component } from 'react';
import { Button } from 'antd'
import { cleanUserLogin } from '../../../actions/userLogin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import Head from '../head';

class HomePage extends Component{
  constructor(props){
    super(props);

  }
  handleClick = (e) => {
    e.preventDefault();
    console.log("this.props----handleClick")
    console.log(this.props)
    this.props.initialDispatch();
  }
  render(){
    return(
      <div>
        <Button type="primary" onClick={this.handleClick}>login out</Button>
        <Head />
        {/* <div>

          <Switch>

          </Switch>
        </div> */}

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log("state====mapStateToProps")
  console.log(state)
}
const mapDispatchToProps = (dispatch) => {
  return {
    initialDispatch: bindActionCreators (cleanUserLogin, dispatch)
  }
}



// export default HomePage;
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);