import React, { Component } from 'react';
import DishTable from './TakeOrder/DishTable';
import Carousel from '../Widget/Carousel';

class TakeOrder extends Component {


  render() {
    const images = [
        'https://via.placeholder.com/800x400?text=Slide+1',
        'https://via.placeholder.com/800x400?text=Slide+2',
        'https://via.placeholder.com/800x400?text=Slide+3',
      ];
  
      const dishes = [
        { name: '宫保鸡丁', imageUrl: 'https://via.placeholder.com/150', price: 25 },
        { name: '麻婆豆腐', imageUrl: 'https://via.placeholder.com/150', price: 20 },
        { name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
      ];
  
      return (
        <div>
          <Carousel images={images} />
          <DishTable dishes={dishes}/>
        </div>
      );
  }
}

export default TakeOrder;
