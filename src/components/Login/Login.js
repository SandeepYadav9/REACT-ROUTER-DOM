import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <form className="form">
      <div className="form-control">
        <div>
          <input type="email" />
        </div>
        <div className="form-control">
          <input type="password" />
        </div>
        <div className="button">

        <Link to="/home" className="link">Add</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
