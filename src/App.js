import React, { Component } from 'react';
import Header from './View/Common/Header';
import Footer from './View/Common/Footer';
import TakeOrder from './View/TakeOrder';
import OrderHistory from './View/OrderHistory';
import DishManagement from './View/DishManagement';
import Auth from './View/Auth';
import DriverCatch from './View/DriverCatch';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logined: false,
      user: {
        name:'',
        isDriver: false,
        isSeller: false
      }
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin = (user)=>{
    this.state.logined = true;
    this.state.user = user
    this.setState({
      logined: true,
      user
    })
    console.log(this.state.user)
  }

  render() {
    return (
      <div>
        <Router>
          <Header title='Jzr外卖' isSeller={this.state.user.isSeller} isDriver={this.state.user.isSeller} isLogin={this.state.logined} name={this.state.user.username}/>
          <Routes>
            <Route path='/' element={<TakeOrder />} />
            <Route path='/myorder' element={<OrderHistory />} />
            <Route path='/myshop' element={<DishManagement />} />
            <Route path='/catchorder' element={<DriverCatch />} />
            <Route path='/auth' element={<Auth  onLogin={this.onLogin} />}/>
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;