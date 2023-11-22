import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
