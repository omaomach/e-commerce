import { Carousel, Image } from 'antd';
import image1 from '../../images/one.jpg';
import image2 from '../../images/two.jpg';
import image3 from '../../images/three.jpg';
import image4 from '../../images/four.jpg';
import React from 'react';
const contentStyle = {
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Homebanner = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <Image src={image1}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image src={image2}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image src={image3}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image src={image4}/></h3>
    </div>
  </Carousel>
);

export default Homebanner;