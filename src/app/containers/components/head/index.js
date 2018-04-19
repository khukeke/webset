import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/lib/menu/style/css';
import './head.css'



const Item = Menu.Item;

class Head extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="navigator">
        <Menu
          onClick={this.handeClick}
          // selectedKeys={[this.state.current]}
          mode="horizontal"
          >
          <Item key="home">
            <Link to="/">Home</Link>
          </Item>
          <Item key="roster">
            <Link to="/roster">Roster</Link>
          </Item>
          <Item key="schedule">
            <Link to="/schedule">schedule</Link>
          </Item>
          <Item key="authExample">
            <Link to="/authExample">authExample</Link>
          </Item>
        </Menu>
      </div>

    )
  }
}

export default Head;