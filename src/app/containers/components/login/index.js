import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import { Form }  from 'antd/lib/form';
// import { Icon } from 'antd/lib/icon';
// import { Input } from 'antd/lib/input';
// import { Button } from 'antd/lib/button';
// import { Checkbox } from 'antd/lib/checkbox';
import 'antd/lib/form/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/checkbox/style/css';
// import 'antd/lib/menu/style/css';
import { getUserLogin,} from '../../../actions/userLogin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import './style.css';


const FormItem = Form.Item;

class LoginPart extends Component{
  constructor(props){
    super(props);
    this.state = {
      key : '',
      value: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err,values) => {
      if(!err){
        console.log('Received values of form:',values);
        // this.setState({ key: values.userName, value: values.password })
        console.log("values.username")
        console.log(values.userName)
        console.log(values.password)
        if(values.userName == 'root' && values.password == 'root'){
          console.log('handleSubmit')
          const message = {
            username: values.userName,
            password: values.password,
          }
          console.log("this.props=====")
          console.log(this.props)
          this.props.initialDispatch(message);
          // this.props.handleState(message);
        }
      }
    })
  }
  // handleSubmit(e){}

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" >
            Login in
          </Button>
        </Form>
        {/* ooooo */}
      </div>
    )
  }
}
LoginPart = Form.create()(LoginPart);


const mapDispatchToProps = (dispatch) =>{
  return {
      initialDispatch:bindActionCreators(getUserLogin,dispatch),
  }
}

const mapStateToProps = (state) => {

}
// export default LoginPart;
export default connect(mapStateToProps,mapDispatchToProps)(LoginPart);