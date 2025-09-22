import React from "react";
//import "./style.css";   // global styles
import "./login.css";   // login page styles
import "./Login.js";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-box">
            <a href="/" className="login-logo">Create Your Account</a>
            {/* <h2>Create Your Account</h2> */}
            <p>Join us to revolutionize mine safety. It's quick and easy.
            </p>

            <form>
              <div className="input-group">
                <label>You are a :</label>
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="userType"
                      value="administrative"
                    />
                    Administrative
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="userType"
                      value="miner"
                    />
                    Miner
                  </label>
                </div>
              </div>


              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button type="submit" className="cta-button login-button">
                Create Account
              </button>
            </form>

            {/* <div className="extra-links">
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <a href="/" className="back-to-home">
              Back to Homepage
            </a>
          </div>

          <p className="signup-link">
            Don&apos;t have an account? <a href="/signup">Sign up</a>
          </p> */}
            <p className="login-link">
              Already have an account?
              <Link to="/Login"> Login</Link></p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;