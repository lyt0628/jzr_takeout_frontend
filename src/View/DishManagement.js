import React from 'react';

class DishManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        { id: 1, name: '宫保鸡丁', imageUrl: 'https://via.placeholder.com/150', price: 25 },
        { id: 2, name: '麻婆豆腐', imageUrl: 'https://via.placeholder.com/150', price: 20 },
        { id: 3, name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { id: 4, name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { id: 5, name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { id: 6, name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { id: 7, name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { id: 8, name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { id: 9, name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { id: 10, name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { id: 11, name: '红烧肉', imageUrl: 'https://via.placeholder.com/150', price: 30 },

      ],
      newDish: { name: '', imageUrl: '', price: '' },
      editIndex: null
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      newDish: { ...this.state.newDish, [name]: value }
    });
  }

  addDish = () => {
    const { dishes, newDish } = this.state;
    const newDishWithId = { ...newDish, id: dishes.length + 1 };
    this.setState({
      dishes: [...dishes, newDishWithId],
      newDish: { name: '', imageUrl: '', price: '' }
    });
  }

  deleteDish = (id) => {
    this.setState({
      dishes: this.state.dishes.filter(dish => dish.id !== id)
    });
  }

  editDish = (index) => {
    const dish = this.state.dishes[index];
    this.setState({
      newDish: { ...dish },
      editIndex: index
    });
  }

  updateDish = () => {
    const { dishes, newDish, editIndex } = this.state;
    const updatedDishes = dishes.map((dish, index) => {
      if (index === editIndex) {
        return newDish;
      }
      return dish;
    });
    this.setState({
      dishes: updatedDishes,
      newDish: { name: '', imageUrl: '', price: '' },
      editIndex: null
    });
  }

  render() {
    const { dishes, newDish, editIndex } = this.state;
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">菜品管理</h1>
        <div className="mb-4">
          <input type="text" name="name" placeholder="菜品名字" value={newDish.name} onChange={this.handleInputChange} className="border border-gray-300 rounded-md p-2 mr-2" />
          <input type="text" name="imageUrl" placeholder="图片URL" value={newDish.imageUrl} onChange={this.handleInputChange} className="border border-gray-300 rounded-md p-2 mr-2" />
          <input type="number" name="price" placeholder="价格" value={newDish.price} onChange={this.handleInputChange} className="border border-gray-300 rounded-md p-2 mr-2" />
          {editIndex !== null ? (
            <button onClick={this.updateDish} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">更新菜品</button>
          ) : (
            <button onClick={this.addDish} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">添加菜品</button>
          )}
        </div>
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 mb-2">
              <th className="p-2">名字</th>
              <th className="p-2">图片</th>
              <th className="p-2">价格</th>
              <th className="p-2">操作</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {dishes.map((dish, index) => (
              <tr key={dish.id} className="bg-gray-100 border border-grey-500 mb-2">
                <td className="p-2">{dish.name}</td>
                <td className="p-2"><img src={dish.imageUrl} alt={dish.name} className="h-16 w-16 object-cover" /></td>
                <td className="p-2">${dish.price}</td>
                <td className="p-2 flex gap-2">
                  <button onClick={() => this.editDish(index)} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700">编辑</button>
                  <button onClick={() => this.deleteDish(dish.id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">删除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DishManagement;
