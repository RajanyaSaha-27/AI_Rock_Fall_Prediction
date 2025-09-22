// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./App.css";

// // Import pages
// import Dashboard from "./pages/Dashboard";
// import Map from "./pages/Map";
// import Miner from "./pages/Miner";
// import Admin from "./pages/Admin";

// export default function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar */}
//         <nav className="navbar">
//           <h1 className="logo">Rockfall Prediction</h1>
//           <ul>
//             <li><Link to="/">Dashboard</Link></li>
//             <li><Link to="/map">Map</Link></li>
//             <li><Link to="/miner">Miner</Link></li>
//             <li><Link to="/admin">Admin</Link></li>
//           </ul>
//         </nav>

//         {/* Define Routes */}
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/map" element={<Map />} />
//             <Route path="/miner" element={<Miner />} />
//             <Route path="/admin" element={<Admin />} />
//           </Routes>
//         </div>

//         {/* Footer */}
//         <footer className="footer">
//           <p>© 2025 Rockfall Prediction | All Rights Reserved | CODEZEN</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import pages
import Home from "./pages/home";   // 👈 NEW
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
    
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">Smart Mine AI</h1>
          <ul>
            <li><Link to="/">Home</Link></li>   {/* 👈 Changed */}
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />  {/* 👈 Default homepage */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Smart Mine AI | All Rights Reserved | CODEZEN</p>
        </footer>
      </div>
    </Router>
    </>
    
  );
}