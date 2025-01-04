import React from 'react';
import OrderHistoryRow from './OrderHistory/OrderHistoryRow';


class OrderHistory extends React.Component {
  render() {
    const orders = [
      {
        id: 1,
        imageUrl: 'https://via.placeholder.com/150',
        name: '宫保鸡丁',
        price: 25,
        status: '已送达'
      },
      {
        id: 2,
        imageUrl: 'https://via.placeholder.com/150',
        name: '麻婆豆腐',
        price: 20,
        status: '已送达'
      },
      {
        id: 3,
        imageUrl: 'https://via.placeholder.com/150',
        name: '红烧肉',
        price: 30,
        status: '已送达'
      }
    ];

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">我的订单历史</h1>
        <div className="grid grid-cols-1 gap-4">
          {orders.map(order => (
            <OrderHistoryRow order={order}/>
          ))}
        </div>
      </div>
    );
  }
}

export default OrderHistory;
