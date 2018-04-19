import React,{ Component } from 'react';
import LoginPart from '../login'
import HomePage from '../homePage'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import { getUserLogin,} from '../../../actions/userLogin';


class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      loginStatus: false
    }
    this.handleState = this.handleState.bind(this);
  }
  componentWillMount(){
    if(this.props.username == 'root' && this.props.password == 'root'){
      this.setState({ loginStatus: true})
    }else{
      this.setState({ loginStatus: false})
    }
  }
  handleState(){
    console.log('handleState')
    console.log(this.props);
    // this.props.initialDispatch();

  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps')
    const { username, password } = nextProps;
    if(username == 'root' && password == 'root'){
      this.setState({
        loginStatus: true
      })
    }else{
      this.setState({
        loginStatus: false
      })
    }

  }
  componentWillUpdate(){
    console.log("this.props===componentWillUpdate")
    console.log(this.props)
  }


  render(){
    console.log("this.props====render")
    console.log(this.props)

    return(
      <div>
        {
          this.state.loginStatus
          ? <HomePage />
          : <LoginPart />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state===mapStateToProps")
  console.log(state)
  return{
    username: state.root.adminUser,
    password: state.root.adminPassword
  }
}

export default connect(mapStateToProps)(Home);