import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
        <header class="bg-white shadow-md">

        <div class="container mx-auto flex items-center justify-between py-4">
            <div className='flex'>
                <Link to="/" className="mr-6 text-xl font-bold text-gray-800">{this.props.title}</Link>
                <nav class="flex space-x-4">
                    <Link to="/" className="text-gray-600 hover:text-blue-500">立即点餐</Link>
                    <Link to="/myorder" className="text-gray-600 hover:text-blue-500">我的订单</Link>
                    {this.props.isSeller && <Link to="/myshop" className="text-gray-600 hover:text-blue-500">我的店铺</Link>}
                    {this.props.isDriver && <Link to="/catchorder" className="text-gray-600 hover:text-blue-500">立即接单</Link>}
                </nav>
            </div>
            
            <div>
                {
                    this.props.isLogin ? this.props.name: 
                    <Link to="/auth" className="text-gray-600 hover:text-blue-500">登录/注册</Link>
                }
                
            </div>
        </div>
    </header>
    );
  }
}

export default Header;