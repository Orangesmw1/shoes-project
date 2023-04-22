import React, { Component } from "react";
import "./RegisterShoes.css";
import { NavLink, Navigate } from "react-router-dom";

export default class RegisterShoes extends Component {
  state = {
    userRegister: {
      userEmail: "",
      userPass: "",
      userPassConfirm: ""
    },
    arrUserRegis: [],
    isRegis: false
  };

  handleChangeUserRegis = (e) => {
    if (e && e.target.id === "email") {
      this.setState({
        userRegister: {
          ...this.state.userRegister,
          userEmail: e.target.value
        }
      });
    } else if (e && e.target.id === "pass") {
      this.setState({
        userRegister: {
          ...this.state.userRegister,
          userPass: e.target.value
        }
      });
    } else {
      this.setState({
        userRegister: {
          ...this.state.userRegister,
          userPassConfirm: e.target.value
        }
      });
    }
  };

  handleRegister = (e) => {
    e.preventDefault();

    if (this.state.userRegister) {
      this.state.arrUserRegis.push(this.state.userRegister);

      localStorage.setItem("dataUser", JSON.stringify(this.state.arrUserRegis));

      document.querySelector("form").reset();

      alert("Đã đăng ký thành công");

      this.setState({
        isRegis: true
      });
    }
  };

  render() {
    return (
      <div className="register-page">
        <div className="box-register">
          <div className="register-img">
            <img src="https://shop.cyberlearn.vn/images/nike-flyknit.png" alt="" />
          </div>

          <div className="form-register">
            <h4 className="title-form-register">Register</h4>
            <form>
              <input type="text" placeholder="Email" id="email" onChange={this.handleChangeUserRegis} />
              <input type="password" placeholder="Password" id="pass" onChange={this.handleChangeUserRegis} />
              <input
                type="password"
                placeholder="Password-Confirm"
                id="passConfirm"
                onChange={this.handleChangeUserRegis}
              />
              <button className="btn btn-success" onClick={this.handleRegister}>
                Register
              </button>

              {this.state.isRegis && <Navigate to="/login" />}
            </form>

            <p className="forgot">
              <span className="pr-1">Forgot</span>
              <a href="#">Username / Password</a>
            </p>
            <NavLink to="/login" className="nav-link ">
              <span>Login your Account</span> <i className="fa fa-long-arrow-alt-right "></i>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
