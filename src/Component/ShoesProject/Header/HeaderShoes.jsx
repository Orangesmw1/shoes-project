import React, { Component } from "react";
import "./HeaderShoes.css";
import { NavLink } from "react-router-dom";
import Popover from "@mui/material/Popover";

export default class HeaderShoes extends Component {
  state = {
    userLogin: {
      userEmail: ""
    },
    anchorEl: null
  };

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  showComponent = () => {
    const open = Boolean(this.state.anchorEl);
    const id = open ? "simple-popover" : undefined;

    return this.state.userLogin.userEmail ? (
      <li>
        <i
          className="fa fa-user"
          style={{ cursor: "pointer" }}
          aria-describedby={id}
          variant="contained"
          onClick={this.handleClick}
        ></i>
        <Popover
          id={id}
          open={open}
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
        >
          <ul>
            <li>{this.state.userLogin.userEmail}</li>
            <NavLink to="/infoUser" style={{ textDecoration: "none" }} className="infoUser">
              <li>Account</li>
            </NavLink>
            <li>Log out</li>
          </ul>
        </Popover>
      </li>
    ) : (
      <NavLink to="/login" className="text-light">
        <li>Login</li>
      </NavLink>
    );
  };

  componentDidMount() {
    if (localStorage.getItem("dataUser")) {
      const userLocal = JSON.parse(localStorage.getItem("dataUser"));

      this.setState({
        userLogin: {
          userEmail: userLocal[0].userEmail
        }
      });
    }
  }

  render() {
    return (
      <div className="header">
        <div className="logo">
          <span className="img-logo">
            <i className="fab fa-centercode"></i>
          </span>
          <span className="name-logo">Shoes Project</span>
        </div>

        <div className="login-regis-cart">
          <ul>
            <li className="cart">
              <i className="fa fa-shopping-cart" data-toggle="modal" data-target="#exampleModal"></i>
            </li>
            <NavLink to="/register">
              <li className="register text-light">Register</li>
            </NavLink>
            {this.showComponent()}
          </ul>
        </div>
      </div>
    );
  }
}
