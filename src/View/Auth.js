import React, {useEffect} from 'react';
import axios from 'axios';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true, // 控制当前显示的是登录还是注册
      username: '',
      password: '',
      phone: '',
      confirmPassword: '',
      email: ''
    };
    
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  toggleForm = () => {
    this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { isLogin, username, password, confirmPassword, email } = this.state;
    if (isLogin) {
      // 处理登录逻辑
      console.log('Login', { username, password });
      this.props.onLogin({
        username,
      });
    } else {
      // 处理注册逻辑
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      axios.post('http://127.0.0.1:8888/users',{
        username: this.state.username,
        phone: this.state.phone,
        pwd: this.state.password
      })
      .then((resp)=>{
        console.log(resp)
        this.props.onLogin({
            username,
          });
          console.log(resp.data);
      })
      .catch((error)=>{
        console.log(error)
      })

    }
  }

  render() {
    

    const { isLogin, username, phone ,password, confirmPassword, email } = this.state;
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" name="username" value={username} onChange={this.handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
            </div>
            {!isLogin && (
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="number" name="phone" value={phone} onChange={this.handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
            </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" value={password} onChange={this.handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
              </div>
            )}
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={email} onChange={this.handleInputChange} className="mt-1 p-2 w-full border rounded-md" required />
              </div>
            )}
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <div className="mt-4 text-center">
            <button onClick={this.toggleForm} className="text-blue-500 hover:underline">{isLogin ? 'Switch to Register' : 'Switch to Login'}</button>
          </div>
        </div>
      </div>
    );
  }
}


export default Auth;
