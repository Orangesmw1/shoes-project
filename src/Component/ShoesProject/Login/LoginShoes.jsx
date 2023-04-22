import React, { Component } from "react";
import "./LoginShoes.css";
import { NavLink, Navigate } from "react-router-dom";

export default class LoginShoes extends Component {
  state = {
    userLogin: {
      userEmail: "",
      userPass: ""
    },
    isLogin: false
  };

  handleChangeUser = (e) => {
    if (e && e.target.id === "email") {
      this.setState({
        userLogin: {
          ...this.state.userLogin,
          userEmail: e.target.value
        }
      });
    } else {
      this.setState({
        userLogin: {
          ...this.state.userLogin,
          userPass: e.target.value
        }
      });
    }
  };

  handleLogin = (e) => {
    e.preventDefault();

    const dataUser = JSON.parse(localStorage.getItem("dataUser"));

    if (dataUser) {
      dataUser.forEach((element) => {
        if (element.userEmail === this.state.userLogin.userEmail) {
          alert("Đăng nhập thành công");

          document.querySelector("form").reset();

          this.setState({
            isLogin: true
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="login-page">
        <div className="box-login">
          <div className="login-img">
            <img src="https://shop.cyberlearn.vn/images/nike-flyknit.png" alt="" />
          </div>

          <div className="form-login">
            <h4 className="title-form-login">Login</h4>
            <form>
              <input type="text" placeholder="Email" id="email" onChange={this.handleChangeUser} />
              <input type="password" placeholder="Password" id="pass" onChange={this.handleChangeUser} />
              <button className="btn btn-success" onClick={this.handleLogin}>
                Login
              </button>

              {this.state.isLogin && <Navigate to="/" />}
            </form>

            <p className="forgot">
              <span className="pr-1">Forgot</span>
              <a href="#">Username / Password</a>
            </p>
            <NavLink to="/register" className="nav-link">
              <span>Create your Account</span> <i className="fa fa-long-arrow-alt-right "></i>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
