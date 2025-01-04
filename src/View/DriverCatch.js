import React from 'react';

class DriverCatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        { id: 1, dishName: '宫保鸡丁', pickupLocation: 'A地', destination: 'B地' },
        { id: 2, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 3, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 4, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 5, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 6, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 7, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 8, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 9, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 10, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 11, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        { id: 12, dishName: '红烧肉', pickupLocation: 'C地', destination: 'D地' },
        // 可以添加更多订单
      ]
    };
  }

  render() {
    const { orders } = this.state;
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-4">待接订单</h2>
          <ul className="divide-y divide-gray-200">
            {orders.map((order) => (
              <li key={order.id} className="py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-medium">{order.dishName}</p>
                    <p className="text-sm text-gray-600">取餐地点: {order.pickupLocation}</p>
                    <p className="text-sm text-gray-600">目的地点: {order.destination}</p>
                  </div>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">接单</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default DriverCatch;
