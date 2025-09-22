import React from "react";
//import "./style.css";   // global styles
import "./login.css";   // login page styles

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <a href="/" className="login-logo">Welcome Back !</a>
          {/* <h2>Create Your Account</h2> */}
          <p>Enter your credentials to access your dashboard.
</p>

          <form>
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
              Login
            </button>
          </form>

          <div className="extra-links">
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
            <a href="/" className="back-to-home">
              Back to Homepage
            </a>
          </div>

          <p className="signup-link">
            Don&apos;t have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;