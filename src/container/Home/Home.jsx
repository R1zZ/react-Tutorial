import React, { Component } from 'react';
import YoutubeComp from '../../component/YoutubeComp/YouTubeComp';
import Product from '../Product/Product';
class Home extends Component {
  render() {
    return (
      <div>
        <YoutubeComp 
          time="7.12" 
          title="PopCash Developer - Bagian 4"
          desc="2x ditonton, 2 hari yang lalu" />
        <YoutubeComp 
          time="6.12" 
          title="PopCash Developer - Bagian 3"
          desc="200x ditonton, 5 hari yang lalu" />
        <YoutubeComp 
          time="8.10" 
          title="PopCash Developer - Bagian 2"
          desc="2x ditonton, 14 hari yang lalu" />
        <YoutubeComp 
          time="2.00" 
          title="PopCash Developer - Bagian 1"
          desc="5,6K ditonton, 3 minggu yang lalu" /> 
        <YoutubeComp />
        <p>Counter</p>
        <hr/>
        <Product />
      </div>
      
    );
  }
}

export default Home;