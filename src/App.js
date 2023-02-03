import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import CalorieTracker from "./pages/CalorieTracker";
import Layout from "./pages/Layout";
import WeightTracker from "./pages/WeightTracker";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CalorieTracker />} />
          <Route path="weighttracker" element={<WeightTracker />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;