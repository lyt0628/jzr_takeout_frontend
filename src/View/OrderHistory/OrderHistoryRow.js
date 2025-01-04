import React from 'react';

const OrderHistoryRow = ({order }) => {
  return (
    <div key={order.id} className="bg-white shadow rounded-lg p-4 flex items-center">
    <img src={order.imageUrl} alt={order.name} className="h-20 w-20 object-cover rounded-lg mr-4" />
    <div>
      <h2 className="text-lg font-semibold">{order.name}</h2>
      <p className="text-gray-600">${order.price}</p>
      <p className="text-green-600">{order.status}</p>
      <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">再来一单</button>
    </div>
  </div>
  );
};

export default OrderHistoryRow;
