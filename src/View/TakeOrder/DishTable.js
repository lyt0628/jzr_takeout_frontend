import React from 'react';
import DishCard from './DishCard';

const DishTable = ({dishes}) => {

      const chunkSize = 4;
      const dishRows = [];
      for (let i = 0; i < dishes.length; i += chunkSize) {
          dishRows.push(dishes.slice(i, i + chunkSize));
        }
      
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <tbody className="bg-white divide-y divide-gray-200">
        {dishRows.map((dishRow, index) => (
            <tr key={index}>
            {dishRow.map((dish, index) =>(
                <td key={index}>
                    <DishCard key={index} name={dish.name} imageUrl={dish.imageUrl} price={dish.price} />
                </td>
            ))}
            </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default DishTable;