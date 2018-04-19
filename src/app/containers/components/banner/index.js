import React, { Component } from 'react';
import { Carousel } from 'antd';
import style from './style.css';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Link } from 'react-router-dom';


export default class Banner extends Component{
  constructor(props){
    super(props);
    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    // this.renderCarousel = this.renderCarousel.bind(this)
  }


  render(){
    return(
      <div>
        <div className="banner">

        </div>
      </div>

    )
  }
}