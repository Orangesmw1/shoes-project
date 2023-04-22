import React, { Component } from "react";
import "./InfoUser.css";

export default class InfoUser extends Component {
  state = {
    userLogin: {
      userEmail: "",
      userPass: ""
    }
  };

  componentDidMount() {
    if (localStorage.getItem("dataUser")) {
      const userLocal = JSON.parse(localStorage.getItem("dataUser"));

      this.setState({
        userLogin: {
          userEmail: userLocal.userEmail,
          userPass: userLocal.userPass
        }
      });
    }
  }

  render() {
    return (
      <div className="infoUser">
        <div className="card mb-3">
          <div className="row no-gutterss">
            <div className="col-5 img-User"></div>
            <div className="col-7">
              <div className="card-body">
                <h5 className="card-title">Info User</h5>

                <div className="box-account">
                  <p className="card-text">Email: {this.state.userLogin.userEmail}</p>
                  <p className="card-text">Password: {this.state.userLogin.userPass}</p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
